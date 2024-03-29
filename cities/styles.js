import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    padding: 0; 
    background-color: #104356;
    color: white; 
    display: flex;
    align-items: center;
  }
`;
