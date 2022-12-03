import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  ul{
    list-style-type: none;
  }
  
:root {
  --color-primary:#FF577F;
  --color-primary-hover: #FF427F;
  --color-primary-disableb: #59323F;
  --color-gray-0: #F8F9FA;
  --color-gray-1: #868E96;
  --color-gray-2: #343B41 ;
  --color-gray-3: #212529;
  --color-gray-4: #121214;
  --color-sucess: #3FE864;
  --color-negative: #E83F5B;

}

body{
  background-color: var(--color-gray-4);
}
`;

export const StyledContainer = styled.main`
  width: 100vw;
  max-width: 1440px;
  min-height: 100vh;
  height: 100%;

  margin: 0 auto;
  padding-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
