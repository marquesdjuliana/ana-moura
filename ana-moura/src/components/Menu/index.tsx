import { Link } from "react-router-dom";

const Menu = () => {
  return(
    <div>
      <nav>
        <Link to="/">Página inicial</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/arteterapia">Arteterapia</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/psicoterapia">Psicoterapia</Link>
      </nav>
    </div>
  )
}

export default Menu;