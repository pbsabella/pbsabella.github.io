import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import Hero from '@/components/sections/Hero';
import { ROUTES, SECTION_ANCHORS } from '@constants/routes';

vi.mock('./HeroCanvas', () => ({
  default: () => <canvas aria-hidden="true" data-testid="hero-canvas" />,
}));

describe('Hero', () => {
  it('renders hero heading and lead copy', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', {
        name: /building product interfaces with system rigor and an eye for pixel-perfect detail/i
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/i build frontend systems for complex products/i)
    ).toBeInTheDocument();
  });

  it('renders CTA links with expected destinations', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    const contactLink = screen.getByRole('link', { name: /contact me/i });
    const contactHref = contactLink.getAttribute('href') ?? '';
    expect(contactHref).toContain(`section=${SECTION_ANCHORS.CONTACT}`);

    const labsLink = screen.getByRole('link', { name: /explore labs writing/i });
    const labsHref = labsLink.getAttribute('href') ?? '';
    expect(labsHref).toContain(ROUTES.LABS);
  });

  it('renders toolset chips and decorative canvas', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    const toolset = screen.getByRole('list', { name: /core toolset and expertise/i });
    expect(toolset).toBeInTheDocument();
    expect(screen.getByText('Design Systems')).toBeInTheDocument();
    expect(screen.getByText('Frontend Architecture')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();

    const canvas = screen.getByTestId('hero-canvas');
    expect(canvas).toHaveAttribute('aria-hidden', 'true');
  });
});
