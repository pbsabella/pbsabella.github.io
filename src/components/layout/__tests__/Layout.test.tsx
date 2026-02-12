import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import Layout from '@/components/layout/Layout';

describe('Layout', () => {
  beforeEach(() => {
    vi.stubGlobal('requestAnimationFrame', vi.fn((cb: (time: number) => void) => {
      cb(0);
      return 0;
    }));
    window.HTMLElement.prototype.scrollIntoView = vi.fn();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('locks background content when SideNav is open', () => {
    const { container } = render(
      <ThemeProvider>
        <MemoryRouter>
          <Layout>
            <div>Page content</div>
          </Layout>
        </MemoryRouter>
      </ThemeProvider>
    );

    const main = container.querySelector('main');
    expect(main).toBeTruthy();
    expect(main).not.toHaveAttribute('inert');
    expect(main?.parentElement).not.toHaveAttribute('inert');
    expect(main?.parentElement).not.toHaveAttribute('aria-hidden');

    const openButton = screen.getByRole('button', { name: /open mobile menu/i });
    fireEvent.click(openButton);

    expect(main?.parentElement).toHaveAttribute('inert');
    expect(main?.parentElement).toHaveAttribute('aria-hidden', 'true');
    expect(document.body.className).not.toBe('');
  });
});
