import styles from "./style.module.css";
import InstagramIcon from "../InstagramIcon";
import WhatsAppIcon from "../WhatsAppIcon";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <h1>Ana Moura Psicologa</h1>
      <p>anacarolina@armazemdedentro.com.br</p>
      <WhatsAppIcon />
      <InstagramIcon />

      <p>@2024 Ana Moura. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
