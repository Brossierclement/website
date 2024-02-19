import "../network/network.scss";
function Network({ url, name }) {
  return (
    <a className="network" href={url} target="_blank">
      <p>{name}</p>
    </a>
  );
}
export default Network;
