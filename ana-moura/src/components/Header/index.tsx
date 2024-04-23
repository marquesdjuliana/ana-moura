import styles from "./style.module.css";
import Menu from "../Menu";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <section>
        <h1>Ana Moura</h1>
        <Menu />
      </section>
    </div>
  );
};

export default Header;
