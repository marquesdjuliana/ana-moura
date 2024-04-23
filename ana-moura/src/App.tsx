import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ArtTherapy from './pages/ArtTherapy';
import Psychotherapy from './pages/Psychotherapy';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/arteterapia" element={<ArtTherapy />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/psicoterapia" element={<Psychotherapy />} />
      </Routes>
    </Router>
  );
};

export default App;
