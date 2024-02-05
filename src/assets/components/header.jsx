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
          <button
            className={`menu ${isActive ? "menu-active" : ""}`}
            onClick={handleClick}
          >
            <div className="bar-container">
              <span
                className={`bar bar-one ${isActive ? "bar-one-active" : ""}`}
              ></span>
              <span
                className={`bar bar-two ${isActive ? "bar-two-active" : ""}`}
              ></span>
              <span
                className={`bar bar-three ${
                  isActive ? "bar-three-active" : ""
                }`}
              ></span>
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
