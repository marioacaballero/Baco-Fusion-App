import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { NavBar } from "./Components/NavBar/NavBar";
import "antd/dist/antd.css";
import { Footer } from "./Components/Footer/Footer";
import { Menu } from "./Components/Menu/Menu";
import { Reservations } from "./Components/Reservations/Reservations";
import { Galery } from "./Components/Galery/Galery";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/galery" element={<Galery />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
