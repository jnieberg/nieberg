import "./Menu.scss";
import { Link } from "react-router-dom";
import Fa from "./Fa";

const Menu = () => (
  <div id="menu">
    <button aria-label="Open menu">
      <Fa icon="hamburger" />
    </button>
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
  </div>
);

export default Menu;
