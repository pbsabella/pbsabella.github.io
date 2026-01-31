import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { useHeaderScroll } from '../useHeaderScroll';

describe('useHeaderScroll Hook', () => {
  beforeEach(() => {
    // Reset scroll position before each test
    window.scrollY = 0;
    document.documentElement.scrollTop = 0;
  });

  it('initializes as transparent and not hidden', () => {
    const { result } = renderHook(() => useHeaderScroll());
    expect(result.current.isTransparent).toBe(true);
    expect(result.current.isHidden).toBe(false);
  });

  it('becomes non-transparent when scrolling down', () => {
    const { result } = renderHook(() => useHeaderScroll({ enableHide: true }));

    act(() => {
      // Simulate scroll down
      window.scrollY = 50;
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current.isTransparent).toBe(false);
    expect(result.current.isHidden).toBe(false);
  });

  it('becomes hidden when scrolling down past 100px', () => {
    const { result } = renderHook(() => useHeaderScroll({ enableHide: true }));

    act(() => {
      // First scroll
      window.scrollY = 50;
      window.dispatchEvent(new Event('scroll'));
    });

    act(() => {
      // Scroll past 100px
      window.scrollY = 150;
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current.isHidden).toBe(true);
  });
});
