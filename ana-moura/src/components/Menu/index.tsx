import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu}>☰</button>
      {isOpen && (
        <nav>
          <ul>
            <li>
              <NavLink to="/" onClick={toggleMenu}>
                Página inicial
              </NavLink>
            </li>
            <li>
              <NavLink to="/sobre" onClick={toggleMenu}>
                Sobre
              </NavLink>
            </li>
            <li>
              <NavLink to="/arteterapia" onClick={toggleMenu}>
                Arteterapia
              </NavLink>
            </li>
            <li>
              <NavLink to="/contato" onClick={toggleMenu}>
                Contato
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Menu;
