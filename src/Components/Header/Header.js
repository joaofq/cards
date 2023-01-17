import './header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1 className="header__logo">Cards </h1>
      <nav className="header__navbar">
        <NavLink to="home" className="navigation__bar_link">
          Início
        </NavLink>
        <NavLink to="contato" className="navigation__bar_link">
          Contato
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
