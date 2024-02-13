import Wrapped from "./HomeStyle";
import { FaReact, FaNodeJs } from "react-icons/fa6"; //FaHtml5, FaGithub
import { SiMongodb } from "react-icons/si";
import mine from "../../asserts/mine/profile.png";
import ScondRow from "./ScondRow";
function Home() {
  return (
    <Wrapped>
      <div className="firstRow">
        <div className="firstCol">
          <div className="ColWrapper">
            <div className="hello">
              Hello, <span>I'm</span>
            </div>
            <div className="name">RAJAPANDI</div>
            <div className="profileSub">
              {/**Full-Stack */}A <span>web</span> Developer From Madurai
            </div>
            <div>
              I'm creative web Developer based in Madurai, and I'm very
              passionate and dedicated to my work
            </div>
            <div className="abtBtnWrapper">
              <button>About Me</button>
            </div>
          </div>
        </div>
        <div className="secondCol">
          <div className="profileTechWrapper">
            <span className="techIcon">
              <FaReact />
            </span>
            <span className="techIcon">
              <FaNodeJs />
            </span>
            <span className="techIcon">
              <SiMongodb />
            </span>
          </div>
          <div className="profileBg"></div>
          <div className="profileWrapper">
            <img
              className="profile"
              src={mine}
              alt="Rajapandi Profile Resume"
            />
          </div>
        </div>
      </div>
      <ScondRow />
    </Wrapped>
  );
}
export default Home;
