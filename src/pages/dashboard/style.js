import styled from "styled-components";

export const StyledContainerDashboard = styled.section`
  width: 100%;

  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledContainerCentral = styled.div`
  width: 100%;
  max-width: 730px;
  padding: 0 15px;
`;

export const StyledSpanLine = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background-color: var(--color-gray-3);
`;

export const StyledBoxInfosUser = styled.div`
  width: 100%;
  height: fit-content;

  padding: 35px 0;

  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 450px) {
    padding: 45px 0;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledBoxInfosPage = styled.div`
  width: 100%;
  height: fit-content;

  padding: 35px 0;

  display: flex;
  flex-direction: column;
  gap: 10px;

  color: var(--color-gray-0);

  @media (min-width: 450px) {
    padding: 45px 0;
  }
`;
