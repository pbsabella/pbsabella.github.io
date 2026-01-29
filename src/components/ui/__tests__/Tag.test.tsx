import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Tag from '../Tag';

describe('Tag Component', () => {
  it('renders children correctly', () => {
    render(<Tag>React</Tag>);
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('applies the correct CSS class', () => {
    const { container } = render(<Tag>CSS</Tag>);
    const span = container.querySelector('span');
    // We check if it has a class starting with 'tag' since CSS Modules hash them
    expect(span?.className).toMatch(/tag/);
  });
});
