import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Badge from './Badge';

describe('Badge Component', () => {
  it('renders children correctly for md badge', () => {
    render(<Badge variant="success" size="md">3</Badge>);
    const badge = screen.getByRole('status');

    expect(badge).toHaveTextContent('3');
    expect(badge.className).toMatch(/badge/);
    expect(badge.className).toMatch(/success/);
    expect(badge.className).toMatch(/md/);
  });

  it('renders children correctly for lg badge', () => {
    render(<Badge variant="error" size="lg">99+</Badge>);
    const badge = screen.getByRole('status');

    expect(badge).toHaveTextContent('99+');
    expect(badge.className).toMatch(/badge/);
    expect(badge.className).toMatch(/error/);
    expect(badge.className).toMatch(/lg/);
  });

  it('renders sm badge as decorative dot without text', () => {
    render(<Badge variant="info" size="sm" data-testid="badge-dot" />);
    const badge = screen.getByTestId('badge-dot'); // we'll need to add this testId in component

    expect(badge).toBeInTheDocument();
    expect(badge).toBeEmptyDOMElement();
    expect(badge.className).toMatch(/badge/);
    expect(badge.className).toMatch(/info/);
    expect(badge.className).toMatch(/sm/);
  });

});
