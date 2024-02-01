import "./header/header.scss";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <div className="header-bar">
        <Link to={"/"}>
          <img src="/images/planet.svg" alt="logo du site internet" />
        </Link>
        <button className="header-menu">
          <img src="/images/bars-solid.svg" alt="logo représentant un menu" />
        </button>
      </div>
      <div className="banner">
        <img src="/images/fogg.png" alt="" className="fog" />
      </div>
    </header>
  );
}
export default Header;
