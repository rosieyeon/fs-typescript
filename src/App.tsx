import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Summoners from "./pages/summoners";
import GlobalStyle from "./styles/globalStyle";
import { theme } from "./styles/theme";

function App() {
  return;
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="summoners" element={<Summoners />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>;
}

export default App;
