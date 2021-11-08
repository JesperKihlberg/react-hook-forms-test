import React from "react";
import DrinkSelector from "./forms/drink-selector-form/controls/DrinkSelector";
import MainPage from "./pages/MainPage";
import MenuAppBar from "./ui/MenuAppBar";
import ThemeProvider from "./ui/ThemeProvider";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MenuAppBar />
      <MainPage />
      <DrinkSelector />
    </ThemeProvider>
  );
};

export default App;
