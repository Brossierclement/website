import "../home/home.scss";
import Header from "../../components/header/header";
import { useContext } from "react";
import { DataContext } from "../../../App";
function Home() {
  const data = useContext(DataContext);
  console.log(data.projects);
  return (
    <>
      <Header />
      <main id="home" className="home">
        <div className="banner">
          <section className="welcome">
            <h1>L'Antre du Marteau</h1>
            <p>Partage de Projets et Passions</p>
            <p className="introduce">
              "Il s'agit de mon site personnel me permettant de vous partager
              mes divers projets autour du code ainsi que du design, mais
              également mes passions généralement retranscrites a travers des
              vidéos{" "}
              <a
                href="https://www.youtube.com/channel/UCqr9oNYYGHxnfPVAbNrOqoQ"
                target="_blank"
              >
                Youtube
              </a>
              ."
            </p>
            <a className="more" href="#">
              plus...
            </a>
          </section>
        </div>
        <h1 id="projects" className="title">
          Projets & Conceptions
        </h1>
        <div className="projects">
          {data ? (
            data.projects.map((item) => (
              <div key={item.id} className="project">
                <img className="logo" src={item.logo} alt="" />
                <section className="project-description">
                  <h2 className="project-name">{item.name}</h2>
                  <p className="project-title">{item.title}</p>
                </section>
              </div>
            ))
          ) : (
            <p>Chargement...</p>
          )}
          <a className="project-github" href="" target="_blank">
            <img className="plus" src="/images/mdi--github.svg" alt="" />
          </a>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
          voluptates soluta labore voluptatum id, quam ab officiis fugiat iure
          sequi esse qui maxime enim, obcaecati numquam magnam? Nemo, optio
          perspiciatis! Architecto autem molestias ad, maxime nihil ducimus.
          Sequi nisi provident sunt veniam? Fuga accusamus voluptas repellat
          vero soluta, aspernatur quis cum enim doloribus aliquam alias
          consequatur veniam error distinctio ipsa. Eum expedita, excepturi
          suscipit error rerum hic iure illo mollitia pariatur? Consequatur
          quidem veniam quo explicabo culpa? Unde quam odit placeat voluptas
          voluptatum magnam est temporibus, corrupti harum, aperiam tenetur.
          Iure alias et odit sit nisi corrupti itaque sed expedita molestias
          laborum, modi corporis voluptatem mollitia rem blanditiis ipsum optio?
          Laborum harum delectus dignissimos, nobis optio quidem voluptates
          corrupti iusto. Ipsa dolorem vitae facere ducimus eaque atque,
          reprehenderit aspernatur possimus, ipsum, incidunt odio? Qui alias
          obcaecati facilis delectus sunt, cumque vitae ullam voluptatibus
          necessitatibus maxime sapiente eum tenetur mollitia omnis! Fugiat
          optio exercitationem inventore quia? Necessitatibus, dolorum possimus
          sed, inventore voluptate quasi odit maiores ipsum temporibus repellat
          molestias impedit asperiores autem aut quisquam doloremque deserunt!
          Consequuntur, esse? In, neque dolor! Tenetur nihil, repellendus
          aliquam perferendis animi dolorem eum ea alias quis. Officiis ipsam
          excepturi asperiores? Sit repudiandae sequi, earum aliquam vitae
          consequuntur, vel eveniet nobis doloremque, error veritatis veniam
          aspernatur! Nisi perferendis alias tempore adipisci, odit illo laborum
          voluptatem sequi veritatis cum voluptates accusamus molestiae quos,
          eos delectus laudantium corporis! Perferendis dignissimos, nam
          similique repellat pariatur quas adipisci dolorum iure! Ad magni
          architecto cumque omnis deserunt voluptatibus maiores quis quaerat id
          vero nihil tempora ea explicabo consequatur, eligendi eius sed hic
          dolorem expedita sapiente atque non deleniti nostrum! Dolores,
          consequatur! Esse voluptas culpa corporis ratione reprehenderit?
          Inventore ad natus voluptate, dolore minus nihil sint, iste pariatur
          nam odit, consequuntur adipisci! In itaque natus non aperiam nesciunt
          cumque, dolor ratione provident! Distinctio expedita, voluptatem
          recusandae necessitatibus accusamus dolore et? Iure dignissimos et
          cumque laboriosam nemo, voluptatum fugit. Sed labore non explicabo
          similique sit repellat rerum ullam? Blanditiis dolore eligendi esse
          dolorem. Blanditiis, veritatis! Ipsum distinctio numquam amet esse
          laudantium voluptatum perspiciatis ut id! Totam ut ipsam omnis quas
          ullam consequuntur laudantium, illo officiis qui voluptatem in sequi
          cumque placeat, distinctio quasi! Natus consequuntur dicta optio
          maiores dolore debitis deserunt id assumenda atque mollitia ratione,
          nisi, nemo voluptate minima? Corporis corrupti deserunt veniam
          temporibus nulla ab sequi. Ipsam explicabo totam deserunt quasi!
          Aliquam quod suscipit repellendus. Aspernatur odio et ad beatae
          assumenda corrupti, nam nemo reprehenderit perferendis quibusdam
          laborum unde eveniet magni officia enim dolore, dolores, velit
          excepturi similique. Natus, esse optio! Cupiditate expedita earum
          obcaecati laborum? Obcaecati, rerum, assumenda nisi id deleniti
          nesciunt eum consequuntur ad quibusdam provident voluptate fugiat
          vitae iusto perferendis, similique quas molestiae voluptates error
          facilis excepturi nihil. Beatae maxime autem, quasi nobis quod,
          maiores fugit in officia facilis repellat sint ex, repellendus hic
          praesentium nisi accusamus temporibus vitae et voluptate. Ratione
          voluptate distinctio labore qui in. Magnam. Illo, quasi itaque,
          perferendis sequi eius voluptatem consectetur ratione esse ipsum
          perspiciatis molestiae maiores placeat. Dicta aliquam incidunt
          aspernatur excepturi possimus? Odit porro quas quasi. Magnam doloribus
          neque quis temporibus? Blanditiis doloribus, distinctio ad ullam
          molestiae mollitia qui odit, est consectetur enim officia? Qui
          obcaecati odit nihil soluta sequi? Dolorem labore incidunt harum
          dignissimos facere sint rerum consequatur itaque quia? Sunt quasi
          obcaecati ipsa velit voluptas repellat, vero magnam maiores iure cum
          assumenda similique cumque deserunt nemo recusandae libero quos! Ad
          saepe rem, adipisci illo quaerat soluta mollitia natus sint! Commodi
          repellat earum, maiores cupiditate corrupti modi nihil! Maiores, neque
          architecto sunt molestias, dolore qui aperiam, dicta impedit nobis
          magni alias. Et corporis dolores placeat eveniet officiis iusto, nisi
          doloremque. Atque necessitatibus error aliquid quam rerum quia ullam.
          Asperiores aliquam eveniet exercitationem vero officiis dolor, ut
          minus dicta animi ipsam praesentium accusamus veritatis delectus, fuga
          tempora in quasi nostrum beatae? Obcaecati, quod excepturi laudantium
          nemo itaque debitis id suscipit in, dolores molestias atque sit
          perferendis autem odit vero? Reprehenderit eaque tenetur harum
          voluptatibus omnis facere placeat laudantium magni consectetur dolore!
          Atque voluptatibus numquam nobis similique sint nesciunt qui quibusdam
          quas architecto dolor nulla cumque, modi ut aliquam beatae non ducimus
          culpa minus omnis blanditiis ad harum error. Voluptatum, quibusdam
          tempore. Molestias iste deserunt earum! Iure voluptas in nisi autem
          quia aliquam repellat voluptatibus deleniti mollitia magni tempore,
          dolorem expedita tempora at ullam fugiat eaque delectus ab iusto
          voluptatum doloribus sit? Molestias dolorem praesentium recusandae a.
          Qui unde est reprehenderit voluptates doloribus, recusandae optio
          facilis veritatis nobis id. Mollitia corrupti voluptates sunt cum
          velit repellendus consequatur necessitatibus dolorem? Nam, non beatae.
          Labore eos dolorum, eum animi odio eligendi eveniet maxime? At
          laboriosam nemo consectetur dolores assumenda recusandae odio dolorum,
          vitae dolor placeat omnis explicabo amet excepturi, facere nam, illum
          molestiae quam! Debitis, numquam dolor alias ullam sed adipisci vel ut
          maiores, eius officiis id culpa, similique assumenda cum at.
          Aspernatur voluptatibus omnis sint iste numquam doloremque repellendus
          accusantium natus hic autem! Sed consectetur tempora adipisci ducimus
          ipsum veritatis perferendis, obcaecati ipsam molestiae culpa fugit,
          autem in, itaque excepturi maiores cum! Molestiae quia iste,
          cupiditate dignissimos sapiente excepturi ducimus voluptate expedita
          amet. Rem pariatur asperiores reprehenderit quos perspiciatis
          voluptate dolorem eum magnam cupiditate architecto molestias atque
          eos, deleniti quis beatae? Ea doloribus maiores et perspiciatis
          inventore saepe deserunt, beatae blanditiis ducimus laborum! Neque ab
          ipsum voluptatem molestiae veniam, culpa ex eligendi fugiat
          laboriosam, earum, fuga sed recusandae obcaecati! Officiis, nostrum
          veniam sequi impedit esse porro laboriosam, unde, aliquam atque
          asperiores sed id? Quae eius voluptatem nam illo itaque, veniam vel!
          Reiciendis quis cumque et laudantium id error nostrum qui, similique
          quae deleniti quos, voluptatibus est ipsa illum distinctio ut dolor,
          numquam repellendus. Beatae molestias eum rem iste deserunt tempore
          quos sapiente, et esse. Provident earum, officia, esse facilis
          expedita aperiam dicta atque possimus fuga quasi ipsa consectetur enim
          molestiae quam amet nesciunt? Asperiores labore molestias, delectus
          minus necessitatibus eos minima! Deserunt rerum porro officia?
          Perspiciatis odio tempora laudantium repellendus a non molestiae qui,
          officia cum aspernatur corrupti consequuntur iusto veniam tenetur
          optio! Dignissimos autem odit officia id necessitatibus obcaecati
          quidem dolores ipsum reiciendis optio sapiente quam mollitia illo
          repellat quas, pariatur eligendi commodi nihil vel, accusantium
          quaerat laboriosam aperiam quia! Quam, vitae. Animi dignissimos
          consequatur quos officiis aliquam, ullam aut sint, eligendi
          exercitationem similique atque, illo dolorum. Saepe omnis ipsam rem
          quibusdam alias pariatur minima officiis exercitationem. Veritatis
          voluptatem expedita delectus quo. Eveniet officia deleniti eum
          temporibus amet obcaecati modi consequatur ratione dolor quidem? Totam
          eum maiores deleniti? Aliquid, accusantium. Culpa earum delectus
          aliquid accusamus suscipit quo ipsam tenetur repudiandae dicta
          voluptatem. Aliquid perspiciatis quos non veritatis aperiam, a est
          libero saepe, quasi nemo, eum at vero pariatur nobis earum sed vitae
          laboriosam rerum nam placeat cum vel? Velit amet perspiciatis illo.
          Mollitia laboriosam numquam nostrum alias assumenda aut esse officia
          quisquam veritatis sunt ex dicta incidunt consequatur iste vero
          praesentium accusamus cum, enim repellat explicabo nisi?
          Exercitationem magni eum recusandae id. Sed, ipsa ex voluptatem quo
          aperiam deserunt possimus non aspernatur quas. Praesentium placeat
          quam mollitia. Cupiditate ipsum quaerat adipisci maiores ullam
          dolorem. Inventore autem fugit suscipit tenetur nobis natus
          repellendus? Est soluta nobis natus tempora, laudantium quasi quis,
          quas, expedita vel magni corporis nemo amet. Nulla labore asperiores
          dignissimos accusamus debitis beatae similique ab. Soluta ad suscipit
          commodi dolore eum. Dolorem maiores dignissimos illo, explicabo
          similique itaque delectus ipsum. Vero quis rerum asperiores nihil
          nesciunt. Aliquid, ullam iste nisi ipsa perspiciatis atque quo tenetur
          porro harum consequatur cumque consectetur maiores. Repudiandae neque,
          eaque, tempore vitae qui necessitatibus eligendi totam amet fugit iste
          aspernatur facere, sit quam. Mollitia minima modi doloremque
          aspernatur nemo perspiciatis non officia dolorum. Ducimus porro facere
          illum! Odio, eaque perferendis, molestias qui voluptas dolorum dolor
          quas porro perspiciatis debitis impedit ullam? Tempore consectetur id
          atque illum eveniet architecto porro distinctio iure impedit modi,
          temporibus possimus repellat. Aliquam! Delectus dolore dolor officiis
          quo suscipit at vero nesciunt ea, cum voluptas quasi nobis, et
          debitis! Tempore autem maiores assumenda ipsum totam? Assumenda omnis,
          recusandae deserunt quam dolores eaque ullam. Expedita ab libero sint
          nisi, illo recusandae sed fuga assumenda. Est provident magni, non,
          eaque dicta corrupti officiis, obcaecati quos saepe quaerat recusandae
          nihil voluptatibus pariatur vero veritatis assumenda sit? Consequuntur
          perferendis, illum voluptate distinctio inventore tempora ipsam.
          Consectetur hic dicta architecto assumenda sunt beatae aperiam
          molestias, consequatur similique, vitae voluptatem ipsam, tempora
          esse. Porro quaerat natus temporibus doloribus suscipit. Voluptate
          iusto iure nihil assumenda explicabo odio! Ratione, odit ipsa voluptas
          qui distinctio molestias commodi! Earum reprehenderit dignissimos
          perspiciatis? Totam omnis repellat excepturi incidunt laudantium velit
          hic fugiat ipsa odit. Consectetur est provident, iste pariatur quia
          velit saepe similique repellat. At ipsa autem animi, alias, iure iusto
          sequi a necessitatibus fugiat fuga reiciendis odit dignissimos soluta,
          facere pariatur aliquam eius. Magni facere minus dolores nobis
          molestias aperiam. Sunt, accusamus eligendi quasi in qui id enim error
          maxime recusandae, sint accusantium illum aliquid consequuntur
          aspernatur corrupti sit dolorum porro impedit. Ipsam? Veritatis
          laboriosam corporis odio, repellendus illo aut deleniti fugiat
          consequatur in vero temporibus necessitatibus nostrum ducimus ipsam.
          Minus exercitationem voluptatibus est aperiam aut consequuntur
          reiciendis nam, beatae recusandae, quasi totam!
        </p>
      </main>
    </>
  );
}
export default Home;
