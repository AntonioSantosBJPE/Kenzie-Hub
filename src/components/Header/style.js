import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: ${({ alignJustify }) => alignJustify};

  img {
    width: 98px;
    height: 18px;
  }

  @media (min-width: 450px) {
    img {
      width: 122px;
      height: 21px;
    }
  }
`;
