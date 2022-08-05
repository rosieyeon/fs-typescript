import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Summoners from '../pages/Summoners';
import SummonerGG from 'pages/SummonerGG';
import { AppLayout, NavBar, NavBarItem } from './App.styled';

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
          <Route path="summoners/:summonerName" element={<SummonerGG />} />
        </Routes>
      </Router>
    </AppLayout>
  );
}

export default App;
