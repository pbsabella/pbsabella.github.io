import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Tag from '@/components/ui/Tag/Tag';

describe('Tag Component', () => {
  it('renders children correctly', () => {
    render(<Tag>React</Tag>);
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('applies variant and size classes', () => {
    render(
      <Tag variant="success" size="sm">
        Success
      </Tag>,
    );
    const tag = screen.getByText('Success');
    expect(tag.className).toMatch(/tag/);
    expect(tag.className).toMatch(/tagSuccess/);
    expect(tag.className).toMatch(/tagSm/);
  });

  it('merges custom className and forwards native attributes', () => {
    render(
      <Tag className="custom-tag" title="Tag title" data-testid="tag">
        CSS
      </Tag>,
    );
    const tag = screen.getByTestId('tag');
    expect(tag).toHaveClass('custom-tag');
    expect(tag).toHaveAttribute('title', 'Tag title');
  });
});
