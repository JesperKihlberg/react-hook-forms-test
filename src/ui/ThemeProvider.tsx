import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import { createTheme, CssBaseline } from "@material-ui/core";

const theme = createTheme();

const ThemeProvider: React.FC = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
