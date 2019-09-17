import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Routes from "./Routes";

export default () => (
  <ThemeProvider theme={Theme}>
    <>
      <GlobalStyles />
      <Routes isLoggedIn={false} />
    </>
  </ThemeProvider>
);
