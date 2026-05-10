import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Home from '@/pages/home/Home';

describe('Home', () => {
  it('renders core home sections', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', { name: /I build scalable frontend systems that make complex products simple to use./i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /selected projects/i })
    ).toBeInTheDocument();
  });
});
