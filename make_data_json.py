import re
import json
import html
import os

# Intro sentences that should appear as plain text BEFORE the <pre><code> block
INTRO_RE = re.compile(
    r'^(Given\b|And given\b)',
    re.IGNORECASE
)

def letter_to_num(letter):
    return ord(letter.upper()) - ord('A') + 1

def clean_preamble(text):
    """Remove leftover pag/QUESTION labels before actual content."""
    lines = text.split('\n')
    out = []
    for l in lines:
        s = l.strip()
        if re.match(r'^pag\d+$', s, re.IGNORECASE):
            continue
        # Match both "QUESTION 23" and "CQUESTION 58" style labels
        if re.match(r'^[A-Z]{0,3}QUESTION\s+\d+', s, re.IGNORECASE):
            continue
        out.append(l)
    return '\n'.join(out)

def format_question(text):
    """Format question text: intro as plain text, code in <pre><code>, question sentence plain."""
    text = clean_preamble(text)
    lines = text.split('\n')

    # Step 1: find last line containing '?' as the question sentence
    q_idx = -1
    for i in range(len(lines) - 1, -1, -1):
        if lines[i].strip() and '?' in lines[i]:
            q_idx = i
            break

    if q_idx < 0:
        # No '?' — if multi-line, treat entire content as code
        non_empty = [l for l in lines if l.strip()]
        if len(non_empty) > 1:
            code_lines = lines[:]
            while code_lines and not code_lines[0].strip():
                code_lines.pop(0)
            while code_lines and not code_lines[-1].strip():
                code_lines.pop()
            code_escaped = html.escape('\n'.join(code_lines))
            return (
                f'<pre class="line-numbers line-hight19"><code class="language-csharp">'
                f'{code_escaped}</code></pre>\n'
            )
        return '\n'.join(non_empty)

    question_sentence = lines[q_idx].strip()

    # Step 2: collect all content before the question sentence
    pre_lines = lines[:q_idx]
    # Strip leading/trailing blank lines
    while pre_lines and not pre_lines[0].strip():
        pre_lines.pop(0)
    while pre_lines and not pre_lines[-1].strip():
        pre_lines.pop()

    if not pre_lines:
        # Pure question sentence, no code
        return question_sentence

    # Step 3: separate intro line(s) from code
    # Intro lines match INTRO_RE and appear at the very start (before any code)
    intro_parts = []
    code_start = 0
    i = 0
    while i < len(pre_lines):
        s = pre_lines[i].strip()
        if not s:
            # Blank line: if we already collected intro, skip blanks and stop scanning intro
            if intro_parts:
                i += 1
                # skip remaining blanks
                while i < len(pre_lines) and not pre_lines[i].strip():
                    i += 1
                code_start = i
                break
            else:
                i += 1
                continue
        if INTRO_RE.match(s):
            intro_parts.append(s)
            i += 1
        else:
            # First non-blank, non-intro line: code starts here
            code_start = i
            break

    # Step 4: everything from code_start to end of pre_lines is code
    code_lines = pre_lines[code_start:]
    # Strip trailing blank lines (leading already stripped in step 2)
    while code_lines and not code_lines[-1].strip():
        code_lines.pop()

    # Step 5: build result
    parts = []
    if intro_parts:
        parts.append('\n'.join(intro_parts))
    if code_lines:
        code_escaped = html.escape('\n'.join(code_lines))
        parts.append(
            f'<pre class="line-numbers line-hight19"><code class="language-csharp">'
            f'{code_escaped}</code></pre>'
        )
    parts.append(question_sentence)

    return '\n'.join(parts)

def convert(input_path, output_path):
    with open(input_path, 'r', encoding='utf-8') as f:
        questions = json.load(f)

    result = []
    for q in questions:
        type_ = "single" if len(q["answers"]) == 1 else "multiple"
        answer = [letter_to_num(a) for a in q["answers"]]

        # Options: dict → ordered array
        sorted_keys = sorted(q["options"].keys())
        options = [q["options"][k] for k in sorted_keys]

        question = format_question(q["question"])

        result.append({
            "id": q["id"],
            "type": type_,
            "question": question,
            "options": options,
            "answer": answer,
            "weight": 1,
            "image": None,
            "explanation": ""
        })

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(result, f, ensure_ascii=False, indent=2)
    print(f"Converted {len(result)} questions → {output_path}")
    # Verify a sample
    print(f"\nQ1 type={result[0]['type']} answer={result[0]['answer']}")
    print(f"Q1 question[:80]={result[0]['question'][:80]}")
    print(f"Q1 opts[0][:60]={result[0]['options'][0][:60]}")
    q4 = next(r for r in result if r['id'] == 4)
    print(f"\nQ4 type={q4['type']} answer={q4['answer']}")

if __name__ == "__main__":
    convert(
        "e:/vscode/dotnet9/javatestdemo/questions.json",
        "e:/vscode/dotnet9/javatestdemo/data/questions.json"
    )
