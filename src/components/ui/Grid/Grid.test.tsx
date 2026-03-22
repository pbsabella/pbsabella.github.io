import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Grid from '@/components/ui/Grid/Grid';

describe('Grid Component', () => {
  // Helper: the inner grid element (firstChild is the container wrapper)
  const gridEl = (container: HTMLElement) =>
    container.firstChild!.firstChild as HTMLElement;

  it('renders children', () => {
    render(
      <Grid>
        <div>Item 1</div>
        <div>Item 2</div>
      </Grid>,
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('renders as <div> by default', () => {
    const { container } = render(<Grid>Content</Grid>);

    expect(gridEl(container).nodeName).toBe('DIV');
  });

  it('sets default CSS variable for cols', () => {
    const { container } = render(<Grid>Content</Grid>);
    const el = gridEl(container);

    expect(el.style.getPropertyValue('--cols')).toBe('1');
  });

  it('sets --cols CSS variable', () => {
    const { container } = render(<Grid cols={3}>Content</Grid>);

    expect(gridEl(container).style.getPropertyValue('--cols')).toBe('3');
  });

  it('sets --cols-sm CSS variable', () => {
    const { container } = render(<Grid colsSm={2}>Content</Grid>);

    expect(gridEl(container).style.getPropertyValue('--cols-sm')).toBe('2');
  });

  it('sets --cols-md and --cols-lg CSS variables', () => {
    const { container } = render(<Grid colsMd={2} colsLg={4}>Content</Grid>);
    const el = gridEl(container);

    expect(el.style.getPropertyValue('--cols-md')).toBe('2');
    expect(el.style.getPropertyValue('--cols-lg')).toBe('4');
  });

  it('sets data-cols-sm="auto" for auto variant', () => {
    const { container } = render(<Grid colsSm="auto">Content</Grid>);
    const el = gridEl(container);

    expect(el.dataset.colsSm).toBe('auto');
    expect(el.style.getPropertyValue('--cols-sm')).toBe('');
  });

  it('sets gap data attribute', () => {
    const { container } = render(<Grid gap="lg">Content</Grid>);

    expect(gridEl(container).dataset.gap).toBe('lg');
  });

  it('sets align data attribute', () => {
    const { container } = render(<Grid align="center">Content</Grid>);

    expect(gridEl(container).dataset.align).toBe('center');
  });

  it('sets reverse data attribute when reverseOnDesktop is true', () => {
    const { container } = render(<Grid reverseOnDesktop>Content</Grid>);

    expect(gridEl(container).dataset.reverse).toBe('true');
  });

  it('does not set reverse data attribute when reverseOnDesktop is false', () => {
    const { container } = render(<Grid>Content</Grid>);

    expect(gridEl(container).dataset.reverse).toBeUndefined();
  });

  it('renders with a custom element via as prop', () => {
    const { container } = render(<Grid as="ul">Content</Grid>);

    expect(gridEl(container).nodeName).toBe('UL');
  });

  it('forwards className to the root element', () => {
    const { container } = render(<Grid className="custom">Content</Grid>);

    expect(gridEl(container).className).toMatch(/custom/);
  });

  it('forwards additional HTML attributes', () => {
    const { container } = render(<Grid aria-label="Card grid">Content</Grid>);

    expect(gridEl(container).getAttribute('aria-label')).toBe('Card grid');
  });

  it('merges consumer style with CSS variables', () => {
    const { container } = render(
      <Grid cols={2} style={{ color: 'red' }}>Content</Grid>,
    );
    const el = gridEl(container);

    expect(el.style.getPropertyValue('--cols')).toBe('2');
    expect(el.style.color).toBe('red');
  });
});
