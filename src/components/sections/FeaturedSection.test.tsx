import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FeaturedSection from '@/components/sections/FeaturedSection';

describe('FeaturedSection', () => {
  it('renders header content when intro, title, or description is provided', () => {
    render(
      <FeaturedSection
        id="test-section"
        introText="intro"
        title="Section Title"
        description="Section description"
      >
        <div>Section body</div>
      </FeaturedSection>
    );

    expect(screen.getByText('intro')).toBeInTheDocument();
    expect(screen.getByText('Section Title')).toBeInTheDocument();
    expect(screen.getByText('Section description')).toBeInTheDocument();
    expect(screen.getByText('Section body')).toBeInTheDocument();
  });

  it('does not render header wrapper when header props are omitted', () => {
    render(
      <FeaturedSection>
        <div>Only body</div>
      </FeaturedSection>
    );

    expect(screen.getByText('Only body')).toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 2 })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 3 })).not.toBeInTheDocument();
  });

  it('renders children outside container when noContainer is true', () => {
    render(
      <FeaturedSection id="split" title="Split Layout" noContainer>
        <div data-testid="featured-child">Child</div>
      </FeaturedSection>
    );

    const section = document.getElementById('split');
    expect(section).toBeTruthy();
    expect(section?.children.length).toBe(2);
    expect(screen.getByText('Split Layout')).toBeInTheDocument();
    expect(screen.getByTestId('featured-child')).toBeInTheDocument();
  });
});
