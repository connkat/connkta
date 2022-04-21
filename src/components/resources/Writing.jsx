import "../../pages/Resources.css";
import writing from "../../images/writing.png";
import medium from "../../images/medium.png";

function Writing() {
  return (
    <div className="section">
      <div className="title">
        <img src={writing} className="title-img" alt="writing" />
      </div>
      <div className="content">
        <ul>
          <a href="https://connkat.medium.com/">
            <img src={medium} alt="medium" className="medium" />
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Writing;
