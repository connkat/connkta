import "../App.css";
import Nav from "./Nav";
import writing from "../images/writing.png";
import hiking from "../images/hiking.png";
import art from "../images/art.png";
import resume from "../images/resume.png";


function Resources() {
  return (
    <div className="Resources">
      <Nav />
      <div className="columns">
        <div className="column1b">
          <div className="title">
          <img src={writing} className="subtitle" alt="writing" />
          </div>
          <ul>
          Check me out on <a href="https://connkat.medium.com/">Medium</a>
          </ul>
          <ul>
            <a href="https://www.linkedin.com/pulse/should-you-learn-code-while-self-isolation-resources-kat-connolly">
              Should You Learn to Code in Self-Isolation
            </a>
          </ul>
          <ul>
            <a href="https://www.linkedin.com/posts/connkat_how-to-get-involved-with-calgarys-tech-scene-activity-6749479086315462657-nrdT">
              How to Get Involved in Calgary's Tech Scene
            </a>
          </ul>
          <ul>
            <a href="https://www.linkedin.com/pulse/practical-reasons-against-bootcamps-kat-connolly/?trackingId=pvQYEK%2B3SsqrhZwyZW2j0w%3D%3D">
              Practical Reasons For (and Against) Bootcamps
            </a>
          </ul>
          <ul>
            <a href="https://www.lighthouselabs.ca/en/blog/how-i-learned-to-love-errors?utm_source=facebook&utm_medium=social&utm_campaign=imposter-syndrome-quote">
              Imposter Syndrome: How I Learned to Love Errors
            </a>
          </ul>
        <div className="title">
          <br />
          <img src={resume} className="subtitle" alt="resume" />
          <ul><a href="https://github.com/connkat/Resume/blob/master/KConnolly.pdf" target="_blank" rel="noreferrer">Download/View</a></ul>
        </div>
        </div>
        <div className="column2b">
          <div className="title">
          <img src={art} className="subtitle" alt="art" />
          </div>
          <ul>
            <a href="https://www.instagram.com/panrobinco/?hl=en">
              Pan Robin Co.
            </a>
          </ul>
          <ul>
          <img src={hiking} className="subtitle" alt="hiking" />
            <a href="http://rockymountainmerit.co">Rocky Mountain Merit Co.</a>
          </ul>
          <ul>
            <iframe
              width="315"
              height="220"
              src="https://www.youtube.com/embed/vH_2PWIVLMg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resources;
