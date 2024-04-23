import styles from "./style.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppIcon from "../../components/WhatsAppIcon";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <h2>Bem-vindo à página inicial!</h2>
      <p> -conteúdo- </p>
      <WhatsAppIcon />
      <Footer />
    </div>
  );
};
export default Home;
