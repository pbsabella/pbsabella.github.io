import { expect, test, type ConsoleMessage, type Page, type Request, type Response, type TestInfo } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

type GuardState = {
  consoleErrors: string[];
  requestFailures: string[];
  responseFailures: string[];
};

type Theme = 'light' | 'dark';

const THEMES: Theme[] = ['light', 'dark'];

const ROUTES = [
  { name: 'home', path: '/' },
  { name: 'labs', path: '/labs' },
  { name: 'system core', path: '/labs/core' },
  { name: 'design system build notes', path: '/labs/design-system-build-notes' },
  { name: 'yield-flow case study', path: '/labs/yield-flow-case-study' },
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
  if (routePath !== '/labs/design-system-build-notes') return;

  await page.locator('[class*="sectionKicker"]').first().waitFor({ state: 'visible' });

  const ratio = await page.evaluate(() => {
    const oklchToRgb255 = (str: string): [number, number, number] | null => {
      const m = str.match(
        /oklch\(\s*([\d.]+)(%?)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+))?\s*\)/
      );
      if (!m) return null;
      let L = Number(m[1]);
      if (m[2] === '%') L = L / 100;
      const C = Number(m[3]);
      const H = (Number(m[4]) * Math.PI) / 180;
      const a = C * Math.cos(H);
      const b = C * Math.sin(H);
      const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
      const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
      const s_ = L - 0.0894841775 * a - 1.2914855480 * b;
      const ll = l_ * l_ * l_;
      const mm = m_ * m_ * m_;
      const ss = s_ * s_ * s_;
      const r  =  4.0767416621 * ll - 3.3077115913 * mm + 0.2309699292 * ss;
      const g  = -1.2684380046 * ll + 2.6097574011 * mm - 0.3413193965 * ss;
      const bC = -0.0041960863 * ll - 0.7034186147 * mm + 1.7076147010 * ss;
      const gamma = (c: number) =>
        c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
      return [
        Math.round(Math.min(1, Math.max(0, gamma(r)))  * 255),
        Math.round(Math.min(1, Math.max(0, gamma(g)))  * 255),
        Math.round(Math.min(1, Math.max(0, gamma(bC))) * 255),
      ];
    };

    const getRgb = (color: string): [number, number, number] => {
      if (color.startsWith('oklch(')) return oklchToRgb255(color) ?? [0, 0, 0];
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

  expect(ratio, `Build notes kicker contrast on ${theme}: ${ratio.toFixed(2)} < 4.5`).toBeGreaterThanOrEqual(4.5);
};

const assertA11ySmoke = async (page: Page, routePath: string, theme: Theme, testInfo: TestInfo) => {
  await expect(page.getByRole('main')).toBeVisible();
  await expect(page.getByRole('navigation', { name: /main menu/i })).toBeVisible();

  const axeResults = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa'])
    .exclude('[data-axe-skip]')
    .analyze();

  // NOTE: We keep a narrow suppression path for axe "incomplete" color-contrast items.
  // These are not violations, but unresolved checks caused by layered pseudo-element backgrounds.
  // Revisit this filter after background-layer simplification or when axe/browser handling improves.
  const incompleteContrast = axeResults.incomplete.filter((issue) => issue.id === 'color-contrast');
  const actionableIncompleteContrast = incompleteContrast
    .map((issue) => ({
      ...issue,
      nodes: issue.nodes.filter((node) => {
        // NOTE: This excludes only "pseudoContent" cases tied to pageWrap background layers.
        // It is intentionally scoped; do not broaden without a failing example and manual verification.
        const isPseudoBackgroundUnknown = node.any.some((check) => {
          const messageKey = (check.data as { messageKey?: string } | undefined)?.messageKey;
          const isPseudoContent = messageKey === 'pseudoContent';
          const relatedToPageWrap = (check.relatedNodes ?? []).some((relatedNode) => {
            const byTarget = relatedNode.target.some((selector) => selector.includes('pageWrap'));
            const byHtml = relatedNode.html.includes('pageWrap');
            return byTarget || byHtml;
          });
          return isPseudoContent && relatedToPageWrap;
        });

        return !isPseudoBackgroundUnknown;
      }),
    }))
    .filter((issue) => issue.nodes.length > 0);

  if (actionableIncompleteContrast.length > 0) {
    const details = actionableIncompleteContrast
      .map((issue) => `${issue.id}: ${issue.help} (${issue.nodes.length} node(s))`)
      .join('\n');
    testInfo.annotations.push({
      type: 'a11y-incomplete',
      description: `Axe incomplete color-contrast on ${routePath} (${theme})\n${details}`,
    });
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
  // Vercel Analytics and Speed Insights inject <script> tags pointing to /_vercel/* paths.
  // These are served by Vercel's infrastructure on real deployments but return 404 from the
  // Vite preview server, generating console errors that would fail the guard assertions.
  test.beforeEach(async ({ page }) => {
    await page.route('**/_vercel/**', (route) =>
      route.fulfill({ status: 200, contentType: 'application/javascript', body: '' }),
    );
  });

  for (const route of ROUTES) {
    for (const theme of THEMES) {
      test(`sanity on ${route.name} (${theme})`, async ({ page, browserName }, testInfo) => {
        await setTheme(page, theme);
        const guardState = attachRuntimeGuards(page);

        await page.goto(route.path, { waitUntil: 'networkidle' });
        await expect(page).toHaveURL(new RegExp(`${route.path.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`));
        await expect(page.locator('h1').first()).toBeVisible();

        if (browserName === 'chromium') {
          await assertA11ySmoke(page, route.path, theme, testInfo);
        }

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
