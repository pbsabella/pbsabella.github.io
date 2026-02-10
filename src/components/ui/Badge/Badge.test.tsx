import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Badge from './Badge';

describe('Badge Component', () => {
  it('renders children correctly for md badge', () => {
    render(<Badge variant="success" size="md">3</Badge>);
    const badge = screen.getByText('3');

    expect(badge).toHaveTextContent('3');
    expect(badge.className).toMatch(/badge/);
    expect(badge.className).toMatch(/badgeSuccess/);
    expect(badge.className).toMatch(/badgeMd/);
  });

  it('renders children correctly for lg badge', () => {
    render(<Badge variant="error" size="lg">99+</Badge>);
    const badge = screen.getByText('99+');

    expect(badge).toHaveTextContent('99+');
    expect(badge.className).toMatch(/badge/);
    expect(badge.className).toMatch(/badgeError/);
    expect(badge.className).toMatch(/badgeLg/);
  });

  it('renders sm badge as decorative dot without text', () => {
    render(<Badge variant="info" size="sm" data-testid="badge-dot" />);
    const badge = screen.getByTestId('badge-dot');

    expect(badge).toBeInTheDocument();
    expect(badge).toBeEmptyDOMElement();
    expect(badge.className).toMatch(/badge/);
    expect(badge.className).toMatch(/badgeInfo/);
    expect(badge.className).toMatch(/badgeSm/);
  });

});
