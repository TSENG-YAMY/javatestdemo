/* ============================================================
   Java Quiz Web Application
   ============================================================ */
(function () {
  'use strict';

  /* ----------------------------------------------------------
     Constants & State
  ---------------------------------------------------------- */
  const STORAGE_KEY = 'java_quiz_state';

  /** @type {QuestionData[]} */
  let allQuestions = [];

  const state = {
    quizQuestions: [],      // selected + possibly shuffled-options questions
    optionMaps: [],         // per-question: mapping from displayed index → original index (1-based)
    current: 0,             // 0-based index into quizQuestions
    answers: [],            // per question: null | number[] (1-based original indices)
    correctFlags: [],       // per question: null | boolean
    timerSeconds: 0,        // countdown in seconds
    timerInterval: null,
    elapsedSeconds: 0,
    soundEnabled: true,
    submitted: false,       // whole quiz submitted?
    startTime: null,
  };

  /* ----------------------------------------------------------
     DOM helpers
  ---------------------------------------------------------- */
  const $ = id => document.getElementById(id);
  const show = el => el && el.classList.remove('hidden');
  const hide = el => el && el.classList.add('hidden');
  const setActive = pageId => {
    document.querySelectorAll('.page').forEach(p => {
      p.classList.remove('active');
      p.classList.add('hidden');
    });
    const page = $(pageId);
    if (page) { page.classList.remove('hidden'); page.classList.add('active'); }
  };

  /* ----------------------------------------------------------
     Audio (Web Audio API)
  ---------------------------------------------------------- */
  let audioCtx = null;
  function getAudioCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
  }

  function playTone(freq, startTime, duration, type = 'sine', gain = 0.3) {
    try {
      const ctx = getAudioCtx();
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
      osc.type = type;
      osc.frequency.setValueAtTime(freq, startTime);
      gainNode.gain.setValueAtTime(gain, startTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
      osc.start(startTime);
      osc.stop(startTime + duration);
    } catch (e) { /* ignore */ }
  }

  function playCorrectSound() {
    if (!state.soundEnabled) return;
    try {
      const ctx = getAudioCtx();
      const now = ctx.currentTime;
      [523, 659, 784, 1047].forEach((f, i) => playTone(f, now + i * 0.12, 0.18));
    } catch (e) { /* ignore */ }
  }

  function playWrongSound() {
    if (!state.soundEnabled) return;
    try {
      const ctx = getAudioCtx();
      const now = ctx.currentTime;
      [400, 320, 240].forEach((f, i) => playTone(f, now + i * 0.15, 0.2, 'sawtooth', 0.2));
    } catch (e) { /* ignore */ }
  }

  /* ----------------------------------------------------------
     Fisher-Yates shuffle
  ---------------------------------------------------------- */
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* ----------------------------------------------------------
     Weighted random selection
  ---------------------------------------------------------- */
  function weightedSample(pool, count) {
    if (count >= pool.length) return shuffle(pool);
    const result = [];
    const remaining = pool.slice();
    for (let n = 0; n < count; n++) {
      const totalWeight = remaining.reduce((s, q) => s + (q.weight || 1), 0);
      let r = Math.random() * totalWeight;
      let idx = 0;
      for (let i = 0; i < remaining.length; i++) {
        r -= (remaining[i].weight || 1);
        if (r <= 0) { idx = i; break; }
      }
      result.push(remaining[idx]);
      remaining.splice(idx, 1);
    }
    return result;
  }

  /* ----------------------------------------------------------
     Timer helpers
  ---------------------------------------------------------- */
  function formatTime(totalSeconds) {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  }

  function startTimer(totalSeconds) {
    state.timerSeconds = totalSeconds;
    state.startTime = Date.now();
    clearInterval(state.timerInterval);
    updateTimerDisplay();
    state.timerInterval = setInterval(() => {
      state.timerSeconds--;
      if (state.timerSeconds <= 0) {
        state.timerSeconds = 0;
        updateTimerDisplay();
        clearInterval(state.timerInterval);
        autoSubmitQuiz();
      } else {
        updateTimerDisplay();
      }
    }, 1000);
  }

  function stopTimer() {
    clearInterval(state.timerInterval);
    if (state.startTime) {
      state.elapsedSeconds = Math.round((Date.now() - state.startTime) / 1000);
    }
  }

  function updateTimerDisplay() {
    const el = $('header-timer');
    if (!el) return;
    el.textContent = formatTime(state.timerSeconds);
    if (state.timerSeconds <= 60) el.classList.add('urgent');
    else el.classList.remove('urgent');
  }

  /* ----------------------------------------------------------
     Load questions.json
  ---------------------------------------------------------- */
  function loadQuestions() {
    // If data was pre-loaded via data/questions.js (file:// mode), use it directly
    if (window.QUESTIONS_DATA && Array.isArray(window.QUESTIONS_DATA)) {
      return Promise.resolve(window.QUESTIONS_DATA);
    }
    return fetch('data/questions.json')
      .then(r => {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      });
  }

  /* ----------------------------------------------------------
     Setup Page
  ---------------------------------------------------------- */
  function initSetupPage() {
    const loadingEl = $('setup-loading');
    const formEl    = $('setup-form');
    const errorEl   = $('load-error');

    loadQuestions()
      .then(data => {
        allQuestions = Array.isArray(data) ? data : [];
        hide(loadingEl);
        show(formEl);

        // defaults: set range-end to max id
        const maxId = allQuestions.reduce((m, q) => Math.max(m, q.id), 0);
        $('range-end').value = maxId || 999;

        buildWeightPreview();
        attachSetupListeners();
      })
      .catch(() => {
        hide(loadingEl);
        show(errorEl);
      });
  }

  function buildWeightPreview() {
    const weighted = allQuestions
      .filter(q => (q.weight || 1) > 1)
      .slice()
      .sort((a, b) => (b.weight || 1) - (a.weight || 1));

    const container = $('weight-preview-list');
    if (!container) return;

    if (weighted.length === 0) {
      container.innerHTML = '<em style="color:var(--text-muted)">無高權重題目</em>';
      return;
    }

    container.innerHTML = weighted.map(q => {
      // strip html tags for snippet
      const tmp = document.createElement('div');
      tmp.innerHTML = q.question;
      const snippet = (tmp.textContent || tmp.innerText || '').replace(/\s+/g, ' ').trim().slice(0, 80);
      return `<div class="weight-item">
        <span class="weight-badge">×${q.weight}</span>
        <span class="weight-id">Q${q.id}</span>
        <span class="weight-snippet">${escapeHtml(snippet)}</span>
      </div>`;
    }).join('');
  }

  function searchQuestion() {
    const idVal = parseInt($('search-id').value, 10);
    const resultEl = $('search-result');

    if (!idVal || isNaN(idVal)) {
      resultEl.innerHTML = '<p class="search-msg">請輸入有效題號。</p>';
      show(resultEl);
      return;
    }

    const q = allQuestions.find(q => q.id === idVal);
    if (!q) {
      resultEl.innerHTML = `<p class="search-msg search-msg-error">找不到題號 ${idVal}。</p>`;
      show(resultEl);
      return;
    }

    const typeClass = q.type === 'multiple' ? 'badge-multi' : 'badge-single';
    const typeLabel = q.type === 'multiple' ? '複選題' : '單選題';

    let html = `<div class="question-meta" style="margin-top:.75rem">
      <span class="badge badge-id">Q${q.id}</span>
      <span class="badge ${typeClass}">${typeLabel}</span>
    </div>
    <div class="review-content" id="search-q-content">${q.question}</div>
    <ul class="review-options">`;

    q.options.forEach((opt, oi) => {
      const isAnswer = q.answer.includes(oi + 1);
      const letter   = String.fromCharCode(65 + oi);
      const cls      = isAnswer ? 'correct-answer' : '';
      const optHtml  = opt.includes('\n')
        ? `<div class="option-code"><pre class="line-numbers line-hight19"><code class="language-csharp">${escapeHtml(opt)}</code></pre></div>`
        : escapeHtml(opt);
      html += `<li class="review-option ${cls}">
        <span class="option-num">${letter}. </span><span>${optHtml}</span>
      </li>`;
    });

    html += '</ul>';

    const answerLetters = q.answer.map(ai => String.fromCharCode(64 + ai)).join(', ');
    html += `<div class="search-answer">正確答案：<strong>${answerLetters}</strong></div>`;

    if (q.explanation && q.explanation.trim()) {
      html += `<div class="review-explanation"><strong>解析：</strong> ${escapeHtml(q.explanation)}</div>`;
    }

    resultEl.innerHTML = html;
    show(resultEl);
    Prism.highlightAllUnder(resultEl);
  }

  function attachSetupListeners() {
    // Sound toggle label
    const soundCheck = $('sound-toggle');
    const soundLabel = $('sound-label');
    soundCheck.addEventListener('change', () => {
      state.soundEnabled = soundCheck.checked;
      soundLabel.textContent = soundCheck.checked ? '開啟' : '關閉';
    });

    // Search by question ID
    $('btn-search').addEventListener('click', searchQuestion);
    $('search-id').addEventListener('keydown', e => { if (e.key === 'Enter') searchQuestion(); });

    // Download JSON
    $('btn-download').addEventListener('click', () => {
      const blob = new Blob([JSON.stringify(allQuestions, null, 2)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'questions.json';
      a.click();
    });

    // Preview quiz (same as start but scrolls to top — here we just open quiz page in preview mode)
    $('btn-preview').addEventListener('click', () => prepareAndStartQuiz(true));
    $('btn-start').addEventListener('click',   () => prepareAndStartQuiz(false));
  }

  /* ----------------------------------------------------------
     Build quiz from setup
  ---------------------------------------------------------- */
  function getSetupConfig() {
    const rangeStart  = parseInt($('range-start').value, 10) || 1;
    const rangeEnd    = parseInt($('range-end').value,   10) || 99999;
    const countVal    = $('count-select').value;
    const timeLimitM  = Math.max(1, Math.min(999, parseInt($('time-limit').value, 10) || 60));
    const optionOrder = document.querySelector('input[name="option-order"]:checked').value;
    const soundOn     = $('sound-toggle').checked;
    return { rangeStart, rangeEnd, countVal, timeLimitM, optionOrder, soundOn };
  }

  function prepareAndStartQuiz(isPreview) {
    const cfg = getSetupConfig();
    state.soundEnabled = cfg.soundOn;

    // Filter by range
    let pool = allQuestions.filter(q => q.id >= cfg.rangeStart && q.id <= cfg.rangeEnd);

    if (pool.length === 0) {
      alert('所選範圍內沒有題目，請調整範圍。');
      return;
    }

    // Determine count
    let count;
    if (cfg.countVal === 'all') {
      count = pool.length;
    } else {
      count = parseInt(cfg.countVal, 10) || 20;
    }

    // Select via weighted sampling
    state.quizQuestions = weightedSample(pool, count);

    // Build option maps (shuffled or original)
    state.optionMaps = state.quizQuestions.map(q => {
      const n = q.options.length;
      // optionMap[displayIdx] = originalIdx (1-based)
      if (cfg.optionOrder === 'random') {
        const indices = Array.from({ length: n }, (_, i) => i + 1);
        return shuffle(indices);
      } else {
        return Array.from({ length: n }, (_, i) => i + 1);
      }
    });

    // Reset answers
    state.answers      = state.quizQuestions.map(() => null);
    state.correctFlags = state.quizQuestions.map(() => null);
    state.current      = 0;
    state.submitted    = false;
    state.elapsedSeconds = 0;
    state.startTime    = null;

    // Timer
    const totalSeconds = cfg.timeLimitM * 60;

    setActive('page-quiz');
    renderQuestionNav();
    renderQuestion(0);
    startTimer(totalSeconds);

    if (!isPreview) {
      saveState();
    }
  }

  /* ----------------------------------------------------------
     Quiz Page: render
  ---------------------------------------------------------- */
  function renderQuestion(idx) {
    if (!state.quizQuestions.length) return;
    state.current = idx;

    const q       = state.quizQuestions[idx];
    const optMap  = state.optionMaps[idx];          // display order → original 1-based
    const total   = state.quizQuestions.length;
    const pct     = Math.round((idx / total) * 100);
    const answered = state.answers[idx] !== null;

    // header
    $('header-progress').textContent = `第 ${idx + 1}/${total} 題 (${pct}%)`;

    // badges
    $('badge-qid').textContent  = `Q${q.id}`;
    const typeEl = $('badge-type');
    if (q.type === 'multiple') {
      typeEl.textContent = '複選題';
      typeEl.className = 'badge badge-multi';
    } else {
      typeEl.textContent = '單選題';
      typeEl.className = 'badge badge-single';
    }

    // question HTML
    const contentEl = $('question-content');
    contentEl.innerHTML = q.question;
    Prism.highlightAllUnder(contentEl);

    // image
    const imgWrap = $('question-image-wrap');
    const imgEl   = $('question-image');
    if (q.image) {
      imgEl.src = 'data/images/' + q.image;
      show(imgWrap);
    } else {
      hide(imgWrap);
    }

    // options
    const listEl = $('options-list');
    listEl.innerHTML = '';

    optMap.forEach((origIdx, displayIdx) => {
      const optText = q.options[origIdx - 1];
      const li = document.createElement('li');
      li.className = 'option-item';
      li.dataset.orig = origIdx;

      const inputEl = document.createElement('input');
      inputEl.type = q.type === 'multiple' ? 'checkbox' : 'radio';
      inputEl.name = 'option_' + idx;
      inputEl.value = origIdx;
      inputEl.id    = 'opt_' + idx + '_' + displayIdx;

      const labelEl = document.createElement('label');
      labelEl.htmlFor = inputEl.id;
      labelEl.className = 'option-label';

      const numSpan = document.createElement('span');
      numSpan.className = 'option-num';
      numSpan.textContent = String.fromCharCode(65 + displayIdx) + '. ';

      // If option text contains \n, render as code block
      let contentNode;
      if (optText.includes('\n')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'option-code';
        wrapper.innerHTML = `<pre class="line-numbers line-hight19"><code class="language-csharp">${escapeHtml(optText)}</code></pre>`;
        contentNode = wrapper;
      } else {
        const span = document.createElement('span');
        span.textContent = optText;
        contentNode = span;
      }

      labelEl.appendChild(numSpan);
      labelEl.appendChild(contentNode);

      li.appendChild(inputEl);
      li.appendChild(labelEl);

      // Click handler on li
      if (!answered) {
        li.addEventListener('click', (e) => {
          if (e.target === inputEl) return; // already handled
          if (q.type === 'multiple') {
            inputEl.checked = !inputEl.checked;
          } else {
            inputEl.checked = true;
          }
          updateOptionStyles();
        });
        inputEl.addEventListener('change', updateOptionStyles);
      }

      listEl.appendChild(li);
    });

    // Highlight code in options
    Prism.highlightAllUnder(listEl);

    // Restore previous answer & show feedback if already answered
    const feedbackEl    = $('feedback-area');
    const explanationEl = $('explanation-area');
    const answerBtn     = $('btn-answer');
    const navActionsEl  = $('nav-actions');
    const nextBtn       = $('btn-next');

    if (answered) {
      // Re-apply saved answer
      const savedAnswer = state.answers[idx]; // number[]
      listEl.querySelectorAll('input').forEach(inp => {
        if (savedAnswer.includes(parseInt(inp.value, 10))) inp.checked = true;
      });
      lockOptions();
      showPostAnswerUI(idx);
      hide(answerBtn);
      show(navActionsEl);
    } else {
      show(answerBtn);
      hide(feedbackEl);
      hide(explanationEl);
      hide(navActionsEl);
      answerBtn.onclick = () => submitAnswer(idx);
    }

    // Next button label
    if (idx >= total - 1) {
      nextBtn.textContent = '回到第一題';
      nextBtn.onclick = () => renderQuestion(0);
    } else {
      nextBtn.textContent = '繼續下一題';
      nextBtn.onclick = () => renderQuestion(idx + 1);
    }

    // update nav bar
    renderQuestionNav();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function updateOptionStyles() {
    const listEl = $('options-list');
    listEl.querySelectorAll('.option-item').forEach(li => {
      const inp = li.querySelector('input');
      li.classList.toggle('selected', inp && inp.checked);
    });
  }

  function lockOptions() {
    const listEl = $('options-list');
    listEl.querySelectorAll('.option-item').forEach(li => li.classList.add('answered'));
    listEl.querySelectorAll('input').forEach(inp => inp.disabled = true);
  }

  function submitAnswer(idx) {
    const q = state.quizQuestions[idx];
    const listEl = $('options-list');

    // Collect selected original indices
    const selected = [];
    listEl.querySelectorAll('input:checked').forEach(inp => {
      selected.push(parseInt(inp.value, 10));
    });

    if (selected.length === 0) {
      alert(q.type === 'multiple' ? '請至少選擇一個選項。' : '請選擇一個選項。');
      return;
    }

    state.answers[idx] = selected;

    // Check correctness
    const correct = q.answer.slice().sort((a,b)=>a-b);
    const selectedSorted = selected.slice().sort((a,b)=>a-b);
    const isCorrect = correct.length === selectedSorted.length &&
                      correct.every((v, i) => v === selectedSorted[i]);

    state.correctFlags[idx] = isCorrect;

    // Sound
    if (isCorrect) playCorrectSound(); else playWrongSound();

    lockOptions();
    showPostAnswerUI(idx);
    hide($('btn-answer'));
    show($('nav-actions'));
    renderQuestionNav();
    saveState();
  }

  function showPostAnswerUI(idx) {
    const q          = state.quizQuestions[idx];
    const feedbackEl = $('feedback-area');
    const explEl     = $('explanation-area');
    const isCorrect  = state.correctFlags[idx];
    const listEl     = $('options-list');
    const userAns    = state.answers[idx] || [];

    // Highlight options
    listEl.querySelectorAll('.option-item').forEach(li => {
      const origIdx = parseInt(li.dataset.orig, 10);
      const isAnswer   = q.answer.includes(origIdx);
      const isSelected = userAns.includes(origIdx);
      li.classList.remove('correct-answer', 'wrong-answer');
      if (isAnswer)                       li.classList.add('correct-answer');
      else if (isSelected && !isAnswer)   li.classList.add('wrong-answer');
    });

    // Feedback
    show(feedbackEl);
    feedbackEl.className = 'feedback-area ' + (isCorrect ? 'feedback-correct' : 'feedback-wrong');

    const icon = isCorrect ? '✓ 回答正確！' : '✗ 回答錯誤';
    let html = `<div>${icon}</div>`;

    if (!isCorrect) {
      // Map original indices back to display numbers is complex; just show text labels
      const correctLabels = q.answer.map(ai => {
        const opt = q.options[ai - 1];
        const snippet = opt.includes('\n') ? opt.split('\n')[0] + '…' : opt;
        return `<strong>${String.fromCharCode(64 + ai)}.</strong> ${escapeHtml(snippet)}`;
      }).join('；');
      const userLabels = userAns.map(ai => {
        const opt = q.options[ai - 1];
        const snippet = opt.includes('\n') ? opt.split('\n')[0] + '…' : opt;
        return `<strong>${String.fromCharCode(64 + ai)}.</strong> ${escapeHtml(snippet)}`;
      }).join('；');
      html += `<div class="answer-comparison">
        <div>✔ 正確答案：${correctLabels}</div>
        <div>✘ 你的答案：${userLabels}</div>
      </div>`;
    }

    feedbackEl.innerHTML = html;

    // Explanation
    if (q.explanation && q.explanation.trim()) {
      show(explEl);
      explEl.innerHTML = '<strong>解析：</strong> ' + escapeHtml(q.explanation);
    } else {
      hide(explEl);
    }
  }

  /* ----------------------------------------------------------
     Quiz Navigation Bar
  ---------------------------------------------------------- */
  function renderQuestionNav() {
    const nav = $('question-nav');
    if (!nav) return;
    nav.innerHTML = '';
    state.quizQuestions.forEach((q, i) => {
      const btn = document.createElement('button');
      btn.className = 'nav-btn';
      btn.textContent = i + 1;
      if (i === state.current)    btn.classList.add('current');
      if (state.correctFlags[i] === true)  btn.classList.add('nav-correct');
      if (state.correctFlags[i] === false) btn.classList.add('nav-wrong');
      btn.addEventListener('click', () => renderQuestion(i));
      nav.appendChild(btn);
    });
  }

  /* ----------------------------------------------------------
     Submit / Finish Quiz
  ---------------------------------------------------------- */
  function autoSubmitQuiz() {
    // Mark unanswered as wrong
    state.quizQuestions.forEach((q, i) => {
      if (state.answers[i] === null) {
        state.answers[i] = [];
        state.correctFlags[i] = false;
      }
    });
    state.submitted = true;
    finishQuiz();
  }

  function finishQuiz() {
    stopTimer();
    state.submitted = true;
    saveState();
    showResults();
  }

  function initQuizPageListeners() {
    $('btn-submit-now').addEventListener('click', () => {
      if (!confirm('確定要立即交卷嗎？未作答的題目將計為錯誤。')) return;
      autoSubmitQuiz();
    });
    $('btn-restart').addEventListener('click', () => {
      if (!confirm('確定要重新開始？目前進度將遺失。')) return;
      stopTimer();
      setActive('page-setup');
    });
  }

  /* ----------------------------------------------------------
     Results Page
  ---------------------------------------------------------- */
  function showResults() {
    setActive('page-results');

    const total     = state.quizQuestions.length;
    const correct   = state.correctFlags.filter(f => f === true).length;
    const wrong     = state.correctFlags.filter(f => f === false).length;
    const unanswered = state.correctFlags.filter(f => f === null).length;
    const accuracy  = total ? Math.round((correct / total) * 100) : 0;
    const elapsed   = state.elapsedSeconds;

    $('result-score').textContent    = `${correct} / ${total}`;
    $('result-accuracy').textContent = `${accuracy}%`;
    $('result-time').textContent     = formatTime(elapsed);

    // Chart
    renderResultChart(correct, wrong, unanswered);

    // Wrong review
    buildWrongReview();

    $('btn-retry').onclick = () => {
      stopTimer();
      setActive('page-setup');
    };
  }

  let resultChartInstance = null;

  function renderResultChart(correct, wrong, unanswered) {
    if (resultChartInstance) {
      resultChartInstance.destroy();
      resultChartInstance = null;
    }
    const ctx = document.getElementById('result-chart').getContext('2d');
    resultChartInstance = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['答對', '答錯', '未作答'],
        datasets: [{
          data: [correct, wrong, unanswered],
          backgroundColor: ['#2e7d32', '#c62828', '#90a4ae'],
          borderWidth: 2,
          borderColor: '#fff',
        }]
      },
      options: {
        responsive: false,
        plugins: {
          legend: { position: 'bottom' },
          tooltip: {
            callbacks: {
              label: ctx => ` ${ctx.label}: ${ctx.parsed} 題`
            }
          }
        }
      }
    });
  }

  function buildWrongReview() {
    const container = $('wrong-review');
    container.innerHTML = '';

    const wrongItems = state.quizQuestions
      .map((q, i) => ({ q, i }))
      .filter(({ i }) => state.correctFlags[i] !== true)
      .sort((a, b) => a.q.id - b.q.id);

    if (wrongItems.length === 0) {
      container.innerHTML = '<div class="card" style="text-align:center;color:var(--success);font-weight:700;">全部答對！</div>';
      return;
    }

    const heading = document.createElement('h2');
    heading.textContent = `錯誤 / 未作答題目（共 ${wrongItems.length} 題）`;
    container.appendChild(heading);

    wrongItems.forEach(({ q, i }) => {
      const userAns = state.answers[i] || [];
      const item = document.createElement('div');
      item.className = 'card review-item';

      // meta
      const isUnanswered = userAns.length === 0;
      const meta = document.createElement('div');
      meta.className = 'question-meta';
      meta.innerHTML = `<span class="badge badge-id">Q${q.id}</span>
        <span class="badge ${q.type === 'multiple' ? 'badge-multi' : 'badge-single'}">${q.type === 'multiple' ? '複選題' : '單選題'}</span>
        ${isUnanswered ? '<span class="badge badge-unanswered">未作答</span>' : '<span class="badge badge-wrong">答錯</span>'}`;
      item.appendChild(meta);

      // question content
      const contentDiv = document.createElement('div');
      contentDiv.className = 'review-content';
      contentDiv.innerHTML = q.question;
      Prism.highlightAllUnder(contentDiv);
      item.appendChild(contentDiv);

      // options
      const ul = document.createElement('ul');
      ul.className = 'review-options';

      q.options.forEach((optText, oi) => {
        const origIdx  = oi + 1;
        const isAnswer = q.answer.includes(origIdx);
        const isUser   = userAns.includes(origIdx);

        const li = document.createElement('li');
        li.className = 'review-option';
        if (isAnswer)              li.classList.add('correct-answer');
        else if (isUser && !isAnswer) li.classList.add('wrong-answer');

        const numSpan = document.createElement('span');
        numSpan.className = 'option-num';
        numSpan.textContent = String.fromCharCode(65 + oi) + '. ';

        let contentNode;
        if (optText.includes('\n')) {
          const div = document.createElement('div');
          div.className = 'option-code';
          div.innerHTML = `<pre class="line-numbers line-hight19"><code class="language-csharp">${escapeHtml(optText)}</code></pre>`;
          contentNode = div;
        } else {
          const span = document.createElement('span');
          span.textContent = optText;
          contentNode = span;
        }

        li.appendChild(numSpan);
        li.appendChild(contentNode);
        ul.appendChild(li);
      });

      Prism.highlightAllUnder(ul);
      item.appendChild(ul);

      // explanation
      if (q.explanation && q.explanation.trim()) {
        const expDiv = document.createElement('div');
        expDiv.className = 'review-explanation';
        expDiv.innerHTML = '<strong>解析：</strong> ' + escapeHtml(q.explanation);
        item.appendChild(expDiv);
      }

      container.appendChild(item);
    });
  }

  /* ----------------------------------------------------------
     localStorage persistence
  ---------------------------------------------------------- */
  function saveState() {
    try {
      const snapshot = {
        quizQuestions: state.quizQuestions,
        optionMaps:    state.optionMaps,
        current:       state.current,
        answers:       state.answers,
        correctFlags:  state.correctFlags,
        timerSeconds:  state.timerSeconds,
        soundEnabled:  state.soundEnabled,
        submitted:     state.submitted,
        elapsedSeconds: state.elapsedSeconds,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
    } catch (e) { /* quota exceeded or private mode */ }
  }

  /* ----------------------------------------------------------
     Utility
  ---------------------------------------------------------- */
  function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /* ----------------------------------------------------------
     Bootstrap
  ---------------------------------------------------------- */
  function init() {
    setActive('page-setup');
    initSetupPage();
    initQuizPageListeners();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
