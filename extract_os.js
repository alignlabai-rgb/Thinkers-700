const fs = require('fs');
const content = fs.readFileSync('data.js', 'utf8');

// Extract all school arrays
const schoolRegex = /"school":\s*\[(.*?)\]/g;
const osCount = {};

let match;
while ((match = schoolRegex.exec(content)) !== null) {
    const schoolContent = match[1];
    const osMatches = schoolContent.match(/"([^"]+)"/g);
    if (osMatches) {
        osMatches.forEach(os => {
            const osName = os.replace(/"/g, '');
            osCount[osName] = (osCount[osName] || 0) + 1;
        });
    }
}

// Sort by count descending
const sorted = Object.entries(osCount).sort((a, b) => b[1] - a[1]);
sorted.forEach(([name, count]) => {
    console.log(`${count}\t${name}`);
});
