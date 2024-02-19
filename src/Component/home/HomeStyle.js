import styled from "styled-components";
const Wrapped = styled.section`
  color: #fff;
  box-sizing: border-box;
  .firstRow {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 10vh;
    .secondCol {
      position: relative;
      width: 100%;
      height: 75vh;
      .profileTechWrapper {
        position: absolute;
        height: 410px;
        width: 410px;
        color: #fff;
        display: grid;
        grid-template-columns: 1fr 1fr;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(0deg);
        z-index: 3;
        * {
          display: flex;
          z-index: 3;
          * {
            height: 46px;
            width: 46px;
            border-radius: 4px;
            z-index: 3;
            padding: 6px;
          }
        }
        .techIcon {
          &:nth-child(1) {
            justify-content: center;
            svg {
              color: #00d9ff;
              background-color: #1c1c1c;
            }
          }
          &:nth-child(2) {
            align-items: center;
            justify-content: flex-end;
            svg {
              color: #529f41;
              background-color: #000000;
            }
          }
          &:nth-child(3) {
            align-items: end;
            justify-content: center;
            svg {
              color: #4faa41;
              background-color: #000000;
            }
          }
        }
      }
      .profileWrapper {
        position: absolute;
        height: 430px;
        width: 430px;
        top: 48%;
        left: 53%;
        transform: translate(-50%, -50%);
        .profile {
          height: 400px;
          border-bottom-left-radius: 15px;
          border-bottom-right-radius: 28px;
          filter: brightness(1.1) contrast(115%) saturate(1);
          animation-name: profileani;
          animation-duration: 10s;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
      }
      .profileBg {
        position: absolute;
        height: 430px;
        width: 430px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-image: linear-gradient(45deg, #3023ae 0%, #ff0099 100%);
        border-radius: 59% 41% 62% 38% / 69% 55% 45% 31%; //75% 25% 65% 35% / 31% 30% 70% 69%;
        animation-name: profileBg;
        animation-duration: 15s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
    }
    @keyframes profileBg {
      0% {
        border-radius: 59% 41% 62% 38% / 69% 55% 45% 31%;
        scale: 1;
      }
      20% {
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        scale: 1.06;
      }
      40% {
        border-radius: 61% 39% 31% 69% / 30% 30% 70% 70%;
        scale: 1.08;
      }
      60% {
        border-radius: 61% 39% 31% 69% / 54% 65% 35% 46%;
        scale: 1.03;
      }
      80% {
        border-radius: 48% 52% 70% 30% / 72% 63% 37% 28%;
        scale: 1.07;
      }
      100% {
        border-radius: 59% 41% 62% 38% / 69% 55% 45% 31%;
        scale: 1;
      }
    }
    @keyframes profileani {
      0% {
        transform: translateY(0px);
        filter: drop-shadow(5px 5px 6px black);
      }
      50% {
        transform: translateY(10px);
        filter: drop-shadow(9px 9px 6px black);
      }
      100% {
        transform: translateY(0px);
        filter: drop-shadow(5px 5px 6px black);
      }
    }
    .firstCol {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      .ColWrapper {
        width: 75%;
        .hello {
          font-size: 35px;
          font-weight: 600;
          overflow: hidden;
          z-index: 20;
          background-color: var(--background-color);
          span {
            color: #ffa500;
          }
        }
        .name {
          font-size: 55px;
          font-weight: 700;
          letter-spacing: 12px;
          overflow: hidden;
          margin-top: -20px !important;
        }
        .profileSub {
          position: relative;
          font-size: 30px;
          margin-top: 10px;
          span {
            letter-spacing: 5px;
            font-weight: 600;
            font-family: "Rubik Glitch";
            &::before {
              content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='70.63932' height='30.23866' viewBox='0 0 70.63932 20.23866' creator='Katerina Limpitsouni'%3E%3Cpath d='M2.41072,7.75929c17.02568-.71364,34.05136-1.42727,51.07704-2.14091l14.70022-.61616-.6646-4.9107c-12.91114,2.24931-25.50153,6.02077-37.59863,11.04984-1.14989,.47804-1.99105,1.41114-1.79075,2.743,.18277,1.21528,1.18621,2.16637,2.45535,2.1677,3.4797,.00364,6.85119,.81258,9.99116,2.3105v-4.31735c-1.72999,.82125-3.65929,1.50251-5.2661,2.545-1.85577,1.20401-2.56038,3.57856-1.73346,5.61093,.99904,2.45541,3.31379,2.88317,5.70214,3.03169,3.21346,.19982,3.20156-4.80092,0-5-.42704-.02655-.86602-.10566-1.29319-.10946-.13576-.00121,.18317,.04243,.17324,.1348-.03856,.35884-.0895-.27388,.03982,.08986,.16194,.45549,.043-.29009,.0075,.15826-.02632,.33249-.53569,.38661,.03405,.1632,.2588-.10148,.50866-.24147,.75941-.3605,1.36673-.64881,2.73345-1.29761,4.10018-1.94642,1.63647-.77686,1.63166-3.53897,0-4.31735-3.94824-1.8835-8.12283-2.98855-12.51475-2.99314l.6646,4.9107c12.09709-5.02907,24.68748-8.80052,37.59863-11.04984,2.7805-.4844,2.12863-5.02778-.6646-4.9107C51.16231,.71586,34.13662,1.42949,17.11094,2.14313L2.41072,2.75929c-3.20582,.13437-3.22276,5.13508,0,5h0Z' fill='%23ee4d51' origin='undraw'/%3E%3C/svg%3E");
              position: absolute;
              top: 15px;
            }
            &::after {
              content: "Full-Stack";
              position: absolute;
              color: #ee4d51;
              font-size: 25px;
              font-weight: 600;
              font-family: "Protest Revolution", sans-serif;
              transform: translate(-16px, -30px) rotate(-9deg);
            }
          }
        }

        .profileSubContent {
          font-size: 16px;
          color: #918f8f;
          overflow: hidden;
        }
        .abtBtnWrapper {
          button {
            padding: 10px 20px;
            border-radius: 6px;
            margin-top: 20px;
            background-color: #ee4d51;
            border: none;
            box-shadow: -1px -1px 3px var(--dark-text-color7);
            color: white;
            font-size: 16px;
            font-weight: 600;
            letter-spacing: 2px;
          }
        }
      }
    }
  }
`;

export default Wrapped;
