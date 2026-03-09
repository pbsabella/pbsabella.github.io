import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FigureBlock from './FigureBlock';

describe('FigureBlock', () => {
  it('renders children inside a figure element', () => {
    render(
      <FigureBlock caption="Test caption">
        <img src="test.png" alt="test" />
      </FigureBlock>
    );
    expect(screen.getByRole('figure')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'test' })).toBeInTheDocument();
  });

  it('renders caption as figcaption', () => {
    render(
      <FigureBlock caption="Figure 1. A test figure.">
        <div>content</div>
      </FigureBlock>
    );
    const figcaption = screen.getByText('Figure 1. A test figure.');
    expect(figcaption.tagName).toBe('FIGCAPTION');
  });

  it('renders label when provided', () => {
    render(
      <FigureBlock caption="Caption" label="Figure 1.">
        <div>content</div>
      </FigureBlock>
    );
    expect(screen.getByText('Figure 1.')).toBeInTheDocument();
  });

  it('renders placeholder div when variant is set and no children', () => {
    const { container } = render(
      <FigureBlock caption="Caption" variant="placeholder-muted" />
    );
    const figure = container.querySelector('figure');
    expect(figure).toBeInTheDocument();
    // placeholder div exists inside the figure
    expect(figure?.querySelector('div')).toBeInTheDocument();
  });

  it('renders children instead of placeholder when both are provided', () => {
    render(
      <FigureBlock caption="Caption" variant="placeholder-muted">
        <span data-testid="real-content">actual</span>
      </FigureBlock>
    );
    expect(screen.getByTestId('real-content')).toBeInTheDocument();
  });

  it('applies className to the figure element', () => {
    const { container } = render(
      <FigureBlock caption="Caption" className="customClass">
        <div>content</div>
      </FigureBlock>
    );
    expect(container.querySelector('figure')).toHaveClass('customClass');
  });
});
