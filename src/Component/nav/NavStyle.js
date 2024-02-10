import styled from "styled-components";

const Wrapped = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: var(--background-color);
  .header {
    position: fixed;
    width: 100vw;
    padding: 15px 15px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .navList {
      .navlink {
        text-decoration: none;
        color: var(--text-color);
        letter-spacing: 2px;
        margin-right: 25px;
        font-size: 17px;
        font-weight: 600;
        &:hover {
          color: var(--text-secondary-color);
        }
      }
    }
  }
`;

export default Wrapped;
