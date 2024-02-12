import { useState } from "react";
import "../header/header.scss";
function Header() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };
  return (
    <header className="header">
      <img src="/images/donjon.svg" alt="logo du site" className="logo" />
      <nav className="navigation-desktop">
        <a href="#">Projets</a>
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
        <nav
          className={`navigation-mobile ${
            isActive ? "navigation-mobile-active" : ""
          }`}
        >
          <a href="#">Projets</a>
          <a href="#">À propos</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
}
export default Header;
