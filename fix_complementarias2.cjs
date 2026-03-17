const fs = require('fs');

let espolData = fs.readFileSync('src/data/espol.ts', 'utf8');

// Find all objects with isComplementary: true and replace their period with 'Complementarias'
espolData = espolData.replace(/(\{[^{}]*isComplementary:\s*true[^{}]*\})/g, (match) => {
    return match.replace(/period:\s*'[^']+'/, "period: 'Complementarias'");
});

fs.writeFileSync('src/data/espol.ts', espolData);
console.log('Done');
