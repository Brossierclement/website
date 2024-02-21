import "../project/project.scss";
function Project({ isActive, setIsActive }) {
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <article className={`project ${isActive ? "active" : ""}`}>
      <h1>Modale</h1>
      <button onClick={handleClick}>Fermer</button>
    </article>
  );
}
export default Project;
