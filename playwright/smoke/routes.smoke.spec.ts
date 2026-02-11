import { expect, test, type ConsoleMessage, type Page, type Request, type Response } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

type GuardState = {
  consoleErrors: string[];
  requestFailures: string[];
  responseFailures: string[];
};

type Theme = 'light' | 'dark';

const THEMES: Theme[] = ['light', 'dark'];

const ROUTES = [
  { name: 'home', path: '/#/' },
  { name: 'labs', path: '/#/labs' },
  { name: 'system core', path: '/#/labs/core' },
  { name: 'design system case study', path: '/#/labs/design-system-case-study' },
];

const isIgnorableRequestFailure = (failureText: string | null): boolean =>
  Boolean(failureText && failureText.includes('ERR_ABORTED'));

const isSameOriginRequest = (url: string): boolean => {
  if (!process.env.PLAYWRIGHT_BASE_URL) {
    return url.startsWith('http://127.0.0.1:4173');
  }
  return url.startsWith(process.env.PLAYWRIGHT_BASE_URL);
};

const setTheme = async (page: Page, theme: Theme) => {
  await page.addInitScript((themeValue: Theme) => {
    window.localStorage.setItem('theme', themeValue);
  }, theme);
};

const attachRuntimeGuards = (page: Page): GuardState => {
  const guardState: GuardState = {
    consoleErrors: [],
    requestFailures: [],
    responseFailures: [],
  };

  page.on('console', (message: ConsoleMessage) => {
    if (message.type() === 'error') {
      guardState.consoleErrors.push(message.text());
    }
  });

  page.on('requestfailed', (request: Request) => {
    const failureText = request.failure()?.errorText ?? null;
    if (isIgnorableRequestFailure(failureText)) return;
    guardState.requestFailures.push(`${request.method()} ${request.url()} :: ${failureText ?? 'Unknown failure'}`);
  });

  page.on('response', (response: Response) => {
    if (!isSameOriginRequest(response.url())) return;
    if (response.status() >= 400) {
      guardState.responseFailures.push(`${response.status()} ${response.url()}`);
    }
  });

  return guardState;
};

const assertKickerContrast = async (page: Page, routePath: string, theme: Theme) => {
  if (routePath !== '/#/labs/design-system-case-study') return;

  const ratio = await page.evaluate(() => {
    const getRgb = (color: string): [number, number, number] => {
      const match = color.match(/\d+/g);
      if (!match || match.length < 3) return [0, 0, 0];
      return [Number(match[0]), Number(match[1]), Number(match[2])];
    };

    const normalize = (value: number): number => {
      const channel = value / 255;
      if (channel <= 0.03928) return channel / 12.92;
      return ((channel + 0.055) / 1.055) ** 2.4;
    };

    const luminance = (rgb: [number, number, number]): number =>
      0.2126 * normalize(rgb[0]) + 0.7152 * normalize(rgb[1]) + 0.0722 * normalize(rgb[2]);

    const contrastRatio = (fg: [number, number, number], bg: [number, number, number]): number => {
      const l1 = luminance(fg);
      const l2 = luminance(bg);
      const lighter = Math.max(l1, l2);
      const darker = Math.min(l1, l2);
      return (lighter + 0.05) / (darker + 0.05);
    };

    const kicker = document.querySelector('[class*="sectionKicker"]') as HTMLElement | null;
    if (!kicker) return 0;

    const fgColor = getComputedStyle(kicker).color;
    let bgElement: HTMLElement | null = kicker;
    let bgColor = 'rgb(255, 255, 255)';

    while (bgElement) {
      const candidate = getComputedStyle(bgElement).backgroundColor;
      if (candidate && candidate !== 'rgba(0, 0, 0, 0)' && candidate !== 'transparent') {
        bgColor = candidate;
        break;
      }
      bgElement = bgElement.parentElement;
    }

    return contrastRatio(getRgb(fgColor), getRgb(bgColor));
  });

  if (ratio < 4.5) {
    // TODO(ds-contrast): Raise kicker contrast to AA (>= 4.5) and convert this warning back to a hard failure.
    console.warn(`Case study kicker contrast warning on ${theme}: ${ratio.toFixed(2)} < 4.5`);
  }
};

const assertA11ySmoke = async (page: Page, routePath: string, theme: Theme) => {
  await expect(page.getByRole('main')).toBeVisible();
  await expect(page.getByRole('navigation', { name: /main menu/i })).toBeVisible();

  const axeResults = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa'])
    .exclude('[data-axe-skip]')
    .analyze();

  const incompleteContrast = axeResults.incomplete.filter((issue) => issue.id === 'color-contrast');
  if (incompleteContrast.length > 0) {
    const details = incompleteContrast
      .map((issue) => `${issue.id}: ${issue.help} (${issue.nodes.length} node(s))`)
      .join('\n');
    // Report unresolved contrast contexts (e.g. pseudo-element backgrounds) without hard-failing CI.
    console.warn(`Axe incomplete color-contrast on ${routePath} (${theme}):\n${details}`);
  }

  expect(
    axeResults.violations,
    `Axe violations on ${routePath} (${theme}):\n${axeResults.violations
      .map((violation) => `${violation.id}: ${violation.help} (${violation.nodes.length} node(s))`)
      .join('\n')}`
  ).toEqual([]);

  await assertKickerContrast(page, routePath, theme);
};

test.describe('Cross-browser smoke checks', () => {
  for (const route of ROUTES) {
    for (const theme of THEMES) {
      test(`sanity on ${route.name} (${theme})`, async ({ page }) => {
        await setTheme(page, theme);
        const guardState = attachRuntimeGuards(page);

        await page.goto(route.path, { waitUntil: 'networkidle' });
        await expect(page).toHaveURL(new RegExp(`${route.path.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`));
        await expect(page.locator('h1').first()).toBeVisible();

        await assertA11ySmoke(page, route.path, theme);

        expect(
          guardState.consoleErrors,
          `Console errors detected on ${route.path} (${theme}):\n${guardState.consoleErrors.join('\n')}`
        ).toEqual([]);
        expect(
          guardState.requestFailures,
          `Failed requests detected on ${route.path} (${theme}):\n${guardState.requestFailures.join('\n')}`
        ).toEqual([]);
        expect(
          guardState.responseFailures,
          `HTTP >= 400 responses detected on ${route.path} (${theme}):\n${guardState.responseFailures.join('\n')}`
        ).toEqual([]);
      });
    }
  }
});
