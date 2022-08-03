import { AppLayout, NavBar, NavBarItem } from "App.styled";
import SummonerGG from "pages/SummonerGG";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Summoners from "./pages/Summoners";

function App() {
  return (
    <AppLayout>
      <Router>
        <NavBar>
          <NavBarItem to="/">T1 Tube</NavBarItem>
          <NavBarItem to="/summoners">T1 Players</NavBarItem>
        </NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="summoners" element={<Summoners />} />
          <Route path=":summonerName" element={<SummonerGG />} />
          <Route path="search" element={<Search />} />
        </Routes>
      </Router>
    </AppLayout>
  );
}

export default App;
