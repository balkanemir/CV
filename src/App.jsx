import Home from "./pages/Home";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import AcornFont from "./Acorn-Bold.woff";
import React from "react";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Acorn';
    src: url(${AcornFont}) format('woff');
    font-weight: normal;
    font-style: normal;;
    font-display: block;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
};

export default App;
