import { useState } from "react";
import { Link } from "react-router-dom";
import "../header/header.scss";
import Network from "../network/network";
function Header() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };
  return (
    <header className="header">
      <Network name={"Blog"} />
      <Network name={"Stream"} />
    </header>
  );
}
export default Header;
