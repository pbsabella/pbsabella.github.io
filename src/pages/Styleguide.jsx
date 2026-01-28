import React from 'react';
import SkillsCard from '@components/ui/SkillsCard';
import Container from '@components/layout/Container';
import Tag from '@components/ui/Tag';
import styles from './Styleguide.module.css';

const Styleguide = () => {
    return (
        <Container className={styles.main}>
            <section className={styles.section}>
                <div className={styles.sectionInner}>
                    <span className={styles.wipBadge}>Work in Progress</span>
                    <h1>Styleguide</h1>
                    <p className={styles.description}>
                        A living reference of the design tokens, primitives, and components used in this portfolio.
                        This system demonstrates a tiered token architecture for scalable, maintainable design.
                    </p>

                    <hr className={styles.divider} />

                    <h2>Color System</h2>
                    <p className={styles.sectionDesc}>Colors are organized by priority and semantic meaning.</p>

                    <h3 className={styles.subsectionTitle}>Primary Colors</h3>
                    <div className={styles.grid}>
                        <div className={styles.swatch}>
                            <div
                                className={`${styles.swatchBox} ${styles.swatchPrimary}`}
                                data-component="Primary Color"
                                data-tokens="bg: --color-primary"
                            ></div>
                            <p>Primary</p>
                        </div>
                        <div className={styles.swatch}>
                            <div
                                className={`${styles.swatchBox} ${styles.swatchPrimaryLight}`}
                                data-component="Primary Light"
                                data-tokens="bg: --color-primary-light"
                            ></div>
                            <p>Primary Light</p>
                        </div>
                        <div className={styles.swatch}>
                            <div
                                className={`${styles.swatchBox} ${styles.swatchPrimaryXXLight}`}
                                data-component="Primary XXLight"
                                data-tokens="bg: --color-primary-xxlight"
                            ></div>
                            <p>Primary XXLight</p>
                        </div>
                    </div>

                    <h3 className={styles.subsectionTitle}>Neutral Colors</h3>
                    <div className={styles.grid}>
                        {[
                            { name: 'Neutral XXLight', class: styles.swatchSecondaryXXLight, token: '--color-secondary-xxlight', border: true },
                            { name: 'Neutral XLight', class: styles.swatchSecondaryXLight, token: '--color-secondary-xlight', border: true },
                            { name: 'Neutral Light', class: styles.swatchSecondaryLight, token: '--color-secondary-light' },
                            { name: 'Neutral', class: styles.swatchSecondary, token: '--color-secondary' },
                            { name: 'Neutral Dark', class: styles.swatchSecondaryDark, token: '--color-secondary-dark' },
                            { name: 'Neutral XDark', class: styles.swatchSecondaryXDark, token: '--color-secondary-xdark' },
                            { name: 'Neutral XXDark', class: styles.swatchSecondaryXXDark, token: '--color-secondary-xxdark' },
                        ].map((item, idx) => (
                            <div className={styles.swatch} key={idx}>
                                <div
                                    className={`${styles.swatchBox} ${item.class} ${item.border ? styles.swatchBoxBorder : ''}`}
                                    data-component={item.name}
                                    data-tokens={`bg: ${item.token}`}
                                ></div>
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>

                    <h3 className={styles.subsectionTitle}>Accent Colors</h3>
                    <div className={styles.grid}>
                        {[
                            { name: 'Yellow', class: styles.swatchAccentYellow, token: '--color-accent-yellow' },
                            { name: 'Orange', class: styles.swatchAccentOrange, token: '--color-accent-orange' },
                            { name: 'Cyan Light', class: styles.swatchAccentCyanLight, token: '--color-accent-cyan-light' },
                            { name: 'Neutral Accent', class: styles.swatchAccentNeutral, token: '--color-accent-neutral', border: true },
                        ].map((item, idx) => (
                            <div className={styles.swatch} key={idx}>
                                <div
                                    className={`${styles.swatchBox} ${item.class} ${item.border ? styles.swatchBoxBorder : ''}`}
                                    data-component={item.name}
                                    data-tokens={`bg: ${item.token}`}
                                ></div>
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>

                    <h3 className={styles.subsectionTitle}>Semantic Tokens</h3>
                    <p className={styles.sectionDesc}>These tokens adapt automatically based on the active theme.</p>
                    <div className={styles.grid}>
                        {[
                            { name: 'Background', class: styles.swatchBg, token: '--color-bg', border: true },
                            { name: 'Card BG', class: styles.swatchCardBg, token: '--card-bg-color' },
                            { name: 'Text', class: styles.swatchText, token: '--color-text' },
                            { name: 'Border', class: styles.swatchBorder, token: '--color-border' },
                        ].map((item, idx) => (
                            <div className={styles.swatch} key={idx}>
                                <div
                                    className={`${styles.swatchBox} ${item.class} ${item.border ? styles.swatchBoxBorder : ''}`}
                                    data-component={item.name}
                                    data-tokens={`color: ${item.token}`}
                                ></div>
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>

                    <hr className={styles.divider} />

                    <h2>Typography</h2>
                    <p className={styles.sectionDesc}>Type scale and hierarchy for content structure.</p>
                    <div className={styles.typeExamples}>
                        <h1 data-component="Heading Level 1" data-tokens="size: --text-h1 | leading: --leading-tight">Heading Level 1</h1>
                        <h2 data-component="Heading Level 2" data-tokens="size: --text-h2 | leading: --leading-normal">Heading Level 2</h2>
                        <h3 data-component="Heading Level 3" data-tokens="size: --text-h3 | leading: --leading-normal">Heading Level 3</h3>
                        <p data-component="Body Text" data-tokens="size: --text-body | leading: --leading-body-wide">
                            This is body text. It defines the rhythm of the page.
                        </p>
                    </div>

                    <hr className={styles.divider} />

                    <h2>Components</h2>
                    <p className={styles.sectionDesc}>Reusable UI patterns showcased in this portfolio.</p>
                    <h3 className={styles.subsectionTitle}>Cards</h3>
                    <div className={styles.cardWrapper}>
                        <SkillsCard
                            title="Skills Card"
                            skills={['Modular Architecture', 'Atomic Design', 'Industry Standards']}
                            data-component="Skills Card"
                            data-tokens="bg: --color-bg | shadow: --card-shadow | radius: 5px"
                        />
                    </div>

                    <h3 className={styles.subsectionTitle}>Tags</h3>
                    <div className={styles.tagsRow}>
                        <Tag data-component="Tag" data-tokens="bg: --tag-bg-color | color: --tag-text-color">React</Tag>
                        <Tag>CSS Modules</Tag>
                        <Tag>Vite</Tag>
                    </div>

                    <h3 className={styles.subsectionTitle}>Buttons & Links</h3>
                    <div className={styles.buttonsRow}>
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
        </Container>
    );
};

export default Styleguide;
