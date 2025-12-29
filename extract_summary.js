const fs = require('fs');
const content = fs.readFileSync('data.js', 'utf8');

const thinkersMatch = content.match(/const thinkers = (\[[\s\S]*?\]);/);
if (!thinkersMatch) {
    console.log("Could not find thinkers array");
    process.exit(1);
}

// Simple parsing since it's a JS file, not pure JSON
// We can use eval if we are careful, but let's try regex per object
const objects = content.match(/\{[\s\S]*?\}/g);
const summary = objects.map(obj => {
    const id = (obj.match(/"id":\s*"(.*?)"/) || [])[1];
    const name = (obj.match(/"name":\s*"(.*?)"/) || [])[1];
    const summ = (obj.match(/"summary":\s*"(.*?)"/) || [])[1];
    const sch = (obj.match(/"school":\s*\[(.*?)\]/) || [])[1];
    return `${id}\t${name}\t${summ}\t${sch}`;
});

fs.writeFileSync('thinkers_summary.txt', summary.join('\n'), 'utf8');
