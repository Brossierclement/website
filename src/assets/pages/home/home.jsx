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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
            deleniti voluptatum officiis molestiae dolorum quisquam accusamus
            nihil impedit eveniet reprehenderit, perspiciatis quis eius, dolorem
            dicta repellat nam doloribus cupiditate qui! Ad cupiditate quia
            consequatur atque a id nemo asperiores facilis deserunt voluptates.
            Nostrum assumenda eos harum eaque vero, aperiam quae blanditiis
            rerum nemo est voluptates sed dolorem necessitatibus. Officia, quam.
            Dolorem, est deleniti dignissimos et blanditiis totam ducimus dicta
            omnis in mollitia repellat sapiente! Repellendus quia praesentium
            esse architecto temporibus accusantium, fugiat, quis quidem, totam
            nulla consequuntur? Nemo, ad quasi. Cupiditate ad quod deserunt
            exercitationem, magni sit aperiam tenetur ullam rerum enim. Soluta
            officiis eius exercitationem voluptate quos aperiam vero, porro
            enim, quia distinctio corrupti fugit? Inventore, vitae neque! Eius?
            Atque tempore earum eveniet rem? Blanditiis dignissimos aperiam eos
            rem magni molestiae vel? Aperiam maiores aliquam facilis, cum
            architecto voluptates quas nemo saepe non autem quasi officiis amet
            adipisci accusantium!
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
