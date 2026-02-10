import { execSync } from 'node:child_process';
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const baseUrl = 'http://localhost:4173';
const routes = [
  { path: '#/', name: 'home' },
  { path: '#/labs', name: 'labs' },
  { path: '#/labs/system-core', name: 'system-core' },
  { path: '#/labs/design-system-case-study', name: 'design-system-case-study' },
];

const outputDir = join(process.cwd(), 'lighthouse-reports');
rmSync(outputDir, { recursive: true, force: true });
mkdirSync(outputDir, { recursive: true });

const thresholds = {
  performance: { min: 0.86, level: 'warn' },
  accessibility: { min: 1, level: 'error' },
  'best-practices': { min: 1, level: 'error' },
  seo: { min: 0.90, level: 'error' },
};

let hasError = false;
const summary = [];
const formatScore = (score) => `${Math.round(score * 100)}%`;

routes.forEach(({ path, name }) => {
  const url = `${baseUrl}/${path}`;
  const outputPath = join(outputDir, `${name}.json`);
  const command = [
    'npx --yes lighthouse',
    `"${url}"`,
    '--preset=desktop',
    '--only-categories=performance,accessibility,best-practices,seo',
    '--output=json',
    `--output-path="${outputPath}"`,
    '--chrome-flags="--headless=new --no-sandbox --disable-gpu --disable-dev-shm-usage"',
  ].join(' ');

  execSync(command, { stdio: 'inherit' });

  const report = JSON.parse(readFileSync(outputPath, 'utf-8'));
  const scores = report.categories;
  const lines = Object.entries(thresholds).map(([key, rule]) => {
    const score = scores?.[key]?.score ?? 0;
    const isFail = score < rule.min;
    const label = isFail ? (rule.level === 'error' ? 'FAIL' : 'WARN') : 'PASS';
    if (isFail && rule.level === 'error') {
      hasError = true;
    }
    return `${label} ${key}: ${formatScore(score)} (min ${Math.round(rule.min * 100)}%)`;
  });

  process.stdout.write(`\n${name.toUpperCase()}\n${lines.join('\n')}\n`);

  summary.push({
    route: name,
    url,
    scores: Object.fromEntries(
      Object.keys(thresholds).map((key) => [key, scores?.[key]?.score ?? 0])
    ),
  });

  const audits = report.audits ?? {};
  const a11yFailures = Object.values(audits).filter(
    (audit) =>
      audit?.scoreDisplayMode === 'binary' &&
      audit?.score === 0 &&
      audit?.tags?.includes('accessibility')
  );
  const topA11yFailures = a11yFailures.slice(0, 5).map((audit) => audit.title);

  if (topA11yFailures.length > 0) {
    process.stdout.write(`A11Y FAILURES (${name}): ${topA11yFailures.join(' | ')}\n`);
  }
});

writeFileSync(join(outputDir, 'summary.json'), JSON.stringify({ routes: summary }, null, 2));

const summaryLines = summary.map((item) => {
  const scoreLine = Object.keys(thresholds)
    .map((key) => `${key}:${Math.round(item.scores[key] * 100)}%`)
    .join(' | ');
  return `${item.route}: ${scoreLine}`;
});

process.stdout.write(`\nSUMMARY\n${summaryLines.join('\n')}\n`);

if (hasError) {
  process.exitCode = 1;
}
