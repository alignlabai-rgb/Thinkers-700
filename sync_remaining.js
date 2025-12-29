// Flexible Sync for skipped files - handles various HTML structures
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data.js');
const pagesDir = path.join(__dirname, 'pages');

// Load data.js
let content = fs.readFileSync(dataPath, 'utf8');
const match = content.match(/const thinkers = (\[[\s\S]*\]);?/);
const thinkers = eval(match[1]);

// Create mapping
const pageToSchool = {};
thinkers.forEach(t => {
    if (t.detail_page) {
        const filename = path.basename(t.detail_page);
        pageToSchool[filename] = { school: t.school, name: t.name };
    }
});

// Skipped files from previous run
const skippedFiles = [
    'bateson-gregory.html',
    'baudrillard-jean.html',
    'bauman-zygmunt.html',
    'beauvoir-simone.html',
    'beccaria-cesare.html',
    'benjamin-walter.html',
    'bentham-jeremy.html',
    'bloch-ernst.html',
    'bostrom-nick.html',
    'bourdieu-pierre.html',
    'braidotti-rosi.html',
    'buddha-gautama.html',
    'cicero.html',
    'condorcet.html',
    'aristippus.html',
    'template.html'
];

let updatedCount = 0;

skippedFiles.forEach(filename => {
    const filePath = path.join(pagesDir, filename);
    if (!fs.existsSync(filePath)) {
        console.log(`Not found: ${filename}`);
        return;
    }

    const data = pageToSchool[filename];
    if (!data) {
        console.log(`No data.js entry: ${filename}`);
        return;
    }

    let html = fs.readFileSync(filePath, 'utf8');

    // Generate new OS tags HTML (all on one line for flexibility)
    const newTagsHtml = data.school.map((tag, i) => {
        if (i === 0) {
            return `<span class="os-tag">${tag}</span>`;
        } else {
            return `<span class="os-tag" style="margin-left: 0.5rem;">${tag}</span>`;
        }
    }).join('');

    // More flexible pattern - find all os-tag spans before h1
    // Match from header start to h1, capturing the os-tag section
    const flexPattern = /(<header class="header-section">[\s\S]*?)(<span class="os-tag"[\s\S]*?)(<h1>)/;

    if (flexPattern.test(html)) {
        const newHtml = html.replace(flexPattern, `$1${newTagsHtml}\n            $3`);

        if (newHtml !== html) {
            fs.writeFileSync(filePath, newHtml, 'utf8');
            console.log(`Updated: ${filename} -> [${data.school.join(', ')}]`);
            updatedCount++;
        } else {
            console.log(`No change: ${filename}`);
        }
    } else {
        console.log(`Pattern not matched: ${filename}`);
    }
});

console.log(`\n=== Summary ===`);
console.log(`Updated: ${updatedCount} files`);
