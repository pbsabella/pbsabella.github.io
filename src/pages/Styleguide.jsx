import React from 'react';

const Styleguide = () => {
    return (
        <div className="container-space sg-main">
            <section className="section">
                <div className="section__inner">
                    <span className="sg-wip-badge">Work in Progress</span>
                    <h1>Styleguide</h1>
                    <p className="section__description">
                        A living reference of the design tokens, primitives, and components used in this portfolio.
                        This system demonstrates a tiered token architecture for scalable, maintainable design.
                    </p>

                    <hr className="sg-divider" />

                    {/* Color System */}
                    <h2>Color System</h2>
                    <p className="sg-section-desc">Colors are organized by priority and semantic meaning.</p>

                    <h3 className="sg-subsection-title">Primary Colors</h3>
                    <div className="sg-grid">
                        <div className="swatch">
                            <div
                                className="sg-swatch-box sg-swatch-box--primary"
                                data-component="Primary Color"
                                data-tokens="bg: --color-primary"
                            ></div>
                            <p>Primary</p>
                        </div>
                        <div className="swatch">
                            <div
                                className="sg-swatch-box sg-swatch-box--primary-light"
                                data-component="Primary Light"
                                data-tokens="bg: --color-primary-light"
                            ></div>
                            <p>Primary Light</p>
                        </div>
                        <div className="swatch">
                            <div
                                className="sg-swatch-box sg-swatch-box--primary-xxlight"
                                data-component="Primary XXLight"
                                data-tokens="bg: --color-primary-xxlight"
                            ></div>
                            <p>Primary XXLight</p>
                        </div>
                    </div>

                    <h3 className="sg-subsection-title">Neutral Colors</h3>
                    <div className="sg-grid">
                        <div className="swatch">
                            <div
                                className="sg-swatch-box sg-swatch-box--border sg-swatch-box--secondary-xxlight"
                                data-component="Neutral XXLight"
                                data-tokens="bg: --color-secondary-xxlight"
                            ></div>
                            <p>Neutral XXLight</p>
                        </div>
                        <div className="swatch">
                            <div
                                className="sg-swatch-box sg-swatch-box--border sg-swatch-box--secondary-xlight"
                                data-component="Neutral XLight"
                                data-tokens="bg: --color-secondary-xlight"
                            ></div>
                            <p>Neutral XLight</p>
                        </div>
                        <div className="swatch">
                            <div
                                className="sg-swatch-box sg-swatch-box--secondary-light"
                                data-component="Neutral Light"
                                data-tokens="bg: --color-secondary-light"
                            ></div>
                            <p>Neutral Light</p>
                        </div>
                        <div className="swatch">
                            <div
                                className="sg-swatch-box sg-swatch-box--secondary"
                                data-component="Neutral"
                                data-tokens="bg: --color-secondary"
                            ></div>
                            <p>Neutral</p>
                        </div>
                        <div className="swatch">
                            <div
                                className="sg-swatch-box sg-swatch-box--secondary-dark"
                                data-component="Neutral Dark"
                                data-tokens="bg: --color-secondary-dark"
                            ></div>
                            <p>Neutral Dark</p>
                        </div>
                        <div className="swatch">
                            <div
                                className="sg-swatch-box sg-swatch-box--secondary-xdark"
                                data-component="Neutral XDark"
                                data-tokens="bg: --color-secondary-xdark"
                            ></div>
                            <p>Neutral XDark</p>
                        </div>
                        <div className="swatch">
                            <div
                                className="sg-swatch-box sg-swatch-box--secondary-xxdark"
                                data-component="Neutral XXDark"
                                data-tokens="bg: --color-secondary-xxdark"
                            ></div>
                            <p>Neutral XXDark</p>
                        </div>
                    </div>

                    <h3 className="sg-subsection-title">Accent Colors</h3>
                    <div className="sg-grid">
                        <div className="swatch">
                            <div
                                className="sg-swatch-box sg-swatch-box--accent-yellow"
                                data-component="Yellow Accent"
                                data-tokens="bg: --color-accent-yellow"
                            ></div>
                            <p>Yellow</p>
                        </div>
                        <div className="swatch">
                            <div
                                className="sg-swatch-box sg-swatch-box--accent-orange"
                                data-component="Orange Accent"
                                data-tokens="bg: --color-accent-orange"
                            ></div>
                            <p>Orange</p>
                        </div>
                        <div className="swatch">
                            <div
                                className="sg-swatch-box sg-swatch-box--accent-cyan-light"
                                data-component="Cyan Light"
                                data-tokens="bg: --color-accent-cyan-light"
                            ></div>
                            <p>Cyan Light</p>
                        </div>
                        <div className="swatch">
                            <div
                                className="sg-swatch-box sg-swatch-box--border sg-swatch-box--accent-neutral"
                                data-component="Neutral Accent"
                                data-tokens="bg: --color-accent-neutral"
                            ></div>
                            <p>Neutral Accent</p>
                        </div>
                    </div>

                    <h3 className="sg-subsection-title">Semantic Tokens</h3>
                    <p className="sg-section-desc">These tokens adapt automatically based on the active theme.</p>
                    <div className="sg-grid">
                        <div className="swatch">
                            <div
                                className="sg-swatch-box sg-swatch-box--border sg-swatch-box--bg"
                                data-component="Background"
                                data-tokens="color: --color-bg"
                            ></div>
                            <p>Background</p>
                        </div>
                        <div className="swatch">
                            <div
                                className="sg-swatch-box sg-swatch-box--card-bg"
                                data-component="Card BG"
                                data-tokens="color: --card-bg-color"
                            ></div>
                            <p>Card BG</p>
                        </div>
                        <div className="swatch">
                            <div
                                className="sg-swatch-box sg-swatch-box--text"
                                data-component="Text"
                                data-tokens="color: --color-text"
                            ></div>
                            <p>Text</p>
                        </div>
                        <div className="swatch">
                            <div
                                className="sg-swatch-box sg-swatch-box--border-token"
                                data-component="Border"
                                data-tokens="color: --color-border"
                            ></div>
                            <p>Border</p>
                        </div>
                    </div>

                    <hr className="sg-divider" />

                    {/* Typography */}
                    <h2>Typography</h2>
                    <p className="sg-section-desc">Type scale and hierarchy for content structure.</p>

                    <div className="sg-type-examples">
                        <h1 data-component="Heading Level 1" data-tokens="size: --text-h1 | leading: --leading-tight">Heading Level 1</h1>
                        <h2 data-component="Heading Level 2" data-tokens="size: --text-h2 | leading: --leading-normal">Heading Level 2</h2>
                        <h3 data-component="Heading Level 3" data-tokens="size: --text-h3 | leading: --leading-normal">Heading Level 3</h3>
                        <p data-component="Body Text" data-tokens="size: --text-body | leading: --leading-body-wide">
                            This is body text. It defines the rhythm of the page.
                            It is used for <strong>paragraphs and general content</strong> and should be easy to read.
                        </p>
                    </div>

                    <hr className="sg-divider" />

                    {/* Components */}
                    <h2>Components</h2>
                    <p className="sg-section-desc">Reusable UI patterns showcased in this portfolio.</p>

                    <h3 className="sg-subsection-title">Cards</h3>
                    <div
                        className="skills-card sg-card-wrapper"
                        data-component="Skills Card"
                        data-tokens="bg: --color-bg | shadow: --card-shadow | radius: 5px"
                    >
                        <h4 className="skills-card__title">Skills Card</h4>
                        <ul className="skills-card__list">
                            <li className="skills-card__item">Item 1</li>
                            <li className="skills-card__item">Item 2</li>
                            <li className="skills-card__item">Item 3</li>
                        </ul>
                    </div>

                    <h3 className="sg-subsection-title">Tags</h3>
                    <div className="sg-tags-row">
                        <span className="tag" data-component="Tag" data-tokens="bg: --tag-bg-color | color: --tag-text-color">Example Tag</span>
                    </div>

                    <h3 className="sg-subsection-title">Buttons & Links</h3>
                    <div className="sg-buttons-row">
                        <a
                            className="hero__link"
                            href="/labs/styleguide"
                            data-component="Hero Link"
                            data-tokens="color: --color-text"
                        >
                            Hero Link/Button
                            <span className="hero__divider"></span>
                        </a>
                        <a
                            className="link"
                            href="/labs/styleguide"
                            data-component="Text Link"
                            data-tokens="color: --color-text-primary"
                        >Standard Text Link</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Styleguide;
