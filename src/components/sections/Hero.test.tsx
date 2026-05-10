import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import Hero from '@/components/sections/Hero';

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
        name: /I build scalable frontend systems that make complex products simple to use./i
      })
    ).toBeInTheDocument();
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
