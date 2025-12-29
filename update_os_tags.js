// OS Tag Update Script
// Adds additional OS tags to thinkers based on their contributions

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data.js');
let content = fs.readFileSync(dataPath, 'utf8');

// Extract the thinkers array from the JS file
const match = content.match(/const thinkers = (\[[\s\S]*\]);?/);
if (!match) {
    console.error('Could not find thinkers array');
    process.exit(1);
}

// Parse the array
const thinkersData = eval(match[1]);

// Define additional OS tags to add by thinker ID
const additions = {
    // Batch 1: Ranks 1-100
    'P-024': ['芸術OS'],           // Aristotle - for Poetics
    'P-078': ['教育OS'],           // Buber - dialogue pedagogy
    'P-079': ['倫理OS'],           // Buddha - ethical teachings
    'P-074': ['倫理OS'],           // Braidotti - posthuman ethics
    'P-089': ['倫理OS'],           // Carson - environmental ethics

    // Batch 2: Key thinkers 101-400
    'P-421': ['教育OS'],           // Plato - Republic's education
    'P-449': ['教育OS'],           // Rousseau - Emile
    'P-317': ['教育OS'],           // Locke - education thoughts
    'P-417': ['教育OS'],           // Piaget - developmental learning
    'P-186': ['技術OS'],           // Galileo - telescope, instruments
    'P-299': ['芸術OS', '技術OS'], // Leonardo da Vinci
    'P-228': ['芸術OS', '技術OS'], // Heidegger - art, technology essays
    'P-229': ['宗教OS', '芸術OS', '政治OS'], // Hegel - Phenomenology, Aesthetics
    'P-391': ['芸術OS'],           // Nietzsche - Birth of Tragedy
    'P-340': ['経済OS'],           // Marx - Capital
    'P-387': ['数学OS'],           // Newton - calculus
    'P-276': ['科学OS'],           // Kant - natural philosophy
    'P-254': ['科学OS'],           // Husserl - phenomenology as science
    'P-552': ['心理OS'],           // Wittgenstein - language psychology

    // Batch 3: Key thinkers 401-703
    'P-472': ['教育OS'],           // Socrates (if present) - maieutics
    'P-426': ['教育OS'],           // Pestalozzi
    'P-261': ['教育OS'],           // Illich - deschooling
    'P-135': ['芸術OS'],           // Duchamp - ready-mades
    'P-298': ['芸術OS'],           // Ruskin - art criticism
};

// Apply additions
let updateCount = 0;
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
console.log(`\\nTotal updates: ${updateCount} tags added`);
