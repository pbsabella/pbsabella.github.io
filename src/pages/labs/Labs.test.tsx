import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Labs from '@/pages/labs/Labs';
import { LABS_META } from '@/content/pageMeta';

describe('Labs page', () => {
  it('renders labs heading and project cards', () => {
    render(
      <MemoryRouter>
        <Labs />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: LABS_META.title })).toBeInTheDocument();
    expect(screen.getByRole('list', { name: /labs projects/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /design system build notes/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /system core documentation/i })).toBeInTheDocument();
  });

  it('renders links for navigable labs cards', () => {
    render(
      <MemoryRouter>
        <Labs />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: /design system build notes/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /system core documentation/i })).toBeInTheDocument();
  });
});
