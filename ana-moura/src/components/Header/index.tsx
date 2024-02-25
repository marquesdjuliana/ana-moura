import styles from "./style.module.css";
import Menu from "../Menu";

const Header: React.FC = () => {
  return (
    <header className={styles.headerContainer}>
      <h1>NOME DO SITE</h1>
      <Menu />
    </header>
  );
};

export default Header;
