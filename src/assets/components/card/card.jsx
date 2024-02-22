import "../card/card.scss";
function Card({ data, setIsActive, setIdValue }) {
  const handClick = () => {
    setIsActive((current) => !current);
    setIdValue(data.id);
  };
  return (
    <article className="card">
      <img className="card-logo" src={data.logo} alt={`logo de ${data.name}`} />
      <div className="card-infos">
        <section className="info">
          <h3>{data.name}</h3>
          <p>{data.title}</p>
        </section>
        <button onClick={handClick} className="show">
          Voir
        </button>
      </div>
    </article>
  );
}
export default Card;
