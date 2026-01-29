import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerCopyright}>
          &copy; {new Date().getFullYear()} <span className={styles.textBold}>pbsabella</span>.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
