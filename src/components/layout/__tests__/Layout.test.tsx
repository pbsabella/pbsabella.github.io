import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import Layout from '../Layout';

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

    const openButton = screen.getByRole('button', { name: /open mobile menu/i });
    fireEvent.click(openButton);

    expect(container.querySelector('main')).toHaveAttribute('inert');
    expect(document.body.className).not.toBe('');
  });
});
