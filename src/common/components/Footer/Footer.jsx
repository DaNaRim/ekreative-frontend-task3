import styles from './Footer.module.scss';

const Footer = ({className}) => (
  <footer className={`${className} ${styles.main_footer}`}>
    <p>Short information about site and author</p>
  </footer>
);

export default Footer;