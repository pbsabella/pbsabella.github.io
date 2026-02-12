import { render, screen, fireEvent } from '@testing-library/react';
import { beforeEach, describe, it, expect } from 'vitest';
import ThemeToggle from '@/components/ui/ThemeToggle/ThemeToggle';
import { ThemeProvider } from '@context/ThemeContext';

// Mocking useTheme to test the component in isolation if needed,
// but here we'll test it with the real provider for a true integration test.
describe('ThemeToggle Component', () => {
  beforeEach(() => {
    localStorage.removeItem('theme');
    document.body.setAttribute('data-theme', 'light');
  });

  it('renders icon toggle with action-oriented label and pressed state', () => {
    render(
      <ThemeProvider>
        <ThemeToggle id="test-toggle" />
      </ThemeProvider>
    );
    const button = screen.getByRole('button', { name: /switch to dark mode/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-pressed', 'false');
  });

  it('renders correctly', () => {
    render(
      <ThemeProvider>
        <ThemeToggle id="text-toggle" variant="text" />
      </ThemeProvider>
    );
    expect(screen.getByRole('button', { name: /switch to dark mode/i })).toBeInTheDocument();
  });

  it('calls toggleTheme on click', async () => {
    render(
      <ThemeProvider>
        <ThemeToggle id="test-toggle" />
      </ThemeProvider>
    );

    const button = screen.getByRole('button', { name: /switch to dark mode/i });
    fireEvent.click(button);

    // Since we're using the real provider, we check if the theme class changes on body
    expect(document.body.getAttribute('data-theme')).toBe('dark');
    expect(button).toHaveAttribute('aria-pressed', 'true');
  });

  it('respects preventDefault in onClick and does not toggle', () => {
    render(
      <ThemeProvider>
        <ThemeToggle
          id="prevent-toggle"
          onClick={(event) => event.preventDefault()}
        />
      </ThemeProvider>
    );

    const button = screen.getByRole('button', { name: /switch to dark mode/i });
    fireEvent.click(button);
    expect(document.body.getAttribute('data-theme')).toBe('light');
  });
});
