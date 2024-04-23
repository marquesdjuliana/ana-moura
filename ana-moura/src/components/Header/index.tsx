import styles from "./style.module.css";
import Menu from "../Menu";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <h1>Ana Moura</h1>
      <Menu />
    </header>
  );
};

export default Header;
