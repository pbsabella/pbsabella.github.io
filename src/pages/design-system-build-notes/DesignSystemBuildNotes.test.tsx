import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import DesignSystemBuildNotes from '@/pages/design-system-build-notes/DesignSystemBuildNotes';

describe('DesignSystemBuildNotes page', () => {
  it('renders the hero and next steps section', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <DesignSystemBuildNotes />
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
    expect(
      screen.getByLabelText(/table of contents/i)
    ).toBeInTheDocument();
  });
});
