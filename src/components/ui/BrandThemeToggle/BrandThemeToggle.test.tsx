import { render, screen, fireEvent, within } from '@testing-library/react';
import { beforeEach, describe, it, expect, vi } from 'vitest';
import BrandThemeToggle from '@/components/ui/BrandThemeToggle/BrandThemeToggle';
import { ThemeProvider } from '@context/ThemeContext';
import { BrandProvider } from '@/context/BrandContext';
import { BRAND_PRESETS } from '@/content/themingBuildNotes';

// useFloatingPosition relies on getBoundingClientRect / viewport geometry
// which is unavailable in jsdom. Mock it to return a stable position so the
// dropdown renders fully visible instead of visibility:hidden.
vi.mock('@/hooks/useFloatingPosition', () => ({
  useFloatingPosition: () => ({
    triggerRef: { current: null },
    dropdownPos: { top: 100, right: 0, maxHeight: 300 },
  }),
}));

const renderToggle = () =>
  render(
    <ThemeProvider>
      <BrandProvider>
        <BrandThemeToggle id="test-toggle" />
      </BrandProvider>
    </ThemeProvider>,
  );

describe('BrandThemeToggle Component', () => {
  beforeEach(() => {
    localStorage.removeItem('theme');
    document.body.setAttribute('data-theme', 'light');
    document.documentElement.removeAttribute('data-brand');
  });

  // ── Trigger button ──────────────────────────────────────────────────────

  it('renders a button users can find by its descriptive label', () => {
    renderToggle();

    // The label encodes the active brand + theme, e.g. "Default brand, light theme — open settings"
    expect(screen.getByRole('button', { name: /open settings/i })).toBeInTheDocument();
  });

  it('starts collapsed (aria-expanded="false")', () => {
    renderToggle();

    expect(screen.getByRole('button', { name: /open settings/i })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
  });

  // FIXME (a11y): aria-haspopup is set to "true", which implies a menu popup.
  // Because the component opens a role="dialog", this should be aria-haspopup="dialog"
  // so screenreaders announce the correct popup type.
  it('documents current aria-haspopup value (should be "dialog", not "true")', () => {
    renderToggle();
    const trigger = screen.getByRole('button', { name: /open settings/i });

    // Current (incorrect) value — update this assertion once the component is fixed.
    expect(trigger).toHaveAttribute('aria-haspopup', 'true');
  });

  // ── Dropdown dialog ─────────────────────────────────────────────────────

  it('opens a labeled settings dialog when the user clicks the trigger', () => {
    renderToggle();

    fireEvent.click(screen.getByRole('button', { name: /open settings/i }));

    expect(screen.getByRole('dialog', { name: /brand and theme settings/i })).toBeInTheDocument();
  });

  it('sets aria-expanded="true" on the trigger while the dialog is open', () => {
    renderToggle();

    fireEvent.click(screen.getByRole('button', { name: /open settings/i }));

    expect(screen.getByRole('button', { name: /open settings/i })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
  });

  // ── Color mode ──────────────────────────────────────────────────────────

  it('exposes the color mode choices as a labelled group', () => {
    renderToggle();
    fireEvent.click(screen.getByRole('button', { name: /open settings/i }));

    expect(screen.getByRole('group', { name: /color mode/i })).toBeInTheDocument();
  });

  it('shows Light as pressed by default (theme starts as light)', () => {
    renderToggle();
    fireEvent.click(screen.getByRole('button', { name: /open settings/i }));
    const dialog = screen.getByRole('dialog');

    expect(within(dialog).getByRole('button', { name: /^light$/i })).toHaveAttribute('aria-pressed', 'true');
    expect(within(dialog).getByRole('button', { name: /^dark$/i })).toHaveAttribute('aria-pressed', 'false');
  });

  it('switches pressed state when the user selects Dark', () => {
    renderToggle();
    fireEvent.click(screen.getByRole('button', { name: /open settings/i }));
    const dialog = screen.getByRole('dialog');
    fireEvent.click(within(dialog).getByRole('button', { name: /^dark$/i }));

    expect(within(dialog).getByRole('button', { name: /^dark$/i })).toHaveAttribute('aria-pressed', 'true');
    expect(within(dialog).getByRole('button', { name: /^light$/i })).toHaveAttribute('aria-pressed', 'false');
  });

  // ── Brand identity list ─────────────────────────────────────────────────

  it('exposes brand choices as a labelled listbox', () => {
    renderToggle();
    fireEvent.click(screen.getByRole('button', { name: /open settings/i }));

    expect(screen.getByRole('listbox', { name: /brand identity/i })).toBeInTheDocument();
  });

  it('renders all brand presets as options', () => {
    renderToggle();
    fireEvent.click(screen.getByRole('button', { name: /open settings/i }));

    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(BRAND_PRESETS.length);
  });

  it('marks the default brand (portfolio / "Default") as selected on first render', () => {
    renderToggle();
    fireEvent.click(screen.getByRole('button', { name: /open settings/i }));

    const defaultOption = screen.getByRole('option', { name: /default/i });
    expect(defaultOption).toHaveAttribute('aria-selected', 'true');
  });

  it('closes the dropdown after the user picks a different brand', () => {
    renderToggle();
    fireEvent.click(screen.getByRole('button', { name: /open settings/i }));
    fireEvent.click(screen.getByRole('button', { name: /fintech/i }));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  // FIXME (a11y): Each brand <li role="option"> contains a <button> child.
  // Nesting interactive elements inside listbox options is an ARIA anti-pattern.
  // Screenreaders may double-announce the item or fail to expose the button at
  // all. The pattern should switch to role="menu" + role="menuitemradio", or the
  // <button> should be removed and the <li> itself made interactive.
  it('documents the nested button-inside-option pattern (known a11y issue)', () => {
    renderToggle();
    fireEvent.click(screen.getByRole('button', { name: /open settings/i }));

    // Each option currently wraps a button — verify the structure is present
    // so a future refactor can update both the component and this test together.
    const options = screen.getAllByRole('option');
    options.forEach((option) => {
      expect(option.querySelector('button')).not.toBeNull();
    });
  });
});
