import styled from "styled-components";
import AboutBg from "../../asserts/svg/backgound.svg";
const Wrapped = styled.div`
  padding-top: 3vh;
  .AboutWrapper {
    padding-top: calc(6vh - 15px);
    min-height: 100vh;
    .firstRow {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      height: 80vh;
      .firstCol {
        position: relative;
        height: 100%;
        width: 100%;
        .firstImgBGWrapper {
          height: 100%;
          width: 100%;
          position: absolute;
          top: 70%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(0deg);
        }
        .firstMineImgWrapper {
          width: 68%;
          position: absolute;
          top: 45%;
          left: 53%;
          transform: translate(-50%, -50%) rotate(0deg);
          .firstMineImg {
            filter: brightness(1.3) contrast(111%) saturate(1.1);
          }
        }
        .cardalign {
          background-color: var(--dark-text-color4);
          display: grid;
          grid-template-columns: 35px 1fr;
          gap: 5px;
          color: #fff;
          padding: 2px 6px;
          border-radius: 6px;
          box-shadow: 1px 1px 3px var(--dark-text-color4);
        }
        .arrowWrapper {
          position: absolute;
          left: 5px;
          top: 10px;
          transform: rotateZ(348deg);
        }
        .firstColCard1 {
          position: absolute;
          left: 40px;
          top: 180px;
          .icon {
            vertical-align: middle;
            text-align: center;
            color: var(--grey-900);
            font-size: 28px;
          }
          .content {
            color: var(--grey-900);
            font-size: 16px;
            font-weight: 600;
            letter-spacing: 1cap.5px;
          }
        }
        .firstColCard2 {
          position: absolute;
          right: 10px;
          bottom: 10px;
          .icon {
            vertical-align: middle;
            text-align: center;
            color: var(--grey-900);
            font-size: 28px;
          }
          .content {
            color: var(--grey-900);
            font-size: 16px;
            font-weight: 600;
            letter-spacing: 1cap.5px;
          }
        }
      }
      .secondCol {
        padding-top: 100px;
        color: #fff;
        .Title {
          font-size: 25px;
          font-weight: 800;
          letter-spacing: 2px;
          /* position: relative; */
          &::after {
            /* position: absolute; */
            content: "";
            display: inline-block;
            height: 0.1em;
            vertical-align: middle;
            width: 200px;
            margin-right: -100%;
            margin-left: 10px;
            border-radius: 4px;
            border-top: 4px solid var(--dark-text-color8);
          }
        }
        .subTitle {
          font-size: 20px;
          font-weight: 600;
          margin: 10px 0px;
        }
        .aboutme {
          width: 70%;
          margin: 15px 0px 0px 15px;
          padding-left: 16px;
          border-left: 2px dashed var(--dark-text-color8);
          text-align: justify;
          text-indent: 50px;
          font-size: 20px;
        }
      }
    }
  }

  .AboutWrapper {
    background-image: url(${AboutBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default Wrapped;
