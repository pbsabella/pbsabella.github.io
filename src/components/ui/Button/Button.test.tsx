import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Button from './Button';

describe('Button Component', () => {
  it('renders children', () => {
    render(<Button>Click</Button>);
    expect(screen.getByRole('button', { name: /click/i })).toBeInTheDocument();
  });

  it('applies variant class', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByRole('button', { name: /secondary/i });
    expect(button.className).toMatch(/buttonSecondary/);
  });
});
