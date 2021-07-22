import "../../App.css";
import hiking from "../../images/hiking.png";
import rmmc from "../../images/rmmc.png";

function Hiking() {
  return (
    <div className="section">
      <div className="title">
        <img src={hiking} className="title-img" alt="hiking" />
      </div>
      <div className="content">
        <div className="hiking">
          <a href="http://rockymountainmerit.co">
            <img src={rmmc} className="nav-links" alt="nav-logo" />
          </a>
          <iframe
            width="315"
            height="220"
            src="https://www.youtube.com/embed/vH_2PWIVLMg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Hiking;
