import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { About } from "./Components/About/About";
import { History } from "./Components/History/History";
import { NavBar } from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
