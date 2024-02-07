import "../home/home.scss";
import Header from "../../components/header/header";
import { useContext } from "react";
import { DataContext } from "../../../App";
function Home() {
  const data = useContext(DataContext);
  const topNetworks = [
    data.networks.find((obj) => obj.name === "Github"),
    data.networks.find((obj) => obj.name === "Twitch"),
  ];
  console.log(topNetworks);
  return (
    <>
      <Header />
      <main className="home">
        <section className="banner">
          <h1>Exploration Créative</h1>
          <p>Partage de Projets et Passions</p>
          <nav className="banner-networks">
            {data ? (
              topNetworks.map((item, i) => (
                <a className="banner-links" key={i} href={item.url}>
                  <p>{item.name}</p>
                </a>
              ))
            ) : (
              <p>Chargement...</p>
            )}
          </nav>
        </section>
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          tempore ab tenetur vel illo quisquam odio, quae sit pariatur alias
          sint adipisci aperiam natus. Iure consectetur esse odio? Vero, nihil.
          Corporis dolore ipsam earum voluptas eum eligendi possimus nostrum
          expedita, vitae exercitationem odio. Excepturi velit molestias
          voluptatum ab dolore dolores iste! Dicta, quaerat. Voluptates unde
          consectetur quaerat itaque sit nisi. Totam quam ab repellendus
          laboriosam amet itaque optio dignissimos provident distinctio eos
          impedit quae architecto maiores expedita, sit consequatur eligendi
          blanditiis illo reprehenderit velit quasi. Aliquam sunt hic
          accusantium deleniti. Ad quis unde libero delectus perspiciatis
          corporis voluptates pariatur ipsum corrupti voluptatibus vel veritatis
          quasi molestias reprehenderit officiis fugiat, non, repellendus omnis
          officia veniam nulla ex! Perferendis impedit iusto fugiat! Aliquam
          sequi quod inventore distinctio facilis tempore nisi reprehenderit cum
          quo incidunt unde quaerat impedit obcaecati sunt tempora, soluta esse
          molestiae nihil aut eligendi tenetur! Maxime reprehenderit corporis
          voluptas asperiores. Veritatis cum rem autem ea fuga adipisci fugiat
          exercitationem modi? Numquam aut tempora quo commodi laudantium odit
          error veritatis laborum consequuntur, impedit libero similique,
          molestiae inventore cupiditate vero repellat reprehenderit? Neque
          nesciunt velit consequuntur mollitia! Numquam hic, accusamus cumque
          minus ipsum vel quaerat neque voluptatum cupiditate sint itaque fuga
          reprehenderit nisi reiciendis nihil eligendi, sit et. Beatae fugit at
          quia. Hic a ipsum similique deserunt cum nam, perferendis vitae
          asperiores aliquid harum repudiandae! Iusto blanditiis magni laborum
          obcaecati pariatur nostrum soluta veritatis fugit? Similique,
          exercitationem eos consequatur deserunt molestiae sequi! Explicabo
          repellendus repellat officia voluptatum dolorum ipsa consequuntur
          totam eveniet. Debitis officia animi possimus ipsum illum, laborum
          deleniti quae est molestiae nisi exercitationem obcaecati corporis
          libero impedit facere, dolor sapiente? Nulla ad ratione sed enim cum
          tempore animi vitae cumque quod sapiente at, tenetur inventore hic a
          nostrum aliquam cupiditate dignissimos unde delectus nam consequuntur
          iste sit aspernatur! Repellat, quia.
        </p>
      </main>
    </>
  );
}
export default Home;
