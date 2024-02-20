import "../card/card.scss";
import { Link } from "react-router-dom";
function Card({ data }) {
  return (
    <Link className="card">
      <img className="card-logo" src={data.logo} alt={`logo de ${data.name}`} />
      <div className="card-infos">
        <section className="card-top">
          <h3>{data.name}</h3>
          <div className="card-types">
            {data ? (
              data.types.map((item, i) => (
                <p className="type" key={i}>
                  {item}
                </p>
              ))
            ) : (
              <p>Chargement...</p>
            )}
          </div>
        </section>
        <p>{data.title}</p>
      </div>
    </Link>
  );
}
export default Card;
