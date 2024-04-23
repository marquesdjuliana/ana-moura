import Bio from "../../components/Bio";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const About = () => {
  return (
    <div>
      <Header />
      <Bio />
      <section>
        <h2>Psicologia</h2>
        <p>0000-0000</p>
        <p>Universidade</p>
        <p>Briefly describe your degree and any other highlights about your studies you want to share. Be sure to include relevant skills you gained, accomplishments you achieved or milestones you reached during your education.</p>
      </section>
      <section>
        <h2>Especialização</h2>
        <p>0000-0000</p>
        <p>Universidade</p>
        <p>Briefly describe your degree and any other highlights about your studies you want to share. Be sure to include relevant skills you gained, accomplishments you achieved or milestones you reached during your education.</p>
      </section>
      <p>CRP - 00/000000</p>
      <Footer />
    </div>
  );
};

export default About;
