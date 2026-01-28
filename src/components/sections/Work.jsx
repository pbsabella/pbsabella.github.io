import React from 'react';
import Section from '@components/layout/Section';
import WorkItem from './WorkItem';
import smDsWide from '@assets/sm-ds-wide.png';
import smNotifications from '@assets/sm-notifications.png';
import flDsWide from '@assets/fl-ds-wide.png';
import wireframingTool from '@assets/wireframing-tool-frame.png';
import animationKnobs from '@assets/animation-knobs.png';

const Work = () => {
    const projects = [
        {
            image: smDsWide,
            title: 'Design System & Patterns',
            company: 'SiteMinder',
            period: 'May 2021 - Jan 2026',
            position: 'Senior Frontend Engineer',
            description: [
                "Led the development and maintenance of SiteMinder's Design System and product patterns, enabling teams to build consistent, accessible, and scalable interfaces across the platform.",
                "Defined and managed design tokens, UI components, and interaction patterns to streamline the development lifecycle.",
                "Developed reusable solutions, such as the media management pattern, ensuring a clear connection between foundational elements and real product experiences.",
                "Collaborated closely with design, product, and engineering teams to uphold best practices in usability, performance, and accessibility.",
            ],
            tags: ['Vue.js', 'TypeScript', 'HTML', 'CSS', 'Component Architecture', 'Accessibility', 'Frontend Tooling'],
        },
        {
            image: smNotifications,
            title: 'Notifications Platform',
            company: 'SiteMinder',
            period: 'May 2021 - Jan 2026',
            position: 'Senior Frontend Engineer / Feature Lead',
            description: [
                "Led the frontend development of SiteMinder's Notifications platform, leveraging the Design System to deliver a seamless and consistent user experience.",
                "Served as feature lead, writing technical and product specifications, defining implementation strategies, and coordinating with design, backend, and product teams to ensure alignment with business goals.",
                "Built responsive, accessible UI components with consistent interaction patterns and seamless GraphQL integration.",
            ],
            tags: ['Vue.js', 'TypeScript', 'GraphQL', 'Accessibility', 'Performance Optimization'],
            bgClass: 'bgAccentPrimaryLight',
        },
        {
            image: flDsWide,
            title: 'Design System',
            company: 'Freelancer.com',
            period: 'July 2015 - May 2021',
            position: 'Software Engineer',
            description: [
                "Maintained and evolved Freelancer's design system, supporting consistent, scalable UI development across the platform.",
            ],
            tags: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Node.js', 'Component Architecture', 'Accessibility', 'Frontend Tooling'],
        },
        {
            image: wireframingTool,
            title: 'Wireframing Application',
            company: 'Freelancer.com',
            period: 'July 2015 - May 2021',
            position: 'Software Engineer',
            description: [
                "Developed a high-fidelity wireframing tool consuming the Design System directly. Allowed Product Managers to prototype using real code components, bridging the gap between design and dev.",
                "The tool rendered real components from Freelancer's design system and allowed easy customization through form-based controls.",
            ],
            tags: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Node.js'],
            bgClass: 'bgAccentCyanLight',
        },
        {
            image: animationKnobs,
            title: 'Motion System',
            company: 'Freelancer.com',
            period: 'July 2015 - May 2021',
            position: 'Software Engineer',
            description: [
                "Built the animation infrastructure. Created a library of exportable animation tokens and keyframes, standardizing motion across the platform.",
            ],
            tags: ['Angular', 'Angular Animations', 'TypeScript', 'HTML', 'CSS'],
        },
    ];

    return (
        <Section
            id="work"
            introText="work"
            title="Selected Projects"
            noContainer
        >
            {projects.map((project, index) => (
                <WorkItem key={index} {...project} />
            ))}
        </Section>
    );
};

export default Work;
