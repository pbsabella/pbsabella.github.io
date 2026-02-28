import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import YieldFlowCaseStudy from '@/pages/yield-flow-case-study/YieldFlowCaseStudy';

describe('YieldFlowCaseStudy page', () => {
  it('renders the hero and core sections with original content', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <YieldFlowCaseStudy />
        </MemoryRouter>
      </ThemeProvider>
    );

    // Hero
    expect(
      screen.getByRole('heading', { name: /outgrowing the spreadsheet/i })
    ).toBeInTheDocument();

    // Check for original section headings (as titles) - multiple instances (TOC + Heading)
    expect(screen.getAllByText(/The Maintenance Tax/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Beyond the Balance/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/The Idea That Didn't Make It/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/Browser as the Design Medium/i).length).toBeGreaterThanOrEqual(1);

    // Check for specific quotes
    expect(screen.getByText(/Wearing the hats of product designer, engineer, and user simultaneously/i)).toBeInTheDocument();
    expect(screen.getByText(/YieldFlow is a living prototype/i)).toBeInTheDocument();
  });
});
