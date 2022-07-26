import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Summoners from "./pages/Summoners";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="summoners" element={<Summoners />} />
          <Route path="search" element={<Search />} />
        </Routes>
      </Router>
    </Layout>
  );
}

const Layout = styled.div`
  color: white;
`;

export default App;
