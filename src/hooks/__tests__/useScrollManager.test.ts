import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { useScrollManager } from '../useScrollManager';

describe('useScrollManager Hook', () => {
  beforeEach(() => {
    // Reset scroll position before each test
    window.pageYOffset = 0;
    document.documentElement.scrollTop = 0;
  });

  it('initializes as transparent and not hidden', () => {
    const { result } = renderHook(() => useScrollManager());
    expect(result.current.isTransparent).toBe(true);
    expect(result.current.isHidden).toBe(false);
  });

  it('becomes non-transparent when scrolling down', () => {
    const { result } = renderHook(() => useScrollManager());

    act(() => {
      // Simulate scroll down
      window.pageYOffset = 50;
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current.isTransparent).toBe(false);
    expect(result.current.isHidden).toBe(false);
  });

  it('becomes hidden when scrolling down past 100px', () => {
    const { result } = renderHook(() => useScrollManager());

    act(() => {
      // First scroll
      window.pageYOffset = 50;
      window.dispatchEvent(new Event('scroll'));
    });

    act(() => {
      // Scroll past 100px
      window.pageYOffset = 150;
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current.isHidden).toBe(true);
  });
});
