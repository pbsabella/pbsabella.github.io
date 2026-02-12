/**
 * Guardrail: allow only approved breakpoint values in CSS media queries
 *
 * What it checks:
 * - Scans all `.css` files under `src/`
 * - Finds `@media (width >=|<= ...px)` queries
 * - Fails when a pixel value is not in the allowlist
 *
 * Usage:
 * - node scripts/check-breakpoints.mjs
 *
 * Exit codes:
 * - 0: all breakpoints are valid
 * - 1: one or more invalid breakpoints were found
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ALLOWED_BREAKPOINTS = new Set([421, 768, 900, 1024]);
const CSS_ROOT = 'src';
const MEDIA_QUERY_REGEX = /@media\s*\(\s*width\s*([<>]=?)\s*(\d+)px\s*\)/g;

const collectCssFiles = (dir, files = []) => {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      collectCssFiles(fullPath, files);
      continue;
    }
    if (fullPath.endsWith('.css')) {
      files.push(fullPath);
    }
  }
  return files;
};

const files = collectCssFiles(CSS_ROOT);
const invalid = [];

for (const file of files) {
  const content = readFileSync(file, 'utf-8');
  for (const match of content.matchAll(MEDIA_QUERY_REGEX)) {
    const comparator = match[1];
    const value = Number(match[2]);
    if (!ALLOWED_BREAKPOINTS.has(value)) {
      invalid.push({
        file,
        query: `@media (width ${comparator} ${value}px)`,
      });
    }
  }
}

if (invalid.length > 0) {
  process.stdout.write('\nInvalid breakpoint values found.\n');
  process.stdout.write(`Allowed values: ${Array.from(ALLOWED_BREAKPOINTS).join(', ')}\n\n`);
  for (const issue of invalid) {
    process.stdout.write(`${issue.file}\n  ${issue.query}\n`);
  }
  process.exitCode = 1;
}
