import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Alert from './Alert';

describe('Alert Component', () => {
  it('renders with role alert', () => {
    render(<Alert>Message</Alert>);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('renders title when provided', () => {
    render(<Alert title="Notice">Message</Alert>);
    expect(screen.getByText('Notice')).toBeInTheDocument();
  });

  it('applies variant class', () => {
    render(<Alert variant="warning">Message</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert.className).toMatch(/warning/);
  });
});
