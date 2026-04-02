const fs = require('fs');

const fictCareers = JSON.parse(fs.readFileSync('fict_careers.json', 'utf-8'));
let espolTs = fs.readFileSync('src/data/espol.ts', 'utf-8');

for (let key in fictCareers) {
  let career = fictCareers[key];
  let id = career.id;
  let subjectsStr = JSON.stringify(career.subjects, null, 6).replace(/"([^"]+)":/g, '$1:').replace(/"/g, "'");
  
  // Find the career in espol.ts
  let regex = new RegExp(`\\{\\s*id:\\s*'${id}',\\s*name:\\s*'[^']+',\\s*facultyId:\\s*'fict',\\s*subjects:\\s*\\[\\]\\s*\\}`);
  let replacement = `{ id: '${id}', name: '${key}', facultyId: 'fict', subjects: ${subjectsStr} }`;
  
  espolTs = espolTs.replace(regex, replacement);
}

fs.writeFileSync('src/data/espol.ts', espolTs);
