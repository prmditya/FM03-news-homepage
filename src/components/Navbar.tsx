import Logo from "../assets/images/logo.svg";
import IconMenu from "../assets/images/icon-menu.svg";
import IconClose from "../assets/images/icon-menu-close.svg";
import { useState } from "react";

function Navbar() {
  const [icon, setIcon] = useState<string>(IconMenu);
  const [width, setWidth] = useState<number>(35);

  const handleNav = () => {
    setIcon(icon === IconMenu ? IconClose : IconMenu);
    setWidth(width === 35 ? 30 : 35);
    document.querySelector("nav-links")?.classList.toggle("show");
    document.querySelector(".nav-mobile-menu")?.classList.toggle("show");
    document.querySelector(".overlay")?.classList.toggle("show-overlay");
  };

  return (
    <nav>
      <div className="nav-logo">
        <img src={Logo} alt="News Logo" />
      </div>
      <div className="nav-menu">
        <button className="btn-nav" onClick={handleNav}>
          <img src={icon} style={{ width: `${width}px` }} alt="Menu" />
        </button>
        <div className="nav-mobile-menu">
          <a href="#">home</a>
          <a href="#">new</a>
          <a href="#">popular</a>
          <a href="#">trending</a>
          <a href="#">categories</a>
        </div>
      </div>
      <div className="nav-links">
        <a href="#">home</a>
        <a href="#">new</a>
        <a href="#">popular</a>
        <a href="#">trending</a>
        <a href="#">categories</a>
      </div>
    </nav>
  );
}

export default Navbar;
