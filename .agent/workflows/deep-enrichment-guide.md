---
description: Deep Enrichment & Genealogy Section Expansion Guide
---

# Deep Enrichment & Genealogy Section Expansion Guide

This document outlines the standard procedure and quality requirements for the "Deep Enrichment" process in the Thinkers-700 project, with a specific focus on the "知の系譜 (Genealogy)" section.

## 1. Genealogy (知の系譜) Quality Standard
Each thinker's detail page must include a robust genealogy section to provide historical and theoretical context.

- **Minimum Requirement**: At least **5 items** for "継承 (Roots)" and **5 items** for "派生 (Fruits)".
- **Selection Criteria**:
    - **Roots**: Major influencers, direct teachers, or thinkers whom the subject critiqued (e.g., Descartes for phenomenologists).
    - **Fruits**: Direct students, later thinkers who expanded the concepts, or modern disciplines influenced by the work (e.g., AI/Cognitive Science).
- **Format**: `<strong>Name</strong>: Brief description of the connection or influence.<br>`

## 2. Common Pitfalls & Anti-Patterns

### ❌ Markdown Validation Warnings (Image Paths)
On Windows systems, avoid using a leading forward slash for absolute paths in Markdown images.
- **Incorrect**: `![alt](/C:/path/to/image.png)`
- **Correct**: `![alt](C:/path/to/image.png)`

### ❌ Premature Task Completion
Do not mark a task as "Completed" (`[x]`) in `task.md` based on file existence alone. 
- **Rule**: Always perform a **Visual Verification** (using `browser_subagent`) or a **Scripted Check** to count the items in Section 5 before marking it as done.

### ❌ Minimalist Content
Avoid placeholders or 1-line descriptions.
- **Goal**: Provide "Thin" vs "Rich" content. Every section should feel substantial and premium.

## 3. Workflow Steps for a New Batch
1.  **Planning**: Research the thinkers and identify relevant Roots/Fruits.
2.  **Implementation**: Update HTML files (Section 5 and other rich segments).
3.  **Data Sync**: Ensure `data.js` has the correct `detail_page` path.
4.  **Verification**: 
    - Use `browser_subagent` to scroll to Section 5.
    - Confirm 5+ items per list.
    - Capture screenshots for the `walkthrough.md`.
5.  **Documentation**: Update `task.md` and `walkthrough.md`.
