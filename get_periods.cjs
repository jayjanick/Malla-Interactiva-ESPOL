const fs = require('fs');
const data = fs.readFileSync('src/data/espol.ts', 'utf8');
const periods = new Set();
const regex = /period:\s*'([^']+)'/g;
let match;
while ((match = regex.exec(data)) !== null) {
  periods.add(match[1]);
}
console.log(Array.from(periods).sort());
