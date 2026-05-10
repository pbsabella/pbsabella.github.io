import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import About from '@/pages/about/About';
import { ABOUT_META } from '@/content/pageMeta';

describe('About page', () => {
  it('renders about heading and content', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { level: 1, name: ABOUT_META.title })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /core competencies/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /tech stack/i })).toBeInTheDocument();
  });
});
