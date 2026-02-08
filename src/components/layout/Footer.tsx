import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.footerCopyright}>
        &copy; {new Date().getFullYear()} <b>pbsabella</b>.
      </span>
    </footer>
  );
};

export default Footer;
