const fs = require('fs');
let data = fs.readFileSync('src/data/espol.ts', 'utf8');

const missing = ['biol', 'ag', 'dp', 'dg', 'pm', 'ac', 'na', 'oc'];

for (const code of missing) {
  const comp2Str = `{ id: 'comp2_${code}', code: 'COMP2', name: 'Materia Complementaria 2', credits: 1, hoursTotal: 3, hoursDetail: '1/1/1', prerequisites: [], period: 'Complementarias', isComplementary: true }`;
  const comp3Str = `\n      { id: 'comp3_${code}', code: 'COMP3', name: 'Materia Complementaria 3', credits: 1, hoursTotal: 3, hoursDetail: '1/1/1', prerequisites: [], period: 'Complementarias', isComplementary: true }`;
  
  if (data.includes(comp2Str)) {
    data = data.replace(comp2Str, comp2Str + ',' + comp3Str);
  } else {
    // Try without hoursDetail
    const comp2StrNoHours = `{ id: 'comp2_${code}', code: 'COMP2', name: 'Materia Complementaria 2', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true }`;
    const comp3StrNoHours = `\n      { id: 'comp3_${code}', code: 'COMP3', name: 'Materia Complementaria 3', credits: 1, hoursTotal: 3, prerequisites: [], period: 'Complementarias', isComplementary: true }`;
    if (data.includes(comp2StrNoHours)) {
      data = data.replace(comp2StrNoHours, comp2StrNoHours + ',' + comp3StrNoHours);
    } else {
      console.log('Could not find comp2 for', code);
    }
  }
}

fs.writeFileSync('src/data/espol.ts', data);
console.log('Done');
