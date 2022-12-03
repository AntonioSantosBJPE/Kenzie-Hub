import styled from "styled-components";

export const StyledListTechnology = styled.ul`
  width: 100%;
  height: fit-content;

  margin-top: 10px;
  border-radius: 4px;
  padding: 25px 8px;
  background-color: var(--color-gray-3);

  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 450px) {
    padding: 25px;
  }
`;
