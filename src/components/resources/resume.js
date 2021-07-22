import "../../App.css";
import resume from "../../images/resume.png";

function Resume() {
  return (
    <div className="section">
      <div className="title">
        <img src={resume} className="title-img" alt="resume" />
      </div>
      <div className="content">
        <ul>
          <a
            href="https://github.com/connkat/Resume/blob/master/KConnolly.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download/View
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
