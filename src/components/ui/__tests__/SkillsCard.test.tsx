import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SkillsCard from '../SkillsCard';

describe('SkillsCard Component', () => {
  const mockSkills = ['TypeScript', 'React', 'Vitest'];
  const mockTitle = 'Frontend Stack';

  it('renders the title correctly', () => {
    render(<SkillsCard title={mockTitle} skills={mockSkills} />);
    expect(screen.getByText(mockTitle)).toBeInTheDocument();
  });

  it('renders all skills in the list', () => {
    render(<SkillsCard title={mockTitle} skills={mockSkills} />);
    mockSkills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  it('applies custom className if provided', () => {
    const customClass = 'custom-card-class';
    const { container } = render(
      <SkillsCard title={mockTitle} skills={mockSkills} className={customClass} />
    );
    expect(container.firstChild).toHaveClass(customClass);
  });
});
