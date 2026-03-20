import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CodeBlock from '@/components/ui/CodeBlock/CodeBlock';

// MockupFrame is a visual chrome wrapper; bypass it so tests focus on
// CodeBlock's own structure and accessibility rather than the frame's layout.
vi.mock('@/components/sections/MockupFrame', () => ({
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

const SAMPLE_CODE = 'color: oklch(50% 0.2 270);';

describe('CodeBlock Component', () => {
  it('renders the code content so users can read it', () => {
    render(<CodeBlock code={SAMPLE_CODE} />);

    expect(screen.getByText(/color/)).toBeInTheDocument();
  });

  it('exposes the code as a landmark region with a default accessible name', () => {
    render(<CodeBlock code={SAMPLE_CODE} />);

    expect(screen.getByRole('region', { name: 'Code block' })).toBeInTheDocument();
  });

  it('uses the label prop as the accessible name for the region', () => {
    render(<CodeBlock code={SAMPLE_CODE} label="tokens.css" />);

    expect(screen.getByRole('region', { name: 'tokens.css' })).toBeInTheDocument();
  });

  it('is keyboard-focusable so keyboard-only users can scroll long code blocks', () => {
    render(<CodeBlock code={SAMPLE_CODE} />);

    expect(screen.getByRole('region', { name: 'Code block' })).toHaveAttribute('tabIndex', '0');
  });
});
