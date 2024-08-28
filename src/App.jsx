import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import GameDetails from "./GameDetails";
import NavBar from "./NavBar";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/game/:id"
          element={<GameDetails />}
        />
      </Routes>
    </Router>
  );
};

export default App;
