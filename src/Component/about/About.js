import Wrapped from "./AboutStyle";
import about_banner from "../../asserts/images/banner3.png";
import { MdWorkHistory } from "react-icons/md";
import { TbBrandReact } from "react-icons/tb";
import { TbBrandNodejs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

function About() {
  return (
    <Wrapped>
      <div className="bannerWrapper">
        <img src={about_banner} className="bannerImg" />
      </div>
      <div className="primarySkillSize">
        <div className="primarySkillsWrapper">
          <div className="primarySkill">
            <MdWorkHistory className="icon" />
            <span>Experience</span>
          </div>
          <div className="primarySkill">
            <TbBrandReact className="icon" />
            <span>React js</span>
          </div>
          <div className="primarySkill">
            <TbBrandNodejs className="icon" />
            <span>Node & Express js</span>
          </div>
          <div className="primarySkill">
            <BiLogoPostgresql className="icon" />
            <span>Postgresql</span>
          </div>
        </div>
      </div>
      <div></div>
    </Wrapped>
  );
}
export default About;
