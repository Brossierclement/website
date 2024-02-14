import { useState } from "react";
import "../header/header.scss";
function Header() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };
  return (
    <header className="header">
      <div className="topbar">
        <img src="/images/dungeon.svg" alt="logo du site" className="logo" />
        <nav className="navigation-desktop">
          <a href="#home">Accueil</a>
          <a href="#projects">Projets</a>
          <a href="#">À propos</a>
          <a href="#">Contact</a>
        </nav>
        <div className="contaimer-navigation-mobile">
          <button
            className={`menu ${isActive ? "menu-active" : ""}`}
            onClick={handleClick}
          >
            <span className="bar"></span>
          </button>
        </div>
      </div>
      <nav
        className={`navigation-mobile ${
          isActive ? "navigation-mobile-active" : ""
        }`}
      >
        <a href="#home">Acceuil</a>
        <a href="#projects">Projets</a>
        <a href="#">À propos</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}
export default Header;
