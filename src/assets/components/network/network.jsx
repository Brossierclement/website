import "../network/network.scss";
function Network({ url, name }) {
  return (
    <a className="network" href={url} target="_blank">
      {name}
    </a>
  );
}
export default Network;
