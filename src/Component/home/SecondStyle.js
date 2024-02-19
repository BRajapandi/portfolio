import styled from "styled-components";

const Wrapped = styled.section`
  .secondRow {
    box-sizing: border-box;
    margin-top: 15px;
    .cardWrapperstyle {
      display: grid;
      grid-template-columns: 240px 240px 240px;
      gap: 10rem;
      align-items: center;
      justify-content: center;
      .cardstyle {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: start;
        .icon {
          position: relative;
          .actualIcon {
            position: absolute;
            text-align: center;
            font-size: 59px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(0deg);
          }
          .c1 {
            color: var(--dark-text-color8);
          }
          .c2 {
            color: #4aedc2;
          }
          .secondRowCircle {
            animation-name: secondRowCircle;
            animation-duration: 20s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          @keyframes secondRowCircle {
            100% {
              transform: rotate(360deg);
            }
          }
        }
        .cardContent {
          margin: 20px 3px;
          text-indent: 40px;
          text-align: justify;
          overflow: hidden;
        }
      }
    }
    .showMoreStyle {
      a {
        text-align: center;
        display: block;
        text-decoration: none;
        font-size: 20px;
        font-weight: 600;
        color: var(--dark-text-color8);
      }
      .downArrowWrapped {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
        margin: -10px 0px 20px 0px;
        .downArrow {
          position: absolute;
          &:nth-child(1) {
            top: 3px;
            height: 40px;
          }
          &:nth-child(2) {
            top: 6px;
            height: 50px;
          }
        }
      }
    }
  }
`;
export default Wrapped;
