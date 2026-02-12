import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Table from '@/components/ui/Table/Table';

describe('Table Component', () => {
  it('renders a table with columns and rows', () => {
    render(
      <Table
        label="Token table"
        stacked={false}
        columns={[
          { label: 'Token' },
          { label: 'Value' },
        ]}
        rows={[
          ['--sem-color-bg-base', '#ffffff'],
          ['--sem-color-text-primary', '#111827'],
        ]}
      />
    );

    expect(screen.getByRole('table', { name: 'Token table' })).toBeInTheDocument();
    expect(screen.getAllByRole('columnheader')).toHaveLength(2);
    expect(screen.getAllByRole('row')).toHaveLength(3);
  });

  it('renders a caption when provided', () => {
    render(
      <Table
        caption="Semantic tokens"
        stacked={false}
        columns={[
          { label: 'Token' },
          { label: 'Value' },
        ]}
        rows={[['--sem-color-bg-base', '#ffffff']]}
      />
    );

    expect(screen.getByText('Semantic tokens')).toBeInTheDocument();
    expect(screen.getByRole('table')).not.toHaveAttribute('aria-label');
  });

  it('applies a variant class', () => {
    render(
      <Table
        label="Striped table"
        variant="striped"
        stacked={false}
        columns={[
          { label: 'Token' },
          { label: 'Value' },
        ]}
        rows={[['--sem-color-bg-base', '#ffffff']]}
      />
    );

    const table = screen.getByRole('table', { name: 'Striped table' });
    expect(table.className).toMatch(/tableStriped/);
  });

  it('renders custom column header content', () => {
    render(
      <Table
        label="Header table"
        stacked={false}
        columns={[
          { label: 'Token', header: <span>Design Token</span> },
          { label: 'Value' },
        ]}
        rows={[['--sem-color-bg-base', '#ffffff']]}
      />
    );

    expect(screen.getByRole('columnheader', { name: 'Design Token' })).toBeInTheDocument();
  });

  it('maps stacked cell data-label from column labels', () => {
    render(
      <Table
        label="Stacked table"
        stacked={true}
        columns={[
          { label: 'Token' },
          { label: 'Value' },
        ]}
        rows={[['--sem-color-bg-base', '#ffffff']]}
      />
    );

    expect(screen.getByText('--sem-color-bg-base').closest('td')).toHaveAttribute('data-label', 'Token');
    expect(screen.getByText('#ffffff').closest('td')).toHaveAttribute('data-label', 'Value');
  });
});
