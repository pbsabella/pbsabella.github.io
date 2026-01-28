import React, { useState, useEffect, useRef } from 'react';

const XRay = () => {
    const [isActive, setIsActive] = useState(false);
    const [tooltip, setTooltip] = useState({
        display: false,
        content: '',
        top: 0,
        left: 0
    });
    const tooltipRef = useRef(null);

    useEffect(() => {
        if (isActive) {
            document.body.classList.add('is-xray-active');
        } else {
            document.body.classList.remove('is-xray-active');
        }
    }, [isActive]);

    useEffect(() => {
        if (!isActive) return;

        const handleMouseOver = (e) => {
            const target = e.target.closest('[data-tokens]');
            if (target) {
                const tokenString = target.dataset.tokens;
                const tokens = tokenString.split(' | ');

                const resolvedTokens = tokens.map(token => {
                    const parts = token.split(': ');
                    if (parts.length < 2) return token;

                    const prop = parts[0];
                    const value = parts[1];

                    if (value.startsWith('--')) {
                        const computedValue = window.getComputedStyle(target).getPropertyValue(value).trim();
                        return `${prop}: ${value} <span class="xray-tooltip__value">(${computedValue})</span>`;
                    }

                    return token;
                });

                const rect = target.getBoundingClientRect();
                setTooltip({
                    display: true,
                    content: resolvedTokens.join('<br>'),
                    top: rect.bottom + 8 + window.scrollY,
                    left: rect.left + window.scrollX,
                });
            }
        };

        const handleMouseOut = (e) => {
            const target = e.target.closest('[data-tokens]');
            if (target) {
                setTooltip(prev => ({ ...prev, display: false }));
            }
        };

        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, [isActive]);

    const toggleXRay = () => {
        setIsActive(prev => !prev);
        if (isActive) {
            setTooltip(prev => ({ ...prev, display: false }));
        }
    };

    return (
        <>
            <button
                id="xray-toggle"
                className={isActive ? 'is-active' : ''}
                onClick={toggleXRay}
                aria-label="Toggle X-Ray Mode"
            >
                <span id="xray-indicator"></span>
                System X-Ray
            </button>

            {tooltip.display && (
                <div
                    className="xray-tooltip"
                    style={{
                        display: 'block',
                        top: tooltip.top,
                        left: tooltip.left,
                        position: 'absolute'
                    }}
                    dangerouslySetInnerHTML={{ __html: tooltip.content }}
                    ref={tooltipRef}
                />
            )}
        </>
    );
};

export default XRay;
