// Find correct thinker IDs
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data.js');
let content = fs.readFileSync(dataPath, 'utf8');

const match = content.match(/const thinkers = (\[[\s\S]*\]);?/);
const thinkersData = eval(match[1]);

// Search by name
const targets = [
    'アリストテレス', 'プラトン', 'ソクラテス', 'ルソー', 'カント', 'ロック',
    'ニュートン', 'ヘーゲル', 'マルクス', 'ニーチェ', 'ウィトゲンシュタイン',
    'フッサール', 'ハイデガー', 'ガリレオ', 'レオナルド', 'ダ・ヴィンチ',
    'ピアジェ', 'デュシャン', 'ラスキン', 'ペスタロッチ', 'イリイチ'
];

targets.forEach(name => {
    const found = thinkersData.filter(t => t.name.includes(name));
    found.forEach(t => {
        console.log(`${t.id}\t${t.rank}\t${t.name}\t[${t.school.join(', ')}]`);
    });
});
