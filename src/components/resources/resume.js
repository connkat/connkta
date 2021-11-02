import "../../pages/Resources.css"
import resume from "../../images/resume.png";
import viewResume from "../../images/view-resume.png";

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
            <img src={viewResume} className="resume-button" alt="resume-button" />
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
