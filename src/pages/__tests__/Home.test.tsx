import { render } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Home from '../Home';

describe('Home', () => {

  beforeEach(() => {
    vi.stubGlobal('requestAnimationFrame', vi.fn((cb: (time: number) => void) => {
      cb(0);
      return 0;
    }));

    // JSDOM doesn't implement this, so we provide a spy
    window.HTMLElement.prototype.scrollIntoView = vi.fn();

    vi.clearAllMocks();
  });

  afterEach(() => {
    // Clean up stubs and restore original browser behavior
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  const renderHomeWithSection = (sectionId: string = '') => {
    const searchParam = sectionId ? `?section=${sectionId}` : '';

    return render(
      <MemoryRouter initialEntries={[`/${searchParam}`]}>
        <div id="work" />
        <div id="about" />
        <Home />
      </MemoryRouter>
    );
  };

  it('scrolls to the section specified in the query string on mount', () => {
    renderHomeWithSection('work');

    expect(window.requestAnimationFrame).toHaveBeenCalled();

    expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'auto',
      block: 'start',
    });

    expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalledTimes(1);
  });

  it('does not scroll if no section is provided in the URL', () => {
    renderHomeWithSection();

    expect(window.HTMLElement.prototype.scrollIntoView).not.toHaveBeenCalled();
  });

  it('handles clicking the same section link (re-triggering scroll)', () => {
    // Initial render
    const { rerender } = renderHomeWithSection('about');

    expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalledTimes(1);

    // Simulate clicking the link again.
    rerender(
      <MemoryRouter initialEntries={['/?section=about']}>
        <div id="about" />
        <Home />
      </MemoryRouter>
    );

    expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalledTimes(2);
  });
});
