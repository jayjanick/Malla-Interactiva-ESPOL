import fs from 'fs';

let content = fs.readFileSync('src/data/espol.ts', 'utf-8');

content = content.replace(/name: 'Complementaria de Artes, Deportes e Idiomas'/g, "name: 'Materia Complementaria 1'");

// We have to be careful with "Complementaria de Humanísticas" because some are COMP2 and one is COMP3.
// Let's replace by looking at the code: 'COMP2' or 'COMP3'
content = content.replace(/code: 'COMP2', name: 'Complementaria de Humanísticas'/g, "code: 'COMP2', name: 'Materia Complementaria 2'");
content = content.replace(/code: 'COMP3', name: 'Complementaria de Humanísticas'/g, "code: 'COMP3', name: 'Materia Complementaria 3'");

fs.writeFileSync('src/data/espol.ts', content);
console.log('Done replacing complementary subjects');
