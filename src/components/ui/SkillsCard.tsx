import styles from './SkillsCard.module.css';

interface SkillsCardProps {
  title: string;
  skills: string[];
  className?: string;
}

const SkillsCard = ({ title, skills, className = '' }: SkillsCardProps) => {
  return (
    <div className={`${styles.skillsCard} ${className}`}>
      <h4 className={styles.skillsCardTitle}>{title}</h4>
      <ul className={styles.skillsCardList}>
        {skills.map((skill, index) => (
          <li key={index} className={styles.skillsCardItem}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default SkillsCard;
