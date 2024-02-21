import { Link } from "react-router-dom";
import "../network/network.scss";
function Network({ url, name }) {
  return (
    <Link className="link" to={url} target="_blank">
      <p>{name}</p>
    </Link>
  );
}
export default Network;
