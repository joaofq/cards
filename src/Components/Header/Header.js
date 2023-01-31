import './header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1 className="header__logo">Cards</h1>
      <nav className="header__navbar">
        <NavLink to="about" className="navigation__bar_link">
          About
        </NavLink>
        <NavLink to="/" className="navigation__bar_link">
          Game
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
