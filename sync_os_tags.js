// Sync OS Tags from data.js to HTML detail pages
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data.js');
const pagesDir = path.join(__dirname, 'pages');

// Load data.js
let content = fs.readFileSync(dataPath, 'utf8');
const match = content.match(/const thinkers = (\[[\s\S]*\]);?/);
if (!match) {
    console.error('Could not find thinkers array');
    process.exit(1);
}
const thinkers = eval(match[1]);

// Create a mapping from detail_page filename to school array
const pageToSchool = {};
thinkers.forEach(t => {
    if (t.detail_page) {
        const filename = path.basename(t.detail_page);
        pageToSchool[filename] = {
            school: t.school,
            name: t.name
        };
    }
});

// Get all HTML files in pages directory
const htmlFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html'));

let updatedCount = 0;
let skippedCount = 0;

htmlFiles.forEach(filename => {
    const filePath = path.join(pagesDir, filename);
    let html = fs.readFileSync(filePath, 'utf8');

    const data = pageToSchool[filename];
    if (!data) {
        console.log(`Skipped (no data.js entry): ${filename}`);
        skippedCount++;
        return;
    }

    // Pattern 1: Legacy (header-section, tags before h1)
    const legacyPattern = /(<header class="header-section">[\s\S]*?)(<span class="os-tag"[^>]*>[^<]+<\/span>\s*)+(\s*<h1>)/;

    // Pattern 2: Rich (header, tags inside div.os-tags after h1/en-name)
    const richPattern = /(<div class="os-tags">)([\s\S]*?)(<\/div>)/;

    let newHtml = html;
    let matched = false;

    if (legacyPattern.test(html)) {
        const formattedTags = data.school.map((tag, i) => {
            if (i === 0) return `<span class="os-tag">${tag}</span>`;
            return `<span class="os-tag" style="margin-left: 0.5rem;">${tag}</span>`;
        }).join('\n            ');
        newHtml = html.replace(legacyPattern, `$1${formattedTags}\n            $3`);
        matched = true;
    } else if (richPattern.test(html)) {
        const formattedTags = data.school.map(tag => `\n            <span class="os-tag">${tag}</span>`).join('');
        newHtml = html.replace(richPattern, `$1${formattedTags}\n        $3`);
        matched = true;
    }

    if (matched) {
        if (newHtml !== html) {
            fs.writeFileSync(filePath, newHtml, 'utf8');
            console.log(`Updated: ${filename} -> [${data.school.join(', ')}]`);
            updatedCount++;
        } else {
            console.log(`No change needed: ${filename}`);
        }
    } else {
        console.log(`Pattern not matched: ${filename}`);
        skippedCount++;
    }
});

console.log(`\n=== Summary ===`);
console.log(`Updated: ${updatedCount} files`);
console.log(`Skipped: ${skippedCount} files`);
