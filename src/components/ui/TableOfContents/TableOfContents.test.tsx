import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeAll, afterAll, afterEach } from 'vitest';
import TableOfContents from './TableOfContents';

const sections = [
  { id: 'color-system', label: 'Color System' },
  { id: 'spacing-scale', label: 'Spacing Scale' },
];

class MockIntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  constructor() {}
}

describe('TableOfContents Component', () => {
  const originalIntersectionObserver = window.IntersectionObserver;

  beforeAll(() => {
    // @ts-expect-error - Mocking for test environment
    window.IntersectionObserver = MockIntersectionObserver;
  });

  afterAll(() => {
    window.IntersectionObserver = originalIntersectionObserver;
  });

  afterEach(() => {
    document.body.innerHTML = '';
    vi.restoreAllMocks();
  });

  it('renders navigation and links with accessible roles', () => {
    render(<TableOfContents sections={sections} />);

    const nav = screen.getByLabelText(/table of contents/i);
    expect(nav).toBeInTheDocument();

    const links = screen.getAllByRole('link', { hidden: true });
    expect(links).toHaveLength(sections.length);
  });

  it('scrolls to the section on link click', () => {
    const target = document.createElement('section');
    target.id = 'color-system';
    target.scrollIntoView = vi.fn();
    document.body.appendChild(target);

    vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      cb(0);
      return 0;
    });

    render(<TableOfContents sections={sections} />);

    const link = screen.getByRole('link', { name: /color system/i, hidden: true });
    fireEvent.click(link);

    expect(target.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'instant',
      block: 'start',
    });
  });
});
