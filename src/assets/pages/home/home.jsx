import "../home/home.scss";
import Header from "../../components/header/header";
import Network from "../../components/network/network";
import Footer from "../../components/footer/footer";
import { useContext } from "react";
import { DataContext } from "../../../App";
function Home() {
  const data = useContext(DataContext);
  console.log(data.projects);
  return (
    <>
      <Header />
      <main id="home" className="home">
        <section>
          <div className="welcome">
            <section className="introduce-welcome">
              <h1>Bievenue sur l'Antre du Marteau</h1>
              <p>
                Site personnel pour le partage de mes divers projets "code",
                mais également mes activités personnelles comme la création de
                contenus sur Youtube.
              </p>
              <nav className="links-welcome">
                <Network
                  url={"https://github.com/Brossierclement"}
                  name={"Github"}
                />
                <Network
                  url={"https://www.youtube.com/@Gulnyr_"}
                  name={"Youtube"}
                />
              </nav>
            </section>
            <div className="image-welcome">
              <img className="computer" src="/images/computer.png" alt="" />
            </div>
          </div>
        </section>
        <section id="projects" className="section">
          <h1>Projets</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            animi dignissimos nisi laudantium cumque, eius nam magni, explicabo
            velit inventore eligendi officia. Eius similique numquam harum ipsum
            accusamus. Laborum, reprehenderit. Nemo, asperiores labore maiores
            soluta tempora eum. Libero sunt enim ut eveniet odio consequatur
            esse molestiae adipisci dolore magnam accusantium voluptatum dolores
            soluta eaque necessitatibus cumque, fugit ad saepe magni?
            Necessitatibus a vero rerum aliquid earum libero quos consequatur
            porro facere, voluptatibus natus, fuga officiis, nam sint nemo
            quibusdam alias facilis eos in! Vel, ipsum officiis aspernatur quia
            iusto cupiditate. Asperiores modi ex autem illo animi ea excepturi
            dolor, necessitatibus nostrum eos adipisci! Atque, nostrum labore
            tempore exercitationem obcaecati vitae, cupiditate ratione odit est
            quasi explicabo provident unde inventore quidem. Qui earum iste modi
            laboriosam neque? Consectetur neque amet eius iusto? Aliquam alias
            necessitatibus rem voluptatem maxime, quam saepe dolorum voluptas
            beatae adipisci quos suscipit aliquid doloremque? Consequuntur,
            ipsum vel. Culpa odio, delectus sunt at, necessitatibus, itaque
            iusto optio ipsum obcaecati excepturi dolorum voluptate mollitia
            doloribus? Laboriosam iure minus itaque, dignissimos voluptas
            corrupti repellat vitae accusantium sint fugiat tempore accusamus.
            Perspiciatis error iste, dolorum, et illo delectus debitis,
            doloremque similique quo voluptatibus sunt blanditiis id impedit
            dolorem eos ab nemo nisi minus libero tenetur? Accusamus suscipit
            ipsum incidunt laboriosam aspernatur. Maxime, numquam cupiditate?
            Ipsam eveniet numquam quae laborum possimus illo, sit animi
            distinctio ipsa esse soluta eligendi! Minus similique fuga nesciunt,
            id quasi, quis sed minima temporibus dicta maiores corporis. Dolorem
            pariatur quia temporibus possimus ut, voluptatum mollitia
            repudiandae unde consequatur enim perspiciatis ab numquam quos nobis
            sapiente esse architecto, ad inventore excepturi soluta fuga cum.
            Magnam itaque omnis similique. Sapiente iste voluptate in, a
            consequatur aperiam delectus dolorem optio est natus nihil quae
            praesentium suscipit quis assumenda inventore impedit velit
            quibusdam architecto accusantium asperiores non. Ratione impedit
            corrupti doloremque?
          </p>
        </section>
        <section id="about" className="section">
          <h1>À propos</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            animi dignissimos nisi laudantium cumque, eius nam magni, explicabo
            velit inventore eligendi officia. Eius similique numquam harum ipsum
            accusamus. Laborum, reprehenderit. Nemo, asperiores labore maiores
            soluta tempora eum. Libero sunt enim ut eveniet odio consequatur
            esse molestiae adipisci dolore magnam accusantium voluptatum dolores
            soluta eaque necessitatibus cumque, fugit ad saepe magni?
            Necessitatibus a vero rerum aliquid earum libero quos consequatur
            porro facere, voluptatibus natus, fuga officiis, nam sint nemo
            quibusdam alias facilis eos in! Vel, ipsum officiis aspernatur quia
            iusto cupiditate. Asperiores modi ex autem illo animi ea excepturi
            dolor, necessitatibus nostrum eos adipisci! Atque, nostrum labore
            tempore exercitationem obcaecati vitae, cupiditate ratione odit est
            quasi explicabo provident unde inventore quidem. Qui earum iste modi
            laboriosam neque? Consectetur neque amet eius iusto? Aliquam alias
            necessitatibus rem voluptatem maxime, quam saepe dolorum voluptas
            beatae adipisci quos suscipit aliquid doloremque? Consequuntur,
            ipsum vel. Culpa odio, delectus sunt at, necessitatibus, itaque
            iusto optio ipsum obcaecati excepturi dolorum voluptate mollitia
            doloribus? Laboriosam iure minus itaque, dignissimos voluptas
            corrupti repellat vitae accusantium sint fugiat tempore accusamus.
            Perspiciatis error iste, dolorum, et illo delectus debitis,
            doloremque similique quo voluptatibus sunt blanditiis id impedit
            dolorem eos ab nemo nisi minus libero tenetur? Accusamus suscipit
            ipsum incidunt laboriosam aspernatur. Maxime, numquam cupiditate?
            Ipsam eveniet numquam quae laborum possimus illo, sit animi
            distinctio ipsa esse soluta eligendi! Minus similique fuga nesciunt,
            id quasi, quis sed minima temporibus dicta maiores corporis. Dolorem
            pariatur quia temporibus possimus ut, voluptatum mollitia
            repudiandae unde consequatur enim perspiciatis ab numquam quos nobis
            sapiente esse architecto, ad inventore excepturi soluta fuga cum.
            Magnam itaque omnis similique. Sapiente iste voluptate in, a
            consequatur aperiam delectus dolorem optio est natus nihil quae
            praesentium suscipit quis assumenda inventore impedit velit
            quibusdam architecto accusantium asperiores non. Ratione impedit
            corrupti doloremque?
          </p>
        </section>
        <section id="contact" className="section">
          <h1>Contact</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            animi dignissimos nisi laudantium cumque, eius nam magni, explicabo
            velit inventore eligendi officia. Eius similique numquam harum ipsum
            accusamus. Laborum, reprehenderit. Nemo, asperiores labore maiores
            soluta tempora eum. Libero sunt enim ut eveniet odio consequatur
            esse molestiae adipisci dolore magnam accusantium voluptatum dolores
            soluta eaque necessitatibus cumque, fugit ad saepe magni?
            Necessitatibus a vero rerum aliquid earum libero quos consequatur
            porro facere, voluptatibus natus, fuga officiis, nam sint nemo
            quibusdam alias facilis eos in! Vel, ipsum officiis aspernatur quia
            iusto cupiditate. Asperiores modi ex autem illo animi ea excepturi
            dolor, necessitatibus nostrum eos adipisci! Atque, nostrum labore
            tempore exercitationem obcaecati vitae, cupiditate ratione odit est
            quasi explicabo provident unde inventore quidem. Qui earum iste modi
            laboriosam neque? Consectetur neque amet eius iusto? Aliquam alias
            necessitatibus rem voluptatem maxime, quam saepe dolorum voluptas
            beatae adipisci quos suscipit aliquid doloremque? Consequuntur,
            ipsum vel. Culpa odio, delectus sunt at, necessitatibus, itaque
            iusto optio ipsum obcaecati excepturi dolorum voluptate mollitia
            doloribus? Laboriosam iure minus itaque, dignissimos voluptas
            corrupti repellat vitae accusantium sint fugiat tempore accusamus.
            Perspiciatis error iste, dolorum, et illo delectus debitis,
            doloremque similique quo voluptatibus sunt blanditiis id impedit
            dolorem eos ab nemo nisi minus libero tenetur? Accusamus suscipit
            ipsum incidunt laboriosam aspernatur. Maxime, numquam cupiditate?
            Ipsam eveniet numquam quae laborum possimus illo, sit animi
            distinctio ipsa esse soluta eligendi! Minus similique fuga nesciunt,
            id quasi, quis sed minima temporibus dicta maiores corporis. Dolorem
            pariatur quia temporibus possimus ut, voluptatum mollitia
            repudiandae unde consequatur enim perspiciatis ab numquam quos nobis
            sapiente esse architecto, ad inventore excepturi soluta fuga cum.
            Magnam itaque omnis similique. Sapiente iste voluptate in, a
            consequatur aperiam delectus dolorem optio est natus nihil quae
            praesentium suscipit quis assumenda inventore impedit velit
            quibusdam architecto accusantium asperiores non. Ratione impedit
            corrupti doloremque?
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default Home;
