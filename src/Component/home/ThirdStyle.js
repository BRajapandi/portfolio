import styled from "styled-components";

const Wrapped = styled.div`
  .title {
    font-size: 2.5rem;
    letter-spacing: 6px;
    text-align: center;
  }
  .skillsWrapper {
    display: grid;
    grid-template-columns: 240px 240px 240px 240px;
    gap: 4rem 5rem;
    align-items: center;
    justify-content: center;

    .skillCard {
      .skillTitle {
        color: var(--dark-text-color8);
        font-size: 18px;
        font-weight: 700;
        letter-spacing: 1.6px;
      }
      .progressBar {
        width: 100%;
        height: 6px;
        border: 0;
        border-radius: 20px;
        background: crimson;
        color: #4aedc2;
      }
      .progressBar::-moz-progress-bar {
        background: #4aedc2;
        border: 0;
        border-radius: 20px;
      }
      .progressBar::-webkit-progress-value {
        background: #4aedc2;
        border: 0;
        border-radius: 20px;
      }
      .progressBar::-webkit-progress-bar {
        background: #fff;
        border: 0;
        border-radius: 20px;
      }
    }
  }
`;

export default Wrapped;
