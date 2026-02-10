import { readFileSync, readdirSync, statSync } from 'node:fs';
import { basename, join } from 'node:path';

const collectFiles = (dir, files = []) => {
  readdirSync(dir).forEach((entry) => {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      collectFiles(fullPath, files);
    } else if (fullPath.endsWith('.module.css')) {
      files.push(fullPath);
    }
  });
  return files;
};

const files = collectFiles('src/components/ui');
let hasError = false;

const toLowerCamel = (value) => value.charAt(0).toLowerCase() + value.slice(1);

files.forEach((file) => {
  const filename = basename(file).replace('.module.css', '');
  const prefix = toLowerCamel(filename);
  const content = readFileSync(file, 'utf-8');
  const classMatches = [...content.matchAll(/\.([a-zA-Z][a-zA-Z0-9]*)/g)];
  const classNames = Array.from(new Set(classMatches.map((match) => match[1])));

  const invalid = classNames.filter((className) => !className.startsWith(prefix));
  if (invalid.length > 0) {
    hasError = true;
    process.stdout.write(`\n${file}\n  Expected class names to start with "${prefix}"\n  Offenders: ${invalid.join(', ')}\n`);
  }
});

if (hasError) {
  process.exitCode = 1;
}
