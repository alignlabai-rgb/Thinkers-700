// CORRECTED OS Tag Update Script with verified IDs
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data.js');
let content = fs.readFileSync(dataPath, 'utf8');

const match = content.match(/const thinkers = (\[[\s\S]*\]);?/);
if (!match) {
    console.error('Could not find thinkers array');
    process.exit(1);
}

const thinkersData = eval(match[1]);

// CORRECTED additions with VERIFIED IDs
const additions = {
    // Core verified additions
    'P-419': ['教育OS'],                     // プラトン - Republic's education
    'P-488': ['教育OS', '倫理OS', '哲学OS'], // ソクラテス - maieutics, moral philosophy
    'P-450': ['教育OS'],                     // ルソー - Emile
    'P-313': ['教育OS', '哲学OS'],           // ロック - education, tabula rasa
    'P-384': ['科学OS', '数学OS'],           // ニュートン - physics, calculus
    'P-232': ['宗教OS', '芸術OS', '政治OS'], // ヘーゲル - Phenomenology, Aesthetics
    'P-343': ['経済OS', '政治OS'],           // マルクス - Capital
    'P-386': ['芸術OS'],                     // ニーチェ - Birth of Tragedy
    'P-548': ['哲学OS', '心理OS'],           // ウィトゲンシュタイン - language psychology
    'P-251': ['科学OS'],                     // フッサール - phenomenology as science
    'P-233': ['芸術OS', '技術OS'],           // ハイデガー - art, technology essays
    'P-188': ['技術OS'],                     // ガリレオ - telescope, instruments
    'P-416': ['教育OS'],                     // ピアジェ - developmental learning
    'P-262': ['教育OS'],                     // イリイチ - deschooling
};

// Also fix the wrongly applied tags from previous run
const removals = {
    'P-135': ['芸術OS'],     // ドレイファス - not art
    'P-228': ['芸術OS', '技術OS'], // ハート - not art/tech
    'P-229': ['宗教OS', '芸術OS', '政治OS'], // ハート - wrong additions
    'P-298': ['芸術OS'],     // ラカトシュ - not art
    'P-299': ['芸術OS', '技術OS'], // ランド - not art/tech
    'P-317': ['教育OS'],     // ラブロック - wrong, this is not Locke
    'P-340': ['経済OS'],     // マリアテギ - wrong, this is not Marx
    'P-387': ['数学OS'],     // 二宮尊徳 - wrong, this is not Newton
    'P-391': ['芸術OS'],     // ノージック - wrong, not Nietzsche
    'P-417': ['教育OS'],     // ピコ - wrong, not Piaget
    'P-421': ['教育OS'],     // ポアンカレ - wrong, not Plato
    'P-426': ['教育OS'],     // プロクルス - wrong
    'P-449': ['教育OS'],     // ロスバード - wrong, not Rousseau
    'P-472': ['教育OS'],     // セラーズ - wrong
    'P-552': ['心理OS'],     // 荀子 - wrong, not Wittgenstein
    'P-254': ['科学OS'],     // イブン・アル＝ハイサム - already had science, no need
    'P-261': ['教育OS'],     // アイディー - wrong (should be P-262 Illich)
};

let updateCount = 0;

// First, remove wrongly applied tags
thinkersData.forEach(t => {
    if (removals[t.id]) {
        removals[t.id].forEach(tag => {
            const idx = t.school.indexOf(tag);
            if (idx > -1) {
                t.school.splice(idx, 1);
                console.log(`Removed ${tag} from ${t.name} (${t.id})`);
            }
        });
    }
});

// Then, add correct tags
thinkersData.forEach(t => {
    if (additions[t.id]) {
        additions[t.id].forEach(tag => {
            if (!t.school.includes(tag)) {
                t.school.push(tag);
                updateCount++;
                console.log(`Added ${tag} to ${t.name} (${t.id})`);
            }
        });
    }
});

// Reconstruct the JS file
const newContent = `const thinkers = ${JSON.stringify(thinkersData, null, 2).replace(/^/gm, '  ').slice(2)};`;

fs.writeFileSync(dataPath, newContent, 'utf8');
console.log(`\nTotal correct updates: ${updateCount} tags added`);
