import { render } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Home from '../Home';

describe('Home', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('scrolls to the section specified in the query string', () => {
    const scrollIntoView = vi.fn();
    const raf = vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      cb(0);
      return 0;
    });

    // JSDOM doesn't implement scrollIntoView; we stub it for this test.
    const original = Element.prototype.scrollIntoView;
    Element.prototype.scrollIntoView = scrollIntoView;

    render(
      <MemoryRouter initialEntries={['/?section=work']}>
        <div>
          <div id="work" />
          <Home />
        </div>
      </MemoryRouter>
    );

    expect(raf).toHaveBeenCalled();
    expect(scrollIntoView).toHaveBeenCalledTimes(1);

    Element.prototype.scrollIntoView = original;
  });
});

