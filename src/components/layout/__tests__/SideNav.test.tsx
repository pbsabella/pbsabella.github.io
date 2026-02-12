import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import SideNav from '@/components/layout/SideNav';

describe('SideNav', () => {
  it('focuses the close button when opened', async () => {
    const onClose = vi.fn();
    render(
      <MemoryRouter>
        <SideNav isOpen={true} onClose={onClose} />
      </MemoryRouter>
    );

    const closeButton = screen.getByRole('button', { name: /close mobile menu/i });
    expect(document.activeElement).toBe(closeButton);
  });

  it('calls onClose when Escape is pressed', () => {
    const onClose = vi.fn();
    render(
      <MemoryRouter>
        <SideNav isOpen={true} onClose={onClose} />
      </MemoryRouter>
    );

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('restores focus to the previously focused element when closed', async () => {
    const onClose = vi.fn();

    const { rerender } = render(
      <MemoryRouter>
        <div>
          <button>Opener</button>
          <SideNav isOpen={false} onClose={onClose} />
        </div>
      </MemoryRouter>
    );

    const opener = screen.getByRole('button', { name: /opener/i });
    opener.focus();
    expect(document.activeElement).toBe(opener);

    rerender(
      <MemoryRouter>
        <div>
          <button>Opener</button>
          <SideNav isOpen={true} onClose={onClose} />
        </div>
      </MemoryRouter>
    );

    // Close -> triggers effect cleanup
    rerender(
      <MemoryRouter>
        <div>
          <button>Opener</button>
          <SideNav isOpen={false} onClose={onClose} />
        </div>
      </MemoryRouter>
    );

    const openerAgain = screen.getByRole('button', { name: /opener/i });
    await waitFor(() => {
      expect(document.activeElement).toBe(openerAgain);
    });
  });
});
