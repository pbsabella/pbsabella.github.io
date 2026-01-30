import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import Layout from '../Layout';

describe('Layout', () => {
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

