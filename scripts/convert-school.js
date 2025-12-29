const fs = require('fs');

let content = fs.readFileSync('data.js', 'utf8');

// Convert "school": "XXX" to "school": ["XXX"]
content = content.replace(/"school":\s*"([^"]+)"/g, '"school": ["$1"]');

fs.writeFileSync('data.js', content, 'utf8');
console.log('Conversion complete!');
