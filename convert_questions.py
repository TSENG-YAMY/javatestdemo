import re
import json

def parse_answers_from_header(raw):
    if ',' in raw:
        return [a.strip().upper() for a in raw.split(',')]
    elif len(raw) > 1:
        return list(raw.upper())
    else:
        return [raw.upper()]

def find_cutoff(text):
    """Find where the answer/explanation section starts."""
    patterns = [
        r'^題解',
        r'^Correct Answer',
        r'^ANS[：:]\s*[A-H]',
        r'^ANS：?$',
        r'^Ans[：:]',
        r'^總結',
    ]
    combined = re.compile('(' + '|'.join(patterns) + ')', re.IGNORECASE | re.MULTILINE)
    m = combined.search(text)
    if m:
        line_start = text.rfind('\n', 0, m.start()) + 1
        return line_start
    return len(text)

def split_options(text):
    # Normalize inline option markers: " B) " → "\nB) " so they're detected as line-start
    text = re.sub(r'(?<=\S) ([B-H])\) ', r'\n\1) ', text)
    lines = text.split('\n')
    # Match: "A." / "A)" / "A：" with content, or standalone "A" on its own line
    option_re = re.compile(r'^([A-H])[.)：]\s*(.*)|^([A-H])\s*$')

    candidates = []
    for i, line in enumerate(lines):
        m = option_re.match(line.rstrip())
        if m:
            letter = m.group(1) or m.group(3)
            inline = m.group(2) if m.group(2) is not None else ''
            candidates.append((i, letter, inline))

    if not candidates:
        return text, {}

    # Find the first consecutive group starting from A
    best_group = None
    for start_j in range(len(candidates)):
        if candidates[start_j][1] != 'A':
            continue
        group = [candidates[start_j]]
        expected = 'B'
        for k in range(start_j + 1, len(candidates)):
            if candidates[k][1] == expected:
                group.append(candidates[k])
                expected = chr(ord(expected) + 1)
        if best_group is None or len(group) > len(best_group):
            best_group = group

    if not best_group:
        return text, {}

    question_lines = lines[:best_group[0][0]]
    question_text = '\n'.join(question_lines).strip()

    options = {}
    for j, (start_idx, letter, inline_text) in enumerate(best_group):
        end_idx = best_group[j + 1][0] if j + 1 < len(best_group) else len(lines)
        opt_lines = []
        if inline_text.strip():
            opt_lines.append(inline_text.strip())
        opt_lines.extend(lines[start_idx + 1:end_idx])
        options[letter] = '\n'.join(opt_lines).strip()

    return question_text, options

def clean_text(text):
    # Remove "Q8: topic" or "Q8:" style headings at start
    text = re.sub(r'^Q\d+:[^\n]*\n?', '', text)
    # Remove "QUESTION N" lines
    text = re.sub(r'^QUESTION\s+\d+\s*\n?', '', text, flags=re.IGNORECASE)
    # Remove standalone "Java" or "java" language label lines
    text = re.sub(r'(?m)^Java\s*$\n?', '', text, flags=re.IGNORECASE)
    text = re.sub(r'(?m)^java\s*$\n?', '', text, flags=re.IGNORECASE)
    return text.strip()

def parse_file(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    header_re = re.compile(r'===(\d+)\(([^)]+)\)===')
    headers = list(header_re.finditer(content))

    questions = []

    for i, header in enumerate(headers):
        q_num = int(header.group(1))
        answers = parse_answers_from_header(header.group(2))

        block_start = header.end()
        block_end = headers[i + 1].start() if i + 1 < len(headers) else len(content)
        block = content[block_start:block_end].strip()

        cut = find_cutoff(block)
        block = block[:cut].strip()

        question_text, options = split_options(block)
        question_text = clean_text(question_text)
        for k in options:
            options[k] = clean_text(options[k])

        questions.append({
            "id": q_num,
            "answers": answers,
            "question": question_text,
            "options": options
        })

    return questions

if __name__ == "__main__":
    questions = parse_file("e:/vscode/dotnet9/javatestdemo/question106.txt")
    out_path = "e:/vscode/dotnet9/javatestdemo/questions.json"
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(questions, f, ensure_ascii=False, indent=2)
    print(f"Converted {len(questions)} questions -> {out_path}")
    for q in questions[:5]:
        print(f"  Q{q['id']} ans={q['answers']} opts={list(q['options'].keys())} q_len={len(q['question'])}")
