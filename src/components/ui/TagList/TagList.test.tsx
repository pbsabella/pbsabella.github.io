import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TagList from '@/components/ui/TagList/TagList';

describe('TagList Component', () => {
  const tags = ['React', 'TypeScript', 'Vite'];

  it('renders all tags', () => {
    render(<TagList tags={tags} />);

    tags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });

  it('uses default aria-label', () => {
    render(<TagList tags={tags} />);

    expect(screen.getByRole('list', { name: 'Tags' })).toBeInTheDocument();
  });

  it('uses custom aria-label when provided', () => {
    render(<TagList tags={tags} label="Project technologies" />);

    expect(screen.getByRole('list', { name: 'Project technologies' })).toBeInTheDocument();
  });

  it('renders nothing when tags array is empty', () => {
    render(<TagList tags={[]} />);

    expect(screen.getByRole('list')).toBeEmptyDOMElement();
  });
});
