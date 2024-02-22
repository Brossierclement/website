import "../header/header.scss";
import Network from "../network/network";
function Header({ isActive }) {
  return (
    <header className={`header ${isActive ? "header-active" : ""}`}>
      <Network name={"Blog"} />
      <Network name={"Stream"} />
    </header>
  );
}
export default Header;
