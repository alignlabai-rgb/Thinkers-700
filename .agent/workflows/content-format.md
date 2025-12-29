# Thinkers 700 Content Format Instructions
## Deep Enrichment Standard (2024-12-23 onwards)

This document defines the required format and content standards for all philosopher individual pages in the Thinkers 700 project.

---

## 1. Required Sections (12 Sections)

Every philosopher page must contain 12 sections. There are two "Grades" of enrichment:

### A. Standard Version (Perfect Format)
**Benchmark:** [Harriet Taylor Mill](file:///C:/Users/kiku/Desktop/Contents/thinkers-700/pages/mill-harriet-taylor.html)
- **Header**: Standard indigo/purple theme + "知のOS標準バッジ" (or thematic banner).
- **Core Additions**: 
    - **Section 0b (Major Works)**: Included before Section 1.
    - **Section 3 (Kernel)**: Must include a **Quote Box** within the code explanation.
    - **Section 6 (Analogy)**: **Exactly 3 analogies** (1 classic, 1 modern, 1 unique/metaphorical).
    - **Section 8 (Application)**: Must include **Side Effects (副作用)** subsection.
    - **Section 11 (Q&A)**: **4-6 questions** (collapsible).
    - **Section 12 (Glossary)**: **5-7 terms**.

### B. Special Edition (Premium)
**Benchmark:** [John Stuart Mill](file:///C:/Users/kiku/Desktop/Contents/thinkers-700/pages/mill-john-stuart.html)
- **Superset**: Includes everything in the Standard Version.
- **Header**: Gold/Glassmorphism pulse banner + ⭐ 特別編 ⭐ label.
- **Advanced Visuals**: Use of complex CSS gradients, hover effects, and distinct section styling.
- **Section 9 (Simulation)**: Deep, multi-paragraph scenario-based dialogue (3+ paragraphs).
- **Criticism & Detail**: More items in sections 10-12 (e.g., 5+ criticisms, 7+ glossary terms).
- **Cross-References**: Deep genealogy links to other thinkers in the 700 list.

| Section | Title (Japanese) | Requirements |
|---------|-----------------|--------------|
| 0 | この偉人を学ぶ意味 | 2-3 sentences explaining relevance |
| 0b | 📚 主著・主業績ガイド | **[NEW]** Summary of major works/impact |
| 1 | 基本情報 & 要旨 | Abstract in English + Japanese |
| 2 | 変革の構造図 (Visual Synthesis) | 4 steps (Single line formatting) |
| 3 | OSの核心 (Kernel) | Central question + "書き換えたコード" + **Quote Box** |
| 4 | 新機能の解説 (Key Components) | Exactly 4 components (Deep explanations) |
| 5 | 知の系譜 (Genealogy) | Roots (influences) + Fruits (impact) |
| 6 | 深層理解のアナロジー | **3 Analogies** (Classic / Modern / Metaphorical) |
| 7 | 座標軸：新旧OS分析 | Comparison table (4-5 rows) |
| 8 | 現代への応用と倫理 | 実践 (Installation) + **副作用 (Side Effects)** |
| 9 | 思考実験 (Simulation) | Deep scenario (Dialogue style for Special Edition) |
| 10 | 思想の限界と批判 | 4+ items (Red/Warning style) |
| 11 | 理解度チェック | 4-6 questions (Collapsible) |
| 12 | 用語集 | 5-7 terms with definitions |

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

### Available OS Types (Major Categories)
Use these exactly in `data.js` for consistent searching:
- **哲学OS** (Philosophy)
- **心理OS** (Psychology)
- **社会OS** (Social/Culture/Human Rights)
- **政治OS** (Politics/State/Civil Rights)
- **経済OS** (Economics/Labor)
- **法OS** (Law/Justice)
- **科学OS** (Natural Sciences/Math)
- **科学方法OS** (Epistemology/Methods)
- **技術OS** (Tech/Tools/AI)
- **言語OS** (Linguistics/Comm)
- **宗教OS** (Theology/Spirituality)
- **倫理OS** (Ethics/Morality)
- **芸術OS** (Aesthetics/Art)

> [!TIP]
> **Sub-categories** (e.g., "人権", "メディア", "数学") should be handled by mapping them to the closest Major Category above in `data.js`, but can be explicitly named in the HTML header tags for detail.

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
