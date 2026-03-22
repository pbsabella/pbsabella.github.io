import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Callout from '@/components/ui/Callout/Callout';

describe('Callout Component', () => {
  it('renders children', () => {
    render(<Callout>Body content</Callout>);

    expect(screen.getByText('Body content')).toBeInTheDocument();
  });

  it('renders as <aside> by default', () => {
    render(<Callout>Content</Callout>);

    expect(screen.getByRole('complementary')).toBeInTheDocument();
  });

  it('renders label when provided', () => {
    render(<Callout label="TL;DR">Content</Callout>);

    expect(screen.getByText('TL;DR')).toBeInTheDocument();
  });

  it('renders actions when provided', () => {
    render(
      <Callout actions={<button>View prototype</button>}>Content</Callout>,
    );

    expect(screen.getByRole('button', { name: 'View prototype' })).toBeInTheDocument();
  });

  it('renders with a custom element via as prop', () => {
    render(<Callout as="blockquote">Quoted content</Callout>);

    expect(screen.getByRole('blockquote')).toBeInTheDocument();
  });

  it('forwards className to the root element', () => {
    render(<Callout className="custom-class">Content</Callout>);

    expect(screen.getByRole('complementary').className).toMatch(/custom-class/);
  });
});
