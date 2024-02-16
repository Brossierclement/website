import { useState } from "react";
import { Link } from "react-router-dom";
import "../header/header.scss";
function Header() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };
  return (
    <header className="header">
      <nav className="nav-header">
        <Link className="home-return" to={"/"}>
          L'Antre du Marteau
        </Link>
        <button
          className={`btn-nav-header ${
            isActive ? "btn-nav-header-active" : ""
          }`}
          onClick={handleClick}
        >
          <span className="central-bar"></span>
        </button>
        <nav className="nav-menu-header-desktop">
          <a href="#home">Accueil</a>
          <a href="#projects">Projets</a>
          <a href="#about">À propos</a>
          <a href="#contact">Contact</a>
        </nav>
      </nav>
      <nav
        className={`nav-menu-header ${
          isActive ? "nav-menu-header-active" : ""
        }`}
      >
        <a href="#home">Accueil</a>
        <a href="#projects">Projets</a>
        <a href="#about">À propos</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
export default Header;
