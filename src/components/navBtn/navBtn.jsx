import { Link } from "react-router-dom";
import "./navBtn.scss";
function NavBtn({ pic, link }) {
  return (
    <Link className="navBtn" to={link}>
      <img src={pic} alt={`c'est un logo ${pic}`} />
    </Link>
  );
}
export default NavBtn;
