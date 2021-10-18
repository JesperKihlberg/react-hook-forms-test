import React from "react";
import MainPage from "./pages/MainPage";
import MenuAppBar from "./ui/MenuAppBar";
import ThemeProvider from "./ui/ThemeProvider";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MenuAppBar />
      <MainPage />
    </ThemeProvider>
  );
};

export default App;
