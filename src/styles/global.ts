import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
      margin: 0;  
  }
  *{
    @import url("https://hangeul.pstatic.net/hangeul_static/css/nanum-gothic.css")
    font-family: 'NanumGothic'
  }
`;

export default GlobalStyle;
