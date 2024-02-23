import "../project/project.scss";
import Card from "../card/card";
import Carousel from "../carousel/carousel";
function Project({ isActive, setIsActive, data, idValue }) {
  const handleClick = () => {
    setIsActive(!isActive);
  };
  const found = data.projects.find((element) => element.id == idValue);
  return (
    <div className={`project-container ${isActive ? "active" : ""}`}>
      {found ? (
        <article className="project">
          <header className="header-project">
            <Card data={found} />
          </header>
          <main className="main-project">
            <section className="tech">
              <h5>Tech</h5>
              <div className="languages">
                {found ? (
                  found.types.map((item, i) => (
                    <p className="type" key={i}>
                      {item}
                    </p>
                  ))
                ) : (
                  <p>Chargement...</p>
                )}
              </div>
            </section>
            <Carousel data={found.images} />
          </main>
          <button className="close" onClick={handleClick}>
            <svg
              viewBox="0 0 12 12"
              focusable="false"
              className="cross"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M.293.293a1 1 0 011.414 0L6 4.586 10.293.293a1 1 0 111.414 1.414L7.414 6l4.293 4.293a1 1 0 01-1.414 1.414L6 7.414l-4.293 4.293a1 1 0 01-1.414-1.414L4.586 6 .293 1.707a1 1 0 010-1.414z"
              ></path>
            </svg>
          </button>
        </article>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
}
export default Project;
