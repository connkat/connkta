import "./Home.css";
import cartoon from "../images/cartoon.png";
import github from "../images/github.png";

function Home() {
  return (
    <div className="home">
      <body>
        <div class="columns">
          <div class="column1">
            <h1>Concatenate (verb)</h1>
            <p>con·​cat·​e·​nate | \ kän-ˈka-tə-ˌnāt</p>
            <p>: to link together in a series of chain</p>
          </div>
          <div class="centre-column">
            <img src={cartoon} className="app-logo" alt="app-logo" />
            <div class="subtext">
              Art by{" "}
              <a href="https://www.instagram.com/perlette.pdf/">
                Marin Perlette
              </a>
            </div>
          </div>

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
          constraints of a normal dev.<a href="https://www.github.com/connkat">
            <img src={github} alt="github" className="github-tiny"/>
          </a>
        </div>
      </body>
    </div>
  );
}

export default Home;
