import styles from "./Header.module.scss";

const Header = ({className}) => (
  <header className={`${className} ${styles.main_header}`}>
    <h2>Site name</h2>
  </header>
);

export default Header;