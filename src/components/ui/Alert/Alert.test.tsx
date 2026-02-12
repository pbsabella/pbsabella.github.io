import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Alert from '@/components/ui/Alert/Alert';

describe('Alert Component', () => {
  it('renders with role status by default', () => {
    render(<Alert>Message</Alert>);

    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('renders title when provided and links label', () => {
    render(<Alert title="Notice">Message</Alert>);
    const alert = screen.getByRole('status');
    const title = screen.getByText('Notice');

    expect(title).toBeInTheDocument();
    expect(alert).toHaveAttribute('aria-labelledby', title.id);
  });

  it('applies variant class', () => {
    render(<Alert variant="warning">Message</Alert>);
    const alert = screen.getByRole('status');

    expect(alert.className).toMatch(/alertWarning/);
  });

  it('uses assertive alert role for error variant', () => {
    render(<Alert variant="error">Message</Alert>);
    const alert = screen.getByRole('alert');

    expect(alert).toHaveAttribute('aria-live', 'assertive');
  });

  it('honors explicit role overrides', () => {
    render(
      <Alert role="note" variant="error">
        Message
      </Alert>,
    );
    const alert = screen.getByRole('note');

    expect(alert).toHaveAttribute('aria-live', 'polite');
  });
});
