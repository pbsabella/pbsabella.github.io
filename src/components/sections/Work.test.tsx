import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Work from '@/components/sections/Work';
import { PROJECTS } from '@/content/projects';

describe('Work', () => {
  it('renders one work item per project', () => {
    render(
      <MemoryRouter>
        <Work />
      </MemoryRouter>
    );

    const items = screen.getAllByRole('article');
    expect(items).toHaveLength(PROJECTS.length);
  });

  it('alternates tone and media side by index', () => {
    render(
      <MemoryRouter>
        <Work />
      </MemoryRouter>
    );

    const items = screen.getAllByRole('article');
    expect(items[0]).toHaveAttribute('data-tone', 'default');
    expect(items[0]).toHaveAttribute('data-media-side', 'left');
    expect(items[1]).toHaveAttribute('data-tone', 'subtle');
    expect(items[1]).toHaveAttribute('data-media-side', 'right');
  });
});
