import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Button from '@/components/ui/Button/Button';

describe('Button Component', () => {
  it('renders children', () => {
    render(<Button>Click</Button>);
    expect(screen.getByRole('button', { name: /click/i })).toBeInTheDocument();
  });

  it('defaults to type button', () => {
    render(<Button>Save</Button>);
    expect(screen.getByRole('button', { name: /save/i })).toHaveAttribute('type', 'button');
  });

  it('applies variant class', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByRole('button', { name: /secondary/i });
    expect(button.className).toMatch(/buttonSecondary/);
  });

  it('forwards native button props', () => {
    render(
      <Button disabled={true} aria-label="Submit form">
        Submit
      </Button>,
    );
    const button = screen.getByRole('button', { name: 'Submit form' });
    expect(button).toBeDisabled();
  });
});
