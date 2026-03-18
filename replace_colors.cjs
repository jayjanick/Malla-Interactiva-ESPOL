const fs = require('fs');
const path = require('path');

const replacements = {
  'bg-[#050505]': 'bg-slate-50 dark:bg-[#050505]',
  'bg-[#0a0a0a]': 'bg-white dark:bg-[#0a0a0a]',
  'text-white': 'text-slate-900 dark:text-white',
  'text-white/90': 'text-slate-800 dark:text-white/90',
  'text-white/80': 'text-slate-700 dark:text-white/80',
  'text-white/70': 'text-slate-600 dark:text-white/70',
  'text-white/60': 'text-slate-500 dark:text-white/60',
  'text-white/50': 'text-slate-500 dark:text-white/50',
  'text-white/40': 'text-slate-400 dark:text-white/40',
  'text-white/30': 'text-slate-400 dark:text-white/30',
  'text-white/20': 'text-slate-300 dark:text-white/20',
  'border-white/5': 'border-slate-200 dark:border-white/5',
  'border-white/10': 'border-slate-300 dark:border-white/10',
  'border-white/20': 'border-slate-400 dark:border-white/20',
  'bg-white/5': 'bg-slate-100 dark:bg-white/5',
  'bg-white/10': 'bg-slate-200 dark:bg-white/10',
  'hover:bg-white/5': 'hover:bg-slate-100 dark:hover:bg-white/5',
  'hover:bg-white/10': 'hover:bg-slate-200 dark:hover:bg-white/10',
  'bg-white/[0.02]': 'bg-slate-50 dark:bg-white/[0.02]',
  'bg-white/[0.04]': 'bg-slate-100 dark:bg-white/[0.04]',
  'bg-white/[0.05]': 'bg-slate-100 dark:bg-white/[0.05]',
  'hover:bg-white/[0.04]': 'hover:bg-slate-100 dark:hover:bg-white/[0.04]',
  'bg-black/20': 'bg-slate-100 dark:bg-black/20',
  'bg-black/40': 'bg-slate-200 dark:bg-black/40',
  'bg-black/60': 'bg-slate-800/20 dark:bg-black/60',
  'shadow-black/50': 'shadow-slate-200/50 dark:shadow-black/50',
  'decoration-white/20': 'decoration-slate-300 dark:decoration-white/20',
  'placeholder:text-white/20': 'placeholder:text-slate-400 dark:placeholder:text-white/20',
  'ring-white/10': 'ring-slate-200 dark:ring-white/10',
  'divide-white/5': 'divide-slate-200 dark:divide-white/5',
  'divide-white/10': 'divide-slate-300 dark:divide-white/10',
  'from-white/[0.02]': 'from-slate-100 dark:from-white/[0.02]',
  'from-white/[0.05]': 'from-slate-200 dark:from-white/[0.05]',
};

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  const sortedKeys = Object.keys(replacements).sort((a, b) => b.length - a.length);
  
  sortedKeys.forEach(key => {
    const escapedKey = key.replace(/\[/g, '\\[').replace(/\]/g, '\\]');
    // Use regex to replace all occurrences.
    // Negative lookahead to ensure we don't replace "text-white" inside "text-white/50"
    // Since we sorted by length, text-white/50 is replaced first.
    const regex = new RegExp(escapedKey + '(?![\\w\\/\\-\\[\\]])', 'g');
    content = content.replace(regex, replacements[key]);
  });
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
