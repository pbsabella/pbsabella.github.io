import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi, describe, it, expect, beforeEach, MockedFunction } from 'vitest';
import { useHeaderScroll } from '@hooks/useHeaderScroll';
import { ROUTES } from '@constants/routes';
import Header from '../Header';

vi.mock('@hooks/useHeaderScroll', () => ({
  useHeaderScroll: vi.fn(() => ({ isHidden: false, isTransparent: false })),
}));

vi.mock('@hooks/useScrollToSection', () => ({
  useScrollToSection: vi.fn(() => vi.fn()),
}));

vi.mock('@components/ui/ThemeToggle', () => ({
  default: ({ id }: { id: string }) => <div data-testid={`theme-toggle-${id}`} />,
}));

const renderHeader = (props = { toggleSideNav: vi.fn() }, initialEntries = ['/']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <Header {...props} />
    </MemoryRouter>
  );
};

const mockedUseHeaderScroll = useHeaderScroll as MockedFunction<typeof useHeaderScroll>;

describe('Header', () => {
  const mockToggleSideNav = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the default brand logo on the home page', () => {
    renderHeader({ toggleSideNav: mockToggleSideNav });

    expect(screen.getByRole('link', { name: 'pbsabella' })).toBeVisible();
    expect(screen.getByRole('link', { name: /labs/i })).toBeVisible();
    expect(screen.getByRole('link', { name: /work/i })).toBeVisible();
    expect(screen.getByRole('link', { name: /about/i })).toBeVisible();
    expect(screen.getByRole('link', { name: /contact/i })).toBeVisible();
  });

  it('renders the "Back" link when in the lab environment', () => {
    renderHeader({ toggleSideNav: mockToggleSideNav }, [ROUTES.LABS]);

    expect(screen.getByRole('link', { name: /back/i })).toBeVisible();
  });

  it('navigates to Labs if on a deep system core page', () => {
    renderHeader({ toggleSideNav: mockToggleSideNav }, [ROUTES.SYSTEM_CORE]);

    const backLink = screen.getByRole('link', { name: /back/i });
    expect(backLink.getAttribute('href')).toBe(ROUTES.LABS);
  });

  it('calls toggleSideNav when the menu button is clicked', () => {
    renderHeader({ toggleSideNav: mockToggleSideNav });

    const menuButton = screen.getByLabelText(/open mobile menu/i);
    fireEvent.click(menuButton);
    expect(mockToggleSideNav).toHaveBeenCalledTimes(1);
  });

  it('hides navigation links when in lab environment', () => {
    renderHeader({ toggleSideNav: mockToggleSideNav }, [ROUTES.LABS]);

    expect(screen.queryByRole('link', { name: /labs/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /work/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /about/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /contact/i })).not.toBeInTheDocument();
  });

  it('applies transparent class when isTransparent is true', async () => {
    mockedUseHeaderScroll.mockReturnValue({ isHidden: false, isTransparent: true });
    renderHeader();

    const headerElement = screen.getByRole('banner');
    expect(headerElement.className).toContain('headerTransparent');
  });

  it('applies hidden class when isHidden is true', async () => {
    mockedUseHeaderScroll.mockReturnValue({ isHidden: true, isTransparent: false });
    renderHeader();

    const headerElement = screen.getByRole('banner');
    expect(headerElement.className).toContain('headerHidden');
  });
});
