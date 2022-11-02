import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { NavBar } from "./Components/NavBar/NavBar";
import "antd/dist/antd.css";
import { Footer } from "./Components/Footer/Footer";
import { Menu } from "./Components/Menu/Menu";
import { Reservations } from "./Components/Reservations/Reservations";
import { Gallery } from "./Components/Gallery/Gallery";
import { ButtonToTop } from "./Components/ButtonToTop/ButtonToTop";
import { MenuQr } from "./Components/MenuQr/MenuQr";


function App() {
  return (
    <div className="App">

      <NavBar />
      <ButtonToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/qr" element={<MenuQr />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
