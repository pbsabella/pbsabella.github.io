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
      screen.getByRole('heading', { name: /building product interfaces with system rigor/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /selected projects/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /background and expertise/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /get in touch/i })
    ).toBeInTheDocument();
  });
});
