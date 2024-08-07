import "../home/home.scss";
import banner from "../../assets/img/banner.jpg";
import me from "../../assets/img/me.jpg";
import twitter from "../../assets/img/twitter.svg";
import briefcase from "../../assets/img/briefcase.svg";
import chain from "../../assets/img/chain.svg";
import cake from "../../assets/img/cake.svg";
import calendar from "../../assets/img/calendar.svg";
import { Link, NavLink } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Feed from "../feed/feed";
import About from "../about/about";
import Content from "../content/content";
function Home() {
  return (
    <main className="home">
      <img className="banner" src={banner} alt="Bannière du site" />
      <div className="resume">
        <img className="profilePicture" src={me} alt="Photo de profile" />
        <nav className="twitter">
          <a className="follow" href="https://x.com/Gulnyr_" target="blank">
            Follow
            <img src={twitter} alt="Logo de Twitter" />
          </a>
        </nav>
        <section className="nameQuoteActivities">
          <h1>Clément Brossier</h1>
          <p>
            "C’est peut-être parce que j’ai peur, et qu’il me donne du courage."
          </p>
          <p>Intégrateur Web Débutant. Créateur de contenu.</p>
        </section>
        <div className="status">
          <span>
            <img src={briefcase} alt="Logo représentant une mallette" />
            <p>Disponible</p>
          </span>
          <span>
            <img src={chain} alt="Logo représentant une chaine" />
            <p>Liens</p>
          </span>
          <span>
            <img src={cake} alt="Logo représentant un gâteau" />
            <p>19 Mars</p>
          </span>
          <span>
            <img src={calendar} alt="Logo représentant un calendrier" />
            <p>A rejoint en décembre 2019</p>
          </span>
        </div>
      </div>
      <nav className="branch">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "branchLink" : isActive ? "branchLinkUnderline" : ""
          }
          to={"feed"}
        >
          Actualités
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "branchLink" : isActive ? "branchLinkUnderline" : ""
          }
          to={"about"}
        >
          À propos
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "branchLink" : isActive ? "branchLinkUnderline" : ""
          }
          to={"content"}
        >
          Contenus
        </NavLink>
      </nav>
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="feed" replace />} />
          <Route path="feed/*" element={<Feed />} />
          <Route path="about" element={<About />} />
          <Route path="content" element={<Content />} />
        </Route>
      </Routes>
    </main>
  );
}
export default Home;
