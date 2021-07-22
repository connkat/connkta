import "../../App.css";
import art from "../../images/art.png";
import prc from "../../images/prc.png";

function Art() {
  return (
    <div className="section">
      <div className="title">
        <img src={art} className="title-img" alt="art" />
      </div>
      <div className="content">
        <a href="https://www.instagram.com/panrobinco/?hl=en">
        <img src={prc} className="art-button" alt="art-button" />
        </a>
      </div>{" "}
    </div>
  );
}

export default Art;
