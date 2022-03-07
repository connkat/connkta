// packages
import Fade from "react-reveal/Fade";

// styling
import "./Resources.css";

// images
import Projects from "../components/resources/projects";
import Writing from "../components/resources/writing";
import Art from "../components/resources/art";
import Resume from "../components/resources/resume";
import Hiking from "../components/resources/hiking";

function Resources() {
  return (
    <body>
      <div className="resources">
        <Fade>
          <Projects />
        </Fade>
        <Fade>
          <Writing />
        </Fade>
        <Fade>
          <Resume />
        </Fade>
        <Fade>
          <Art />
        </Fade>
        <Fade>
          <Hiking />
        </Fade>
      </div>
    </body>
  );
}

export default Resources;
