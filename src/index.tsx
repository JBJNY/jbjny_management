import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Router from "./services/routes";
import GlobalStyle from "./styles/globalStyle";

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <Router />
  </BrowserRouter>,
  document.querySelector("#root"),
);
