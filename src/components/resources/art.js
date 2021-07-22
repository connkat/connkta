import "../../App.css";
import art from "../../images/art.png";

function Art() {
  return (
    <div className="section">
      <div className="title">
          <img src={art} className="title-img" alt="art" />
          </div>
          <ul>
            <a href="https://www.instagram.com/panrobinco/?hl=en">
              Pan Robin Co.
            </a>
          </ul>
    </div>
  );
}

export default Art;
