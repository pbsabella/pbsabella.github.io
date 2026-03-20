import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import GridItem from '@/components/ui/Grid/GridItem';

describe('GridItem Component', () => {
  const itemEl = (container: HTMLElement) => container.firstChild as HTMLElement;

  it('renders children', () => {
    const { getByText } = render(<GridItem>Content</GridItem>);

    expect(getByText('Content')).toBeInTheDocument();
  });

  it('renders as <div> by default', () => {
    const { container } = render(<GridItem>Content</GridItem>);

    expect(itemEl(container).nodeName).toBe('DIV');
  });

  it('sets default --span CSS variable to 12', () => {
    const { container } = render(<GridItem>Content</GridItem>);

    expect(itemEl(container).style.getPropertyValue('--span')).toBe('12');
  });

  it('sets --span CSS variable', () => {
    const { container } = render(<GridItem span={6}>Content</GridItem>);

    expect(itemEl(container).style.getPropertyValue('--span')).toBe('6');
  });

  it('sets data-span-full for full span', () => {
    const { container } = render(<GridItem span="full">Content</GridItem>);
    const el = itemEl(container);

    expect(el.dataset.spanFull).toBe('true');
    expect(el.style.getPropertyValue('--span')).toBe('');
  });

  it('sets responsive --span CSS variables', () => {
    const { container } = render(
      <GridItem span={12} spanSm={8} spanMd={6} spanLg={4}>
        Content
      </GridItem>,
    );
    const el = itemEl(container);

    expect(el.style.getPropertyValue('--span')).toBe('12');
    expect(el.style.getPropertyValue('--span-sm')).toBe('8');
    expect(el.style.getPropertyValue('--span-md')).toBe('6');
    expect(el.style.getPropertyValue('--span-lg')).toBe('4');
  });

  it('does not set unspecified responsive span variables', () => {
    const { container } = render(<GridItem span={6}>Content</GridItem>);
    const el = itemEl(container);

    expect(el.style.getPropertyValue('--span-sm')).toBe('');
    expect(el.style.getPropertyValue('--span-md')).toBe('');
    expect(el.style.getPropertyValue('--span-lg')).toBe('');
  });

  it('sets data-span-full-md for full span at md', () => {
    const { container } = render(
      <GridItem span={12} spanMd="full">Content</GridItem>,
    );
    const el = itemEl(container);

    expect(el.dataset.spanFullMd).toBe('true');
    expect(el.style.getPropertyValue('--span-md')).toBe('');
  });

  it('renders with a custom element via as prop', () => {
    const { container } = render(<GridItem as="li">Content</GridItem>);

    expect(itemEl(container).nodeName).toBe('LI');
  });

  it('forwards className to the root element', () => {
    const { container } = render(
      <GridItem className="custom">Content</GridItem>,
    );

    expect(itemEl(container).className).toMatch(/custom/);
  });

  it('forwards additional HTML attributes', () => {
    const { container } = render(
      <GridItem aria-label="Main content">Content</GridItem>,
    );

    expect(itemEl(container).getAttribute('aria-label')).toBe('Main content');
  });

  it('merges consumer style with CSS variables', () => {
    const { container } = render(
      <GridItem span={6} style={{ color: 'red' }}>Content</GridItem>,
    );
    const el = itemEl(container);

    expect(el.style.getPropertyValue('--span')).toBe('6');
    expect(el.style.color).toBe('red');
  });
});
