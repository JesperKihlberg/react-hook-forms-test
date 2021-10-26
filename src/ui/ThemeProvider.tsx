import { createTheme, CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import React from "react";
// import { ThemeProvider as MuiThemeProvider } from "@mui/styles";
// import { createTheme, CssBaseline } from "@mui/core";

const theme = createTheme();

const TestThemeProvider: React.FC = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default TestThemeProvider;
