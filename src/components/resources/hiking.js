import "../../App.css";
import hiking from "../../images/hiking.png";

function Hiking() {
  return (
    <div className="section">
      <div className="title">
        <img src={hiking} className="title-img" alt="hiking" />
        </div>
        <div className="content">
        <a href="http://rockymountainmerit.co">Rocky Mountain Merit Co.</a>
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
  );
}

export default Hiking;
