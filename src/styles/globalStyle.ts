import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  @import url('https://hangeul.pstatic.net/hangeul_static/css/nanum-gothic.css');
  @import url('https://hangeul.pstatic.net/hangeul_static/css/nanum-square-round.css');
  font-family: 'NanumGothic';
  box-sizing: border-box;
}
`;

export default GlobalStyle;
