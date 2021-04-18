import connkat from "../images/connkat.png";
import "../App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <div className="Link">
        <Link to="/resume">Resume</Link>
      </div>
      <div className="Nav-logo">
        <img src={connkat} className="Nav-logo" alt="Nav-logo" />
      </div>
      <div className="Link">
        <a href="mailto:hi.connkat@gmail.com" target="_blank" rel="noreferrer">
          Get in Touch
        </a>
      </div>
    </div>
  );
}

export default Nav;
