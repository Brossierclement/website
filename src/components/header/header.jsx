import "../header/header.scss";
import { Link } from "react-router-dom";
import shield from "../../assets/img/viking-shield.svg";
import sun from "../../assets/img/sun.svg";
import moon from "../../assets/img/moon.svg";
import NavBtn from "../navBtn/navBtn";
function Header() {
  return (
    <header>
      <nav className="headerNav">
        <NavBtn pic={shield} link={"/home"} />
        <Link to={"/stream"}>Stream</Link>
      </nav>
      <NavBtn pic={sun} />
    </header>
  );
}
export default Header;
