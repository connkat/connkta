import cartoon from "../images/cartoon.png";
import "../App.css";
import Nav from "./Nav";

function Home() {
  return (
    <div className="App">
      <Nav />
      <body>
        <div class="columns">
          <div class="column1">
            <h1>Concatenate (verb)</h1>
            <p>con·​cat·​e·​nate | \ kän-ˈka-tə-ˌnāt</p>
            <p>: to link together in a series of chain</p>
          </div>

          <img src={cartoon} className="App-logo" alt="App-logo" />

          <div class="column2">
            <h1>Connkat (proper noun)</h1>
            <p>Connolly, Katherine | \ Kat</p>
            <p>: a link between development and creativity</p>
          </div>
        </div>

        <div class="about-me">
          With a Bachelor of Arts(Hons), a Masters of Public Policy, and an
          artistic portfolio that spans a wide variety of media forms, I found
          my true calling in software development in 2018. With such a varied
          and successful career behind me, I apply myself to my work beyond the
          constraints of a normal dev.
        </div>
      </body>
    </div>
  );
}

export default Home;
