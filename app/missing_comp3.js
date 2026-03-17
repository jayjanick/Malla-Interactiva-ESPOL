const fs = require('fs');
const data = fs.readFileSync('src/data/espol.ts', 'utf8');
const comp2 = [...data.matchAll(/comp2_([a-z0-9_]+)/g)].map(m => m[1]);
const comp3 = [...data.matchAll(/comp3_([a-z0-9_]+)/g)].map(m => m[1]);
const missing = comp2.filter(c => !comp3.includes(c));
console.log([...new Set(missing)]);
