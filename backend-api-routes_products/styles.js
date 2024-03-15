import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    background-color:black;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    font-family: system-ui;
  }
`;
