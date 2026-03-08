import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MockupFrame from './MockupFrame';

describe('MockupFrame', () => {
  it('renders children in the body', () => {
    render(
      <MockupFrame>
        <p>demo content</p>
      </MockupFrame>
    );
    expect(screen.getByText('demo content')).toBeInTheDocument();
  });

  it('renders browser traffic-light dots by default', () => {
    const { container } = render(
      <MockupFrame variant="browser">
        <p>content</p>
      </MockupFrame>
    );
    const dotsContainer = container.querySelector('[aria-hidden="true"]');
    expect(dotsContainer).toBeInTheDocument();
    expect(dotsContainer?.querySelectorAll('span')).toHaveLength(3);
  });

  it('renders headerContent when provided', () => {
    render(
      <MockupFrame headerContent={<span>Title Bar</span>}>
        <p>content</p>
      </MockupFrame>
    );
    expect(screen.getByText('Title Bar')).toBeInTheDocument();
  });

  it('applies className to the frame element', () => {
    const { container } = render(
      <MockupFrame className="customFrame">
        <p>content</p>
      </MockupFrame>
    );
    expect(container.firstChild).toHaveClass('customFrame');
  });
});
