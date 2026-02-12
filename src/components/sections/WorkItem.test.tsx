import { render, screen, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import WorkItem from '@/components/sections/WorkItem';

describe('WorkItem', () => {
  it('renders semantic project metadata and tags', () => {
    render(
      <WorkItem
        image="/mock-image.png"
        imageAlt="Mock project preview"
        title="Mock Project"
        company="Mock Company"
        period="Jan 2024 - Present"
        position="Senior Frontend Engineer"
        description={['First point', 'Second point']}
        tags={['React', 'TypeScript']}
      />
    );

    const article = screen.getByRole('article');
    expect(article).toHaveAttribute('data-media-preset', 'default');
    expect(screen.getByText('Mock Company')).toBeInTheDocument();
    expect(screen.getByText('Jan 2024 - Present')).toBeInTheDocument();
    expect(screen.getByText('Senior Frontend Engineer')).toBeInTheDocument();
    expect(screen.getByAltText('Mock project preview')).toBeInTheDocument();

    const tagsList = screen.getByRole('list', { name: /project technologies/i });
    const items = within(tagsList).getAllByRole('listitem');
    expect(items).toHaveLength(2);
  });

  it('applies media preset metadata for specialized image treatments', () => {
    render(
      <WorkItem
        image="/mock-image.png"
        title="Notifications"
        company="Mock Company"
        position="Engineer"
        description={['Single point']}
        tags={['Vue']}
        mediaPreset="notifications"
      />
    );

    const article = screen.getByRole('article');
    expect(article).toHaveAttribute('data-media-preset', 'notifications');
  });
});
