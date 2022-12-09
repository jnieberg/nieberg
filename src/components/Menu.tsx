import "./Menu.scss";
import { Link } from "react-router-dom";
import Fa from "./Fa";

const Menu = () => (
  <button id="menu" aria-label="Open menu" tabIndex={1}>
    <Fa icon="hamburger" />
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
    </nav>
  </button>
);

export default Menu;
