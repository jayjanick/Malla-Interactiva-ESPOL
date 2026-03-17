const fs = require('fs');

let espolData = fs.readFileSync('src/data/espol.ts', 'utf8');

// Replace period for complementary subjects
espolData = espolData.replace(/period:\s*'[^']+',\s*isComplementary:\s*true/g, "period: 'Complementarias', isComplementary: true");

fs.writeFileSync('src/data/espol.ts', espolData);
console.log('Done');
