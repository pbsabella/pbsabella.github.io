/**
 * System Debug Mode
 * Toggles X-Ray visibility for components and tokens.
 */

function initDebugMode() {
    console.log('Initializing System Debug Mode...');

    // Create Toggle Button
    const button = document.createElement('button');
    button.id = 'xray-toggle';
    button.innerHTML = `
        <span id="xray-indicator"></span>
        System X-Ray
    `;

    // Create Tooltip Element
    const tooltip = document.createElement('div');
    tooltip.className = 'xray-tooltip';
    tooltip.style.display = 'none';
    document.body.appendChild(tooltip);

    // Event Delegation for Tooltips
    document.addEventListener('mouseover', (e) => {
        if (!document.body.classList.contains('is-xray-active')) return;

        const target = e.target.closest('[data-tokens]');
        if (target) {
            const tokenString = target.dataset.tokens;
            const tokens = tokenString.split(' | ');

            const resolvedTokens = tokens.map(token => {
                const parts = token.split(': ');
                if (parts.length < 2) return token;

                const prop = parts[0];
                const value = parts[1];

                // If value starts with --, it's a CSS variable
                if (value.startsWith('--')) {
                    const computedValue = window.getComputedStyle(target).getPropertyValue(value).trim();
                    return `${prop}: ${value} <span class="xray-tooltip__value">(${computedValue})</span>`;
                }

                return token;
            });

            tooltip.innerHTML = resolvedTokens.join('<br>');
            tooltip.style.display = 'block';

            // Position tooltip near the element, but fixed viewport
            const rect = target.getBoundingClientRect();
            tooltip.style.top = `${rect.bottom + 8}px`;
            tooltip.style.left = `${rect.left}px`;
        }
    });

    document.addEventListener('mouseout', (e) => {
        const target = e.target.closest('[data-tokens]');
        if (target) {
            tooltip.style.display = 'none';
        }
    });

    // Toggle Logic
    button.addEventListener('click', () => {
        document.body.classList.toggle('is-xray-active');
        button.classList.toggle('is-active');

        // Hide tooltip immediately on toggle off
        if (!button.classList.contains('is-active')) {
            tooltip.style.display = 'none';
        }

        const isActive = document.body.classList.contains('is-xray-active');
        console.log(`System Debug Mode: ${isActive ? 'ON' : 'OFF'}`);
    });

    document.body.appendChild(button);
}

window.addEventListener('load', initDebugMode);
