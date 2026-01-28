import React from 'react';

const About = () => {
    return (
        <section id="about" className="section bg-accent-neutral">
            <div className="container-space">
                <div className="section__intro">
                    <span className="section__intro-divider"></span>
                    <h2 className="section__intro-text">about</h2>
                </div>
                <h3 className="section__title">
                    A little overview
                </h3>

                <div className="flex">
                    <p className="flex--2 section__description">
                        Senior Frontend Engineer with deep expertise in <strong>Design Systems</strong> and scalable architecture.
                        I bridge the gap between design and engineering, translating visual language into robust, accessible code.
                        <br /><br />
                        I am passionate about developer experience, tooling, and creating inclusive products.
                    </p>

                    <div className="flex">
                        <div className="skills-card flex--1">
                            <h4 className="skills-card__title">Core Competencies</h4>
                            <ul className="skills-card__list">
                                <li className="skills-card__item">Design Systems</li>
                                <li className="skills-card__item">Design Tokens</li>
                                <li className="skills-card__item">Component Lifecycle Management</li>
                                <li className="skills-card__item">Accessibility (WCAG)</li>
                                <li className="skills-card__item">Frontend Architecture</li>
                                <li className="skills-card__item">Mentoring & Leadership</li>
                            </ul>
                        </div>

                        <div className="skills-card flex--1">
                            <h4 className="skills-card__title">Tech Stack</h4>
                            <ul className="skills-card__list">
                                <li className="skills-card__item">TypeScript, JavaScript</li>
                                <li className="skills-card__item">Vue.js, Angular</li>
                                <li className="skills-card__item">HTML, CSS, Tailwind</li>
                                <li className="skills-card__item">Vite, Webpack</li>
                                <li className="skills-card__item">Figma</li>
                                <li className="skills-card__item">Unit, Component, End-to-End, & Visual Testing (Jest, Cypress, Percy)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
