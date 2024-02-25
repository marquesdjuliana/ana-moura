import Footer from "../../components/Footer";
import Header from "../../components/Header";
import WhatsAppIcon from "../../components/WhatsAppIcon";



const Home: React.FC = () => {
  return (
    <div>
      <Header/>
      <h2>Bem-vindo à página inicial!</h2>
      <p> -conteúdo- </p>
      <WhatsAppIcon/>
      <Footer/>
    </div>
  );
};
export default Home;
