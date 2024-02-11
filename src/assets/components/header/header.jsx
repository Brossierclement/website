import "../header/header.scss";
function Header() {
  return (
    <header className="header">
      <img src="/images/donjon.svg" alt="logo du site" className="logo" />
      <nav className="navigation-desktop">
        <a href="#">Projets</a>
        <a href="#">À propos</a>
        <a href="#">Contact</a>
      </nav>
      <div className="contaimer-navigation-mobile">
        <button className="menu">
          <span className="bar"></span>
        </button>
        <nav className="navigation-mobile">
          <a href="#">Projets</a>
          <a href="#">À propos</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
}
export default Header;
