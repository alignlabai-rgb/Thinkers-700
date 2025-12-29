// Update Deleuze detail_page in data.js
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data.js');
let content = fs.readFileSync(dataPath, 'utf8');

// Update Deleuze
content = content.replace(
    /"id": "P-122",([\s\S]*?)"detail_page": null/,
    '"id": "P-122",$1"detail_page": "pages/deleuze-gilles.html"'
);

fs.writeFileSync(dataPath, content, 'utf8');
console.log('Updated Deleuze detail_page link');
