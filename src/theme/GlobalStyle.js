import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles&display=swap');

  *,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fuzzy Bubbles', cursive;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
  }
` ;

export default GlobalStyle