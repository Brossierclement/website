import { useState } from "react";
import "./header/header.scss";
function Header() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  return (
    <header className="header">
      <div className="top-bar">
        <nav className="back-home">
          <a href="#">Clément Brossier</a>
        </nav>
        <div className="navigation">
          <button className="menu" onClick={handleClick}>
            <div className="bar-container">
              <span className="bar bar-one"></span>
              <span className="bar bar-two"></span>
              <span className="bar bar-three"></span>
            </div>
          </button>
        </div>
      </div>
      <nav className={`menu-info ${isActive ? "menu-info-active" : ""}`}>
        <ul>
          <li>Accueil</li>
          <li>À propos</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
