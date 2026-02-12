import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs';

describe('Breadcrumbs', () => {
  it('renders breadcrumb landmark and current page item', () => {
    render(
      <MemoryRouter>
        <Breadcrumbs items={[{ label: 'Labs', to: '/labs' }, { label: 'Build Notes' }]} />
      </MemoryRouter>,
    );

    expect(screen.getByRole('navigation', { name: 'Breadcrumb' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Labs' })).toBeInTheDocument();
    expect(screen.getByText('Build Notes')).toHaveAttribute('aria-current', 'page');
  });

  it('uses custom aria-label when provided', () => {
    render(
      <MemoryRouter>
        <Breadcrumbs
          aria-label="Page trail"
          items={[{ label: 'Home', to: '/' }, { label: 'Labs', to: '/labs' }, { label: 'Core' }]}
        />
      </MemoryRouter>,
    );

    expect(screen.getByRole('navigation', { name: 'Page trail' })).toBeInTheDocument();
  });

  it('does not mark non-last non-link item as current page', () => {
    render(
      <MemoryRouter>
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: 'Labs' },
            { label: 'Build Notes' },
          ]}
        />
      </MemoryRouter>,
    );

    expect(screen.getByText('Labs')).not.toHaveAttribute('aria-current');
    expect(screen.getByText('Build Notes')).toHaveAttribute('aria-current', 'page');
  });

  it('renders nothing when items are empty', () => {
    const { container } = render(
      <MemoryRouter>
        <Breadcrumbs items={[]} />
      </MemoryRouter>,
    );

    expect(container).toBeEmptyDOMElement();
  });
});
