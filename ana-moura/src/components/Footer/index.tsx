import styles from "./style.module.css";
import InstagramIcon from "../InstagramIcon";
import WhatsAppIcon from "../WhatsAppIcon";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <h1>Footer</h1>
      <WhatsAppIcon />
      <InstagramIcon />
    </footer>
  );
};

export default Footer;
