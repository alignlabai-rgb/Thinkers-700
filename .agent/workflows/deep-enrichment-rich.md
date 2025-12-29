---
description: Thinkers-700 Deep Enrichment Rich Page Creation Guide
---

# Thinkers-700 詳細ページ作成ガイド（リッチ版）

このワークフローは、Thinkers-700プロジェクトの思想家詳細ページを**リッチ版品質**で作成するための指示書です。他のLLMが引き継いでも同等のクオリティを出力できるよう設計されています。

## 基本方針

1. **「及第点」ではなく「はっとさせる」** - 読者が「おお、そうか」と気づきを得るレベル
2. **技術者向けアナロジーを積極活用** - OOP、API、プロトコル等との対応関係
3. **批判者の名前と具体的論点** - 表面的な批判リストではなく実名と論点
4. **思考実験は挑発的に** - 現代のAI・テクノロジーと絡めて

## 12セクション構造

各ページは以下の12セクション構造を持つ：

### Section 0: この偉人を学ぶ意味
- **最優先セクション**：読者の知的好奇心を最大化する。
- 有名な引用があれば `quote-box` で提示し、核心的洞察を `insight-box` で強調する。
- 「なぜ今この思想家を学ぶか」の現代的意義。

### Section 0b: 📚 主著・主業績ガイド
- 代表的な著作、論文、または歴史的偉業をまとめる。
- **Standard版以上で必須**とする新規セクション。
- 本文を読む前の「思想のカタログ」として機能させる。

### Section 1: 基本情報 & 要旨
- English Abstract + Japanese要旨（meta-grid）
- 簡潔に核心を伝える

### Section 2: 変革の構造図
- Step 1: 打破した旧常識（具体的に3つ程度）
- Step 2: 新パラダイム（核心概念を列挙）
- Result: 最も重要な問い

### Section 3: OSの核心 (Kernel)
- 中心的な問い
- 書き換えたコード（詳細な説明）
- **ここが最も深い部分** - insight-boxを活用
- 思想の構造を丁寧に解説

### Section 4: 新機能の解説 (Key Components)
- 4つ程度の核心概念
- 各概念の詳細説明

### Section 5: 知の系譜 (Genealogy)
- Roots: 影響を受けた思想家（具体的に）
- Fruits: 影響を与えた分野・思想家

### Section 6: 深層理解のアナロジー
- **技術者向けアナロジー3つ**
- プログラミング概念との対応（OOP、API、Protocol等）
- 現代テクノロジーとの関連

### Section 7: 座標軸：新旧OS分析
- 比較表（comparison-table）
- 4-5行の比較項目
- 「含意」列を追加すると効果的

### Section 8: 現代への応用と倫理
- 実践 (Installation): 具体的応用分野
- バグと副作用 (Limitations): 思想の限界

### Section 9: 思考実験 (Simulation)
- 「もし○○が△△を見たら？」形式
- 思想家の口調で語らせる
- **現代のAI・テクノロジーと絡める**
- 挑発的・具体的に

### Section 10: 思想の限界と批判
- 批判者の実名と具体的論点
- 4つ程度の批判を詳細に

### Section 11: 理解度チェック
- 4問のQ&A（details要素）
- 思想の核心を問う問い

### Section 12: 用語集
- 5つ程度の重要概念
- 簡潔な定義

## 特殊ボックス使用ガイド

### insight-box（青）
```html
<div class="insight-box">
    <p><strong>💡 核心的洞察</strong></p>
    <p>読者が「はっ」とする洞察をここに</p>
</div>
```

### quote-box（紫）
```html
<div class="quote-box">
    <p>「思想家の有名な引用」</p>
    <p style="text-align: right; margin-top: 0.5rem;">──出典</p>
</div>
```

### warning-box（赤）
```html
<div class="warning-box">
    <p><strong>⚠️ 警告</strong></p>
    <p>危険性や問題点を強調</p>
</div>
```

## 技術アナロジーのパターン

**重要なワーディング**: 「プログラマ的に言えば」は避ける（非エンジニアには不親切）。代わりに：
- 「**現代的に言えば**」
- 「**たとえるなら**」
- 「**身近な例で言えば**」
- 「**技術の世界では**」（エンジニアの読者を想定する場合）

以下のパターンを参考に、思想と技術の対応関係を構築：

| 思想概念 | 技術アナロジー |
|---------|--------------|
| 隠された本質 | カプセル化、private |
| 間接的関係 | API、インターフェース |
| 共有された約束事 | プロトコル（HTTP、TCP/IP） |
| 部分的な開示 | public/private |
| 平坦な構造 | マイクロサービス |
| 累積する問題 | 技術負債 |
| 段階的変化 | リファクタリング |
| 相互依存 | 依存性注入 |

## 作業フロー

// turbo-all

1. data.jsで対象の思想家情報を確認
2. 思想家の核心概念を特定
3. Section 0から順に作成（特に0, 3, 6, 9を重視）
4. 技術アナロジーを3つ考案
5. 批判者の実名と論点を調査
6. HTMLファイルを作成
7. data.jsのdetail_pageを更新
8. task.mdとwalkthrough.mdを更新

## 品質チェックリスト

- [ ] OSタグは「14の正典（Canon 14）」に準拠しているか
- [ ] Section 0にinsight-boxまたはquote-boxがあるか
- [ ] Section 6に技術アナロジーが3つあるか
- [ ] Section 9が現代AI/テクノロジーと絡んでいるか
- [ ] Section 10に批判者の実名があるか
- [ ] 全体で「はっとする」瞬間があるか

## ベンチマーク・サンプリング

1. **特別編（Special Edition）**: [John Stuart Mill](file:///C:/Users/kiku/Desktop/Contents/thinkers-700/pages/mill-john-stuart.html)
   - 最高密度の情報、リサーチ、視覚効果を実装。
2. **標準版（Standard Perfect Format）**: [Harriet Taylor Mill](file:///C:/Users/kiku/Desktop/Contents/thinkers-700/pages/mill-harriet-taylor.html)
   - 12セクションすべての品質基準を満たした正規普及版。

## 参照ファイル

- データ: `data.js`
- スタイル: `style.css`
- ガイドライン: `.agent/workflows/content-format.md`

