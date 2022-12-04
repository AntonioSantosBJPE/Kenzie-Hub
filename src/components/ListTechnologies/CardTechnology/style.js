import styled from "styled-components";

export const StyledCardTech = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 49px;

  border-radius: 4px;
  padding: 12px;
  background-color: var(--color-gray-4);

  cursor: pointer;

  &:hover {
    background-color: var(--color-gray-2);
  }

  @media (min-width: 450px) {
    padding: 25px 12px;
  }
`;
