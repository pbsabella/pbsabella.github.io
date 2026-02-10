import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import DesignSystemCaseStudy from './DesignSystemCaseStudy';

describe('DesignSystemCaseStudy page', () => {
  it('renders the hero and next steps section', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <DesignSystemCaseStudy />
        </MemoryRouter>
      </ThemeProvider>
    );

    expect(
      screen.getByRole('heading', { name: /the architecture/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /the journey continues/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /view system core/i })
    ).toBeInTheDocument();
  });
});
