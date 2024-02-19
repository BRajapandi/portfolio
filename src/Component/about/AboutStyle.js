import styled from "styled-components";

const Wrapped = styled.div`
  .bannerWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 3vh;
    .bannerImg {
      height: 300px;
      width: 80vw;
    }
  }
  .primarySkillSize {
    display: flex;
    align-items: center;
    justify-content: center;
    .primarySkillsWrapper {
      width: 80vw;
      display: grid;
      align-items: center;
      justify-content: center;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 40px;
      color: aliceblue;
    }
  }
`;

export default Wrapped;
