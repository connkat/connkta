import "../App.css";

import Nav from "./Nav";
import Projects from "./resources/projects";
import Writing from "./resources/writing";
import Art from "./resources/art";
import Resume from "./resources/resume";
import Hiking from "./resources/hiking";

function Resources() {
  return (
    <body>
      <div className="Resources">
        <Nav />
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
