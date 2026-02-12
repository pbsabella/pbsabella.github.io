import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import SystemCore from '@/pages/system-core/SystemCore';

describe('SystemCore page', () => {
  it('renders the page heading and token tables', () => {
    render(
      <MemoryRouter>
        <SystemCore />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /system core/i })).toBeInTheDocument();
    expect(screen.getAllByRole('table').length).toBeGreaterThan(0);
  });
});
