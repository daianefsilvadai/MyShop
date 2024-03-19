//css in js

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #f7f7f7;
  }

  body ,button, input{
    font-family: 'Poppins', sans-serif;
  }

  button{
    cursor: pointer; // fica uma mão no campo
    transition: filter 0.3s;

    &:hover{
      filter: brightness(1.2); // um brilho no botão
      transition: filter 0.3s;
    }

  }
`;
