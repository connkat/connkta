import "../App.css";

import Nav from "./Nav";
import Writing from "./resources/writing";
import Art from "./resources/art";
import Resume from "./resources/resume";
import Hiking from "./resources/hiking";

function Resources() {
  return (
    <body>
      <div className="Resources">
        <Nav />
        <Writing />
        <Resume />
        <Art />
        <Hiking />
      </div>
    </body>
  );
}

export default Resources;
