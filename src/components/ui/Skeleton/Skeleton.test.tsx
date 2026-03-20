import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Skeleton from '@/components/ui/Skeleton/Skeleton';

describe('Skeleton Component', () => {
  it('is hidden from the accessibility tree', () => {
    const { container } = render(<Skeleton />);
    const el = container.firstChild as HTMLElement;

    expect(el).toHaveAttribute('aria-hidden', 'true');
  });

  it('applies width and height as inline styles', () => {
    const { container } = render(<Skeleton width={200} height={32} />);
    const el = container.firstChild as HTMLElement;

    expect(el).toHaveStyle({ maxWidth: '200px', height: '32px' });
  });

  it('accepts string dimension values', () => {
    const { container } = render(<Skeleton width="50%" height="2rem" />);
    const el = container.firstChild as HTMLElement;

    expect(el).toHaveStyle({ maxWidth: '50%', height: '2rem' });
  });

  it('uses default dimensions when no props are given', () => {
    const { container } = render(<Skeleton />);
    const el = container.firstChild as HTMLElement;

    expect(el).toHaveStyle({ maxWidth: '100%', height: '1rem' });
  });
});
