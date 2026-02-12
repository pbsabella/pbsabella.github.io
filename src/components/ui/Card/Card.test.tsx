import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Card from '@/components/ui/Card/Card';

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Content</Card>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('applies default elevated and tone classes', () => {
    render(<Card>Default</Card>);
    const card = screen.getByText('Default').closest('div');
    expect(card?.className).toMatch(/card/);
    expect(card?.className).toMatch(/cardElevated/);
    expect(card?.className).not.toMatch(/cardToneDashed/);
  });

  it('applies flat variant and dashed tone classes', () => {
    render(
      <Card variant="flat" tone="dashed">
        Flat Dashed
      </Card>,
    );
    const card = screen.getByText('Flat Dashed').closest('div');
    expect(card?.className).toMatch(/cardFlat/);
    expect(card?.className).toMatch(/cardToneDashed/);
  });

  it('applies interactive class when isInteractive is true', () => {
    render(<Card isInteractive={true}>Interactive</Card>);
    const card = screen.getByText('Interactive').closest('div');
    expect(card?.className).toMatch(/cardInteractive/);
  });

  it('renders as provided element type', () => {
    render(<Card as="article">Article card</Card>);
    expect(screen.getByText('Article card').closest('article')).toBeInTheDocument();
  });
});
