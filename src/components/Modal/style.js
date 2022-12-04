import styled from "styled-components";

export const StyledModalWrap = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  background-color: rgba(18, 18, 20, 0.5);

  padding: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledModal = styled.div`
  width: 100%;
  max-width: 369px;
  height: fit-content;

  border-radius: 4px;
  background-color: var(--color-gray-2);
`;

export const StyledModalHeader = styled.div`
  width: 100%;
  height: 40px;

  padding: 0 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 450px) {
    height: 50px;
  }
`;

export const StyledBoxForm = styled.div`
  width: 100%;
  height: fit-content;

  padding: 20px 15px;
  background-color: var(--color-gray-3);
`;
