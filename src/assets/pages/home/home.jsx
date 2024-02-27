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
  const [idValue, setIdValue] = useState(null);
  return (
    <>
      <Header isActive={isActive} />
      <main id="home" className={`home ${isActive ? "home-active" : ""}`}>
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
                setIsActive={setIsActive}
                setIdValue={setIdValue}
              />
            ))
          ) : (
            <p>Erreur...</p>
          )}
        </div>
        <div className="about">
          <div className="about-img-tech">
            <img
              className="about-image"
              src="/images/space-marine.jpg"
              alt="image générer par ia représentant deux space marine."
            />
            <div className="tech">
              {data
                ? data.ability.map((item) => (
                    <div key={item.id} className="ability">
                      <p className="ability-title">{item.named}</p>
                      <div className="ability-images-container">
                        {item
                          ? item.tech.map((el, i) => (
                              <img
                                key={i}
                                className="ability-image"
                                src={el}
                                alt=""
                              />
                            ))
                          : ""}
                      </div>
                    </div>
                  ))
                : ""}
            </div>
          </div>
          <p className="about-me">
            D'origine de formation agricole, j'ai décidé en janvier 2023 de
            changer d'horizon et mon choix c'est porté sur le développement web.
            Après des recherches et entretiens j'ai pu entamer une formation de
            9 mois a{" "}
            <a href="https://openclassrooms.com/fr/" target="_blank">
              Openclassrooms
            </a>{" "}
            pour devenir Intégrateur web. Pour ma part se fut compliqué, mais
            mes efforts finirent pas payer ayant décroché mon diplome le 15
            décembre 2023.
            <br />
            Depuis je cherche un emploi ou bien une alternance pour débuter
            professionnellement dans le domaine du développement web.
            <br />
            <br />
            En attendant j'améliore mon site internet et réalise des projets
            personnels dans le but d'améliorer tout les jours mes compétences.
            <br />
            <br />
            Je passe également mon temps libre a jouer aux jeux vidéo, a lire et
            a écrire des vidéos.
          </p>
        </div>
      </main>
      <Project
        isActive={isActive}
        setIsActive={setIsActive}
        data={data}
        idValue={idValue}
      />
      <Footer />
    </>
  );
}
export default Home;
