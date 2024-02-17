import { TbTargetArrow } from "react-icons/tb";
import { GiAchievement } from "react-icons/gi";
import { FcIdea } from "react-icons/fc";
import Circle from "../../asserts/svg/CircleSVG";
import DownArrow from "../../asserts/svg/DownArrow";
import { FaChevronDown } from "react-icons/fa6";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

function ScondRow() {
  return (
    <div className="secondRow">
      <div className="cardWrapperstyle">
        <div className="cardstyle">
          <span className="icon" data-aos="fade-up" data-aos-delay="1000">
            <TbTargetArrow className="actualIcon c1" />
            <Circle fill="#ee4d51" />
          </span>
          <div className="cardContent">
            <div data-aos="fade-right">
              Developed a Sharpest, Cleanest and intentional looks of pixel
              perfect design with responsive. And Maintain a clear vision of the
              final product
            </div>
          </div>
        </div>
        <div className="cardstyle">
          <span className="icon" data-aos="fade-up" data-aos-delay="1200">
            <GiAchievement className="actualIcon c2" />
            <Circle fill="#4aedc2" />
          </span>
          <div className="cardContent">
            <div data-aos="fade-down">
              Developed a High Quality website with react concepts, reduced a
              code duplication and improve the user experience
            </div>
          </div>
        </div>
        <div className="cardstyle">
          <span className="icon" data-aos="fade-up" data-aos-delay="1400">
            <FcIdea className="actualIcon" />
            <Circle fill="#FBC02D" />
          </span>
          <span className="cardContent">
            <div data-aos="fade-left">
              Incorporate the new feactures and idea's in project and maintained
              the clear execution of the final product and client requirements
            </div>
          </span>
        </div>
      </div>

      <div className="showMoreStyle">
        <Link to="/about">Reveal More</Link>
        <div className="downArrowWrapped">
          <DownArrow className="downArrow" />
          <DownArrow className="downArrow" />
        </div>
      </div>
    </div>
  );
}
export default ScondRow;
