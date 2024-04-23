import styles from "./style.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Bio from "../../components/Bio";
import PhotoCarousel from "../../components/PhotoCarousel";

const Home = () => {

  const images = ["art.png", "collage.png", "collective.png", "magazine.png", "materials.png", "meeting.png", "metaphor.png", "mosaic.png"];


  return (
    <div className={styles.homeContainer}>
      <Header />
      <section>
        <h2>Seja bem-vinda(o)</h2>
        <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </section>
      <Bio />
      <PhotoCarousel images={images}/>
      <section>
        <h3>RevelArte</h3>
        <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <button>Método RevelArte</button>
      </section>
      <Footer />
    </div>
  );
};
export default Home;
