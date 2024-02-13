import { TbTargetArrow } from "react-icons/tb";
import { GiAchievement } from "react-icons/gi";
import { FcIdea } from "react-icons/fc";
import Circle from "../../asserts/svg/CircleSVG";
function ScondRow() {
  return (
    <div className="secondRow">
      <div className="cardWrapperstyle">
        <div className="cardstyle">
          <span className="icon">
            <TbTargetArrow />
            <Circle fill="#1c1c1c" />
          </span>
          <span>
            Developed a Sharpest, Cleanest and intentional looks of pixel
            perfect design with responsive. And Maintain a clear vision of the
            final product
          </span>
        </div>
        <div className="cardstyle">
          <span className="icon">
            <GiAchievement />
            <Circle />
          </span>
          <span>
            Developed a High Quality website with react concepts, reduced a code
            duplication and improve the user experience
          </span>
        </div>
        <div className="cardstyle">
          <span className="icon">
            <FcIdea />
            <Circle />
          </span>
          <span>
            Incorporate the new feactures and idea's in project and maintained
            the clear execution of the final product and client requirements
          </span>
        </div>
      </div>
    </div>
  );
}
export default ScondRow;
