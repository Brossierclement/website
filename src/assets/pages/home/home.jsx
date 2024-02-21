import "../home/home.scss";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useContext, useState } from "react";
import { DataContext } from "../../../App";
import Network from "../../components/network/network";
import Card from "../../components/card/card";
import Project from "../../components/project/project";
function Home() {
  const data = useContext(DataContext);
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <Header />
      <main id="home" className="home">
        <section className="introduce">
          <h1>Hey, c'est Clément</h1>
          <p>
            Je suis un jeune développeur front-end spécialisé avec javascript et
            React. <br />
            Dans mon temps libre je joue aux jeux vidéo et j'essai d'améliorer
            mes compétences en design et en développement.
          </p>
        </section>
        <nav className="network">
          <Network name={"Email"} url={"mailto:brossier.clement@proton.me"} />
          <Network name={"Twitter"} url={"https://twitter.com/Gulnyr_"} />
          <Network name={"Twitch"} url={"https://www.twitch.tv/gulnyr_"} />
          <Network
            name={"CV"}
            url={"/images/clement-brossier-curriculum-vitae.pdf"}
          />
        </nav>
        <div className="projects">
          {data ? (
            data.projects.map((item) => (
              <Card
                key={item.id}
                data={item}
                isActive={isActive}
                setIsActive={setIsActive}
              />
            ))
          ) : (
            <p>Erreur...</p>
          )}
        </div>
        <Project isActive={isActive} setIsActive={setIsActive} />
      </main>
      <Footer />
    </>
  );
}
export default Home;
