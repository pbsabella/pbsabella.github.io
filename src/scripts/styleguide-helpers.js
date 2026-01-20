/**
 * Styleguide Helper Scripts
 * Handles automated accessibility checks and tooling for the styleguide.
 */

// WCAG 2.1 Relative Luminance Calculation
function getLuminance(r, g, b) {
    const a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

// Contrast Ratio Calculation
function getContrastRatio(rgb1, rgb2) {
    const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
    const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
}

// Parse rgb/rgba string
function parseRgb(colorStr) {
    if (!colorStr || colorStr === 'transparent') return null;
    const match = colorStr.match(/\d+/g);
    if (!match || match.length < 3) return null;
    return {
        r: parseInt(match[0]),
        g: parseInt(match[1]),
        b: parseInt(match[2])
    };
}

// Render Contrast Badge
function createBadge(ratio, label) {
    const badge = document.createElement('div');
    badge.className = 'sg-badge';
    badge.style.cssText = `
        font-size: 10px;
        padding: 2px 6px;
        border-radius: 4px;
        background: rgba(0,0,0,0.1);
        display: inline-flex;
        align-items: center;
        gap: 4px;
        margin-top: 4px;
        font-family: monospace;
    `;

    let grade = 'Fail';
    if (ratio >= 7) grade = 'AAA';
    else if (ratio >= 4.5) grade = 'AA';
    else if (ratio >= 3) grade = 'AA Large';

    const icon = grade.includes('AA') ? '✓' : '✗';
    const color = grade.includes('AA') ? 'var(--color-primary)' : 'var(--color-accent-orange)';

    badge.innerHTML = `<span style="color: ${color}; font-weight: bold;">${icon}</span> ${label}: ${ratio.toFixed(2)}`;
    return badge;
}

function initContrastChecker() {
    console.log('Initializing Automated Contrast Checker...');
    const swatches = document.querySelectorAll('.sg-swatch-box');

    swatches.forEach(swatch => {
        const style = window.getComputedStyle(swatch);
        const bgRgb = parseRgb(style.backgroundColor);

        if (!bgRgb) return;

        // Check against White (#FFF) and Black (#000)
        const whiteRgb = { r: 255, g: 255, b: 255 };
        const blackRgb = { r: 0, g: 0, b: 0 }; // using pure black for strict check, or matches text-primary

        const ratioWhite = getContrastRatio(bgRgb, whiteRgb);
        const ratioBlack = getContrastRatio(bgRgb, blackRgb);

        // Determine best readable text color
        const bestColor = ratioWhite > ratioBlack ? 'White' : 'Black';
        const bestRatio = Math.max(ratioWhite, ratioBlack);

        // Append info to the parent .swatch element
        const parent = swatch.parentElement;
        if (parent) {
            const badge = createBadge(bestRatio, `vs ${bestColor}`);
            parent.appendChild(badge);
        }
    });
}

// Initialize on load
window.addEventListener('load', initContrastChecker);
