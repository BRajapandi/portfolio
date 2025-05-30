import Wrapped from "./AboutStyle";
import AboutImg from "../../asserts/svg/aboutImgBack.svg";
import Profile from "../../asserts/mine/profile2.png";
import { MdWorkHistory } from "react-icons/md";
import { TbBrandReact } from "react-icons/tb";
import CurvedArrow from "../../asserts/svg/curled-arrow.svg";
import Rocket from "../../asserts/svg/rocket";
import Star from "../../asserts/svg/star";
import { useEffect } from "react";
import { IoDiamond } from "react-icons/io5";
import { SlGraph } from "react-icons/sl";
import { FaMobile, FaLinkedin } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { FaMapLocationDot, FaGithub } from "react-icons/fa6";
import CurledArrow from "../../asserts/svg/about-contact.svg";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapped text="blue">
      <div className="AboutWrapper">
        <div className="firstRow">
          <div className="firstCol">
            <div className="firstImgBGWrapper">
              <img src={AboutImg} className="firstImgBG" data-aos="fade-up" />
            </div>
            <div className="firstMineImgWrapper">
              <img
                src={Profile}
                className="firstMineImg"
                data-aos="fade-down"
                data-aos-delay="300"
              />
            </div>
            <div className="arrowWrapper">
              <img src={CurvedArrow} />
            </div>
            <div
              className="cardalign firstColCard1"
              data-aos="flip-left"
              data-aos-delay="600"
            >
              <span className="icon">
                <MdWorkHistory />
              </span>
              <span className="content">
                <div>Total Experience</div>
                <div>3 years 2 months</div>
              </span>
            </div>
            <div
              className="cardalign firstColCard2"
              data-aos="flip-left"
              data-aos-delay="600"
            >
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
              A Software Engineer with Three years and one month of hands-on
              experience and who values innovation, ownership and specialized in
              React js. A rapid learner who eager to grow and handle stressful
              situation in an effective manner and excellent team player with
              well efficient code skill.
            </div>
          </div>
        </div>
      </div>
      <div className="Title">ABOUT</div>
      <div className="experienceWrapper">
        <div className="experienceCard">
          <div className="start">
            <Star />
            <div>
              <div>SOFTWARE ENGINEER</div>
              <div>Feb 2021 - Present</div>
            </div>
          </div>
          <div className="experience">
            <div>
              <div className="title">
                Working as a Software Engineer at Tarnea Technology Solutions
                Pvt Ltd from Feb 2021 - present ( Three years and one month of
                experience )
              </div>
              <ul style={{ marginBottom: "0px" }}>
                <li>
                  Built responsive e-commerce and customer management website
                  for 300+ customers using semantic HTML5. javaScript, React js
                  & CSS compiled using webpack build tools
                </li>
                <li>
                  Promote better components lifecycle practices, increasing
                  turnaround speed by 23% with 100% deadline adherence
                </li>
                <li>
                  Developed highly responsive web pages with bootstrap & CSS
                  Framework like SAAS & Tailwind and Built Reusable Components
                  on UI & optimizing calls to minimized HTTPs requests by 32%
                </li>
                <li>
                  Implementing user access restriction in application using
                  React Router
                </li>
                <li>Create a REST API’s SpringBoot</li>
              </ul>
            </div>
          </div>
          <div className="end">
            <Rocket />
          </div>
        </div>
        <div className="expCard2">
          <div className="col2Wrapper">
            <div className="col2Card2">
              <span className="icon">
                <IoDiamond />
              </span>
              <span className="subTitle">Visual Design</span>
              <span>
                Create user interface design with unique and modern ideas
              </span>
            </div>
          </div>
          <div
            className="col2Wrapper"
            style={{ alignItems: "center", justifyContent: "flex-start" }}
          >
            <div className="col2Card2">
              <span className="icon">
                <SlGraph />
              </span>
              <span className="subTitle">Design Prototype</span>
              <span>
                {" "}
                Create user interface design with unique and modern ideas
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="contactWrapper">
        <div className="TitleWrapper">
          <div className="contactTitle">Reach Me</div>
        </div>
        <div className="contRow">
          <div className="contCol1">
            <div className="contCard">
              <FaMobile className="iconWrapp" />
              <span className="contact">
                <span>Mobile</span>
                <span>8667494635</span>
              </span>
            </div>
            <div className="contCard" style={{ alignSelf: "flex-end" }}>
              <MdMarkEmailRead className="iconWrapp" />
              <span className="contact">
                <span>E-Mail</span>
                <span>rajapandib29@gmail.com</span>
              </span>
            </div>
            <div className="contCard">
              <FaLinkedin className="iconWrapp" />
              <span className="contact">
                <span>Linkedin</span>
                <span>linkedin.com/rajapandib</span>
              </span>
            </div>
            <div className="contCard" style={{ alignSelf: "flex-end" }}>
              <FaGithub className="iconWrapp" />
              <span className="contact">
                <span>GitHub</span>
                <span>github.com/BRajapandi</span>
              </span>
            </div>
            <div className="contCard contAddress">
              <FaMapLocationDot className="iconWrapp" />
              <span className="contact">
                <span>Address</span>
                <span>
                  19,Hemalatha illam manavalan nagar main road, Sellur,
                  Madurai-625002, TamilNadu
                </span>
              </span>
            </div>
          </div>
          <div className="contCol2">
            <img src={CurledArrow} className="contCardImg" />
          </div>
        </div>
      </div>
    </Wrapped>
  );
}
export default About;
