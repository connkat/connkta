import "../../pages/Resources.css"
import writing from "../../images/writing.png";
import medium from "../../images/medium.png";

function Writing() {
  return (
    <div className="section">
      <div className="title">
        <img src={writing} className="title-img" alt="writing" />
      </div>
      <div className="content">
        <div className="desktopContent">
          <ul>
            <a href="https://www.linkedin.com/pulse/should-you-learn-code-while-self-isolation-resources-kat-connolly">
              Should You Learn to Code in Self-Isolation
            </a>
          </ul>
        </div>
        <div className="desktopContent">
          <ul>
            <a href="https://www.linkedin.com/posts/connkat_how-to-get-involved-with-calgarys-tech-scene-activity-6749479086315462657-nrdT">
              How to Get Involved in Calgary's Tech Scene
            </a>
          </ul>
        </div>
        <ul>
          <b>
            Check me out on{" "}
            <a href="https://connkat.medium.com/">
              <img src={medium} alt="medium" className="medium" />
            </a>
          </b>
        </ul>
        <div className="desktopContent">
          <ul>
            <a href="https://www.linkedin.com/pulse/practical-reasons-against-bootcamps-kat-connolly/?trackingId=pvQYEK%2B3SsqrhZwyZW2j0w%3D%3D">
              Practical Reasons For (and Against) Bootcamps
            </a>
          </ul>
        </div>
        <div className="desktopContent">
          <ul>
            <a href="https://www.lighthouselabs.ca/en/blog/how-i-learned-to-love-errors?utm_source=facebook&utm_medium=social&utm_campaign=imposter-syndrome-quote">
              Imposter Syndrome: How I Learned to Love Errors
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Writing;
