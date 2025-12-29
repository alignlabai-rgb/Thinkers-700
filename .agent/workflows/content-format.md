# Thinkers 700 Content Format Instructions
## Deep Enrichment Standard (2024-12-23 onwards)

This document defines the required format and content standards for all philosopher individual pages in the Thinkers 700 project.

---

## 1. Required Sections (12 Sections)

Every philosopher page must contain all 12 sections:

| Section | Title (Japanese) | Requirements |
|---------|-----------------|--------------|
| 0 | この偉人を学ぶ意味 | 2-3 sentences explaining why studying this thinker matters |
| 1 | 基本情報 & 要旨 | Abstract in English + Japanese |
| 2 | 変革の構造図 (Visual Synthesis) | 4 steps: 打破した旧常識 → 提示した新パラダイム → 実装・証明 → 現代への実装 |
| 3 | OSの核心 (Kernel) | Central question + "書き換えたコード" (detailed explanation, 3+ paragraphs) |
| 4 | 新機能の解説 (Key Components) | **Exactly 4 components**, each with 2-3 sentence explanation |
| 5 | 知の系譜 (Genealogy) | Roots (influences) + Fruits (influence on others) |
| 6 | 深層理解のアナロジー | **2 analogies**: one classic, one modern (具体的・わかりやすく) |
| 7 | 座標軸：新旧OS分析 | Comparison table with 4 rows |
| 8 | 現代への応用と倫理 | 実践 (Installation) + バグと副作用 (Limitations) |
| 9 | 思考実験 (Simulation) | Scenario-based thought experiment (3+ paragraphs) |
| 10 | 思想の限界と批判 | 3-4 bullet points of limitations/criticisms |
| 11 | 理解度チェック | **Exactly 3 questions** with collapsible answers |
| 12 | 用語集 | **Minimum 3 terms**, each with 2-3 sentence definition |

---

## 2. Quality Standards ("Deep Enrichment")

### ❌ NOT Acceptable (Too Thin)
```
■ 社会的想像
社会を制度化する意味の創造力。経済に還元できない。
```

### ✅ Acceptable (Deep & Unique)
```
■ 制度化する社会 vs 制度化された社会
社会には二つの側面があります。「制度化する社会（society instituting）」は、
マグマのように流動的で創造的な力です。一方、「制度化された社会（society 
instituted）」は、その結果として固まった構造やルールです。革命や社会変革とは、
前者が後者を打ち破り、新たな形を作り出す瞬間です。
```

### Quality Checklist
- [ ] All explanations are **2-3 sentences minimum**
- [ ] Content is **unique and specific** to this thinker (not generic)
- [ ] Modern analogies use **2024-relevant examples** (AI, メタバース, SNS, etc.)
- [ ] Thought experiments are **scenario-based** with dialogue or narrative
- [ ] Glossary terms include **English equivalents** where applicable

---

## 3. OS Tag Synchronization (CRITICAL)

### Rule: HTML page and data.js MUST match

When creating/editing a philosopher page:

1. **Check the HTML header** for OS tags:
```html
<span class="os-tag">哲学OS</span><span class="os-tag" style="margin-left: 0.5rem;">科学OS</span>
```

2. **Update data.js** to match:
```javascript
"school": ["哲学OS", "科学OS"],
```

### Available OS Types
- 哲学OS
- 心理OS
- 社会OS
- 政治OS
- 経済OS
- 法OS
- 科学方法OS
- 技術OS
- 言語OS
- 宗教OS
- 数学OS
- 倫理OS
- メディアOS

---

## 4. Visual Synthesis Step 3 Formatting

### ❌ Incorrect (Line break in the middle)
```html
<div class="synthesis-step"><span>📜</span><strong>Step 3:
        実装・証明</strong>...
```

### ✅ Correct (Single line)
```html
<div class="synthesis-step"><span>📜</span><span><strong>Step 3: 実装・証明</strong><br>...
```

---

## 5. Workflow Summary

When processing a new philosopher:

1. **Check data.js** for current rank and find the thinker
2. **Review/create the HTML page** following the 12-section template
3. **Apply Deep Enrichment** to all sections
4. **Ensure OS tags match** between HTML header and data.js
5. **Update task.md** to mark as complete
6. **Verify in browser** if possible

---

## 6. File Locations

- **Individual pages**: `c:\Users\kiku\Desktop\Contents\Thinkers-700\pages\{thinker-name}.html`
- **Data file**: `c:\Users\kiku\Desktop\Contents\Thinkers-700\data.js`
- **Index page**: `c:\Users\kiku\Desktop\Contents\Thinkers-700\index.html`
- **Task tracking**: `C:\Users\kiku\.gemini\antigravity\brain\{session}\task.md`

---

*Last updated: 2024-12-23*
