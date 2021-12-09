import React from "react";
import { ThemeProvider } from "styled-components";
import {theme} from '../../theme/mainTheme';
import GlobalStyle from "../../theme/GlobalStyle";
import MainTempalte from '../../Templates/MainTemplate';

const Root = () => (
  <div>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
      <MainTempalte/>
    </ThemeProvider>
  </div>
)

export default Root;
