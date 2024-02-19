import "../card/card.scss";
import { Link } from "react-router-dom";
function Card({ data }) {
  return (
    <Link className="card">
      <img className="card-logo" src={data.logo} alt={`logo de ${data.name}`} />
      <section className="card-infos">
        <h3>{data.name}</h3>
        <p>{data.title}</p>
      </section>
    </Link>
  );
}
export default Card;
