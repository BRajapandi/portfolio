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
          background-color: var(--grey-1000);
          display: grid;
          grid-template-columns: 35px 1fr;
          gap: 5px;
          color: #fff;
          padding: 2px 6px;
          border-radius: 6px;
          box-shadow: 0px 0px 4px var(--dark-text-color4);
        }
        .arrowWrapper {
          position: absolute;
          left: 5px;
          top: 10px;
          transform: rotateZ(-3deg);
          animation-name: arrowWrapper;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
        .firstColCard1 {
          position: absolute;
          left: 40px;
          top: 180px;
          animation-name: firstColCard1;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          .icon {
            vertical-align: middle;
            text-align: center;
            color: #4aedc2;
            font-size: 28px;
          }
          .content {
            color: #4aedc2;
            font-size: 16px;
            font-weight: 600;
            letter-spacing: 1.2px;
          }
        }
        .firstColCard2 {
          position: absolute;
          right: 10px;
          bottom: 10px;
          .icon {
            vertical-align: middle;
            text-align: center;
            color: #fbc02d;
            font-size: 28px;
          }
          .content {
            color: #fbc02d;
            font-size: 16px;
            font-weight: 600;
            letter-spacing: 1.2px;
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
          text-align: justify;
          text-indent: 50px;
          font-size: 20px;
        }
      }
    }
  }
  @keyframes arrowWrapper {
    0% {
      transform: rotateZ(-3deg);
    }
    25% {
      transform: rotateZ(3deg);
    }
    50% {
      transform: rotateZ(-3deg);
    }
    75% {
      transform: rotateZ(3deg);
    }
    100% {
      transform: rotateZ(-3deg);
    }
  }
  @keyframes firstColCard1 {
    0% {
      top: 180px;
      scale: 1;
    }
    50% {
      top: 185px;
      scale: 1.01;
    }
    100% {
      top: 180px;
      scale: 1;
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
