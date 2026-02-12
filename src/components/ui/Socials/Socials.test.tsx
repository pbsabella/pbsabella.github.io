import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Socials from '@/components/ui/Socials/Socials';

describe('Socials', () => {
  it('renders a social links list landmark label', () => {
    render(<Socials />);
    expect(screen.getByRole('list', { name: 'Social links' })).toBeInTheDocument();
  });

  it('renders LinkedIn link with safe external attributes', () => {
    render(<Socials />);
    const link = screen.getByRole('link', { name: 'LinkedIn (opens in a new tab)' });

    expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/pbsabella/');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('merges custom className and supports aria-label override', () => {
    render(<Socials className="custom-socials" aria-label="Contact links" />);

    const list = screen.getByRole('list', { name: 'Contact links' });
    expect(list).toHaveClass('custom-socials');
  });
});
