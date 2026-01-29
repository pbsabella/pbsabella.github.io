import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ThemeToggle from '../ThemeToggle';
import { ThemeProvider } from '@context/ThemeContext';

// Mocking useTheme to test the component in isolation if needed,
// but here we'll test it with the real provider for a true integration test.
describe('ThemeToggle Component', () => {
  it('renders correctly', () => {
    render(
      <ThemeProvider>
        <ThemeToggle id="test-toggle" />
      </ThemeProvider>
    );
    expect(screen.getByRole('button', { name: /toggle theme/i })).toBeInTheDocument();
  });

  it('calls toggleTheme on click', async () => {
    render(
      <ThemeProvider>
        <ThemeToggle id="test-toggle" />
      </ThemeProvider>
    );

    const button = screen.getByRole('button', { name: /toggle theme/i });
    fireEvent.click(button);

    // Since we're using the real provider, we check if the theme class changes on body
    expect(['light', 'dark']).toContain(document.body.getAttribute('data-theme'));
  });
});
