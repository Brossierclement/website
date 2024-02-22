import "../project/project.scss";
function Project({ isActive, setIsActive, data, idValue }) {
  const handleClick = () => {
    setIsActive(!isActive);
  };
  const found = data.projects.find((element) => element.id == idValue);
  console.log(found);
  return (
    <article className={`project ${isActive ? "active" : ""}`}>
      <h1>{found.name}</h1>
      <button onClick={handleClick}>Fermer</button>
    </article>
  );
}
export default Project;
