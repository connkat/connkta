import "./Nav.css";
import { Link } from "react-router-dom";
import writing from "../images/writing-nav.png";
import contact from "../images/contact.png";
import connkat from "../images/connkat.png";

function Nav() {
  return (
    <div className="Nav">
      <div className="Link">
        <Link to="/writing">
        <img src={writing} className="nav-links" alt="nav-logo" />
        </Link>
      </div>
      <div className="nav-logo">
      <Link to="/">
        <img src={connkat} className="nav-logo" alt="nav-logo" />
      </Link>
      </div>
      <div className="Link">
        <a href="mailto:hi.connkat@gmail.com" target="_blank" rel="noreferrer">
        <img src={contact} className="nav-links" alt="nav-logo" />
        </a>
      </div>
    </div>
  );
}

export default Nav;
