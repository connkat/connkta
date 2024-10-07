// packages
// import Fade from "react-reveal/Fade";

// styling
import "./Resources.css";

// images
import Projects from "../components/resources/Projects";
import Writing from "../components/resources/Writing";
import Art from "../components/resources/Art";
import Resume from "../components/resources/Resume";
import Hiking from "../components/resources/Hiking";

function Resources() {
  return (
		<body>
			<div className="resources">
				{/* <Fade> */}
				<Projects />
				{/* </Fade> */}
				{/* <Fade> */}
				<Writing />
				{/* </Fade> */}
				{/* <Fade> */}
				<Resume />
				{/* </Fade> */}
				{/* <Fade> */}
				<Art />
				{/* </Fade> */}
				{/* <Fade> */}
				<Hiking />
				{/* </Fade> */}
			</div>
		</body>
	);
}

export default Resources;
