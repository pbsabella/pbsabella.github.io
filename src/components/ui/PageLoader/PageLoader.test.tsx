import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PageLoader from '@/components/ui/PageLoader/PageLoader';

describe('PageLoader Component', () => {
  it('announces a loading state to screen readers via role="status"', () => {
    render(<PageLoader />);

    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('has an accessible label so the status region is self-describing', () => {
    render(<PageLoader />);

    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Loading page');
  });

  it('provides a visible-to-screen-readers loading message', () => {
    render(<PageLoader />);

    // The sr-only span gives screen readers a spoken announcement even
    // though the Skeleton placeholders themselves are aria-hidden.
    expect(screen.getByText('Loading…')).toBeInTheDocument();
  });

  it('keeps decorative skeleton elements out of the accessibility tree', () => {
    const { container } = render(<PageLoader />);
    const skeletons = container.querySelectorAll('[aria-hidden="true"]');

    expect(skeletons.length).toBeGreaterThan(0);
  });
});
