import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./NavBar.module.css";
import logo from "../../Baco/Logo/LogoNav.png";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className={style.navBar}>
      <section>
        <img alt="baco" src={logo} />
        <div>
          <h2>Baco Fusion</h2>
          <p>Vinos y Algo Mas</p>
        </div>
      </section>
      <section>
        <h2 onClick={() => navigate("/")}>Inicio</h2>
        <h2 onClick={() => navigate("/")}>Galeria</h2>
        <h2 onClick={() => navigate("/menu/#carnes")}>Menu</h2>
      </section>
      <section>
        <h3 onClick={() => navigate("/reservations")}>Reservas</h3>
      </section>
    </div>
  );
};
