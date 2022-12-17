/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Menu.scss";
import { Link } from "react-router-dom";
import Fa from "./Fa";

const Menu = () => (
  <div id="menu">
    <a aria-label="Open menu" tabIndex={0}>
      <Fa icon="hamburger" />
    </a>
    <nav>
      <Link to="/" aria-label="About me">
        <Fa icon="home-user" />
      </Link>
      <Link to="competences" aria-label="Competences">
        <Fa icon="hat-wizard" />
      </Link>
      <Link to="snapshot" aria-label="Professional Snapshot">
        <Fa icon="camera-retro" />
      </Link>
      <Link to="career" aria-label="Career Highlight">
        <Fa icon="briefcase" />
      </Link>
      <div className="stretch"></div>
      <Link to="showcase" aria-label="Personal Showcase">
        <Fa icon="gamepad" />
      </Link>
    </nav>
  </div>
);

export default Menu;
