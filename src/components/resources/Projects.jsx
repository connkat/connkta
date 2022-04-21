import "../../pages/Resources.css"
import projects from "../../images/projects.png";
import github from "../../images/github.png";

function Projects() {
  return (
    <div className="section">
      <div className="title">
        <img src={projects} className="title-img" alt="projects" />
      </div>
      <div className="content">
        <ul>
          <a href="https://www.github.com/connkat">
            <img src={github} alt="github" className="github-logo"/>
          </a>
        </ul>

      </div>
    </div>
  );
}

export default Projects;
