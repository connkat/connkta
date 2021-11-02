import "./Resources.css";

import Projects from "../components/resources/projects";
import Writing from "../components/resources/writing";
import Art from "../components/resources/art";
import Resume from "../components/resources/resume";
import Hiking from "../components/resources/hiking";

function Resources() {
  return (
    <body>
      <div className="resources">
        <Projects />
        <Writing />
        <Resume />
        <Art />
        <Hiking />
      </div>
    </body>
  );
}

export default Resources;
