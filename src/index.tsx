import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Router from "./services/routes";
import GlobalStyle from "./styles/global";
import Theme from "./styles/theme";

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </ThemeProvider>,
  document.querySelector("#root"),
);
