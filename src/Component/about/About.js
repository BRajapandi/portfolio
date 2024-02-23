import Wrapped from "./AboutStyle";
import AboutImg from "../../asserts/svg/aboutImgBack.svg";
import Profile from "../../asserts/mine/profile2.png";
import { MdWorkHistory } from "react-icons/md";
import { TbBrandReact } from "react-icons/tb";
import CurvedArrow from "../../asserts/svg/curled-arrow.svg";
import { TbBrandNodejs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

function About() {
  return (
    <Wrapped text="blue">
      <div className="AboutWrapper">
        <div className="firstRow">
          <div className="firstCol">
            <div className="firstImgBGWrapper">
              <img src={AboutImg} className="firstImgBG" />
            </div>
            <div className="firstMineImgWrapper">
              <img src={Profile} className="firstMineImg" />
            </div>
            <div className="arrowWrapper">
              <img src={CurvedArrow} />
            </div>
            <div className="cardalign firstColCard1">
              <span className="icon">
                <MdWorkHistory />
              </span>
              <span className="content">
                <div>Total Experience</div>
                <div>3 years 2 months</div>
              </span>
            </div>
            <div className="cardalign firstColCard2">
              <span className="icon">
                <TbBrandReact />
              </span>
              <span className="content">
                <div>Experience React js</div>
                <div>3 years 2 months</div>
              </span>
            </div>
          </div>
          <div className="secondCol">
            <div className="Title">ABOUT</div>
            <div className="subTitle">Nice to Meet you all</div>
            <div className="aboutme">
              I'm Rajapandi from Madurai and I'm a full-stack developer with 3
              years and 2 months of experience. I have completed a bachelor’s of
              engineering with a specialization in computer science and
              engineering in 2020. Currently, I'm working as a Software Engineer
              at tarnea technology solution private limited.
            </div>
          </div>
        </div>
      </div>
    </Wrapped>
  );
}
export default About;
