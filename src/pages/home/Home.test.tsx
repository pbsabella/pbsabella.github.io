import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Home from '@/pages/home/Home';

describe('Home', () => {
  it('renders the selected projects section', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', { name: /selected projects/i })
    ).toBeInTheDocument();
  });
});
