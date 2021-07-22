import connkat from "../images/connkat.png";
import "../App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <div className="Link">
        <Link to="/resources">Links</Link>
      </div>
      <div className="nav-logo">
      <Link to="/">
        <img src={connkat} className="nav-logo" alt="nav-logo" />
      </Link>
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
