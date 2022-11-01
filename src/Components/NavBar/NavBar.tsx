import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./NavBar.module.css";
import logo from "../../Baco/Logo/LogoNav.png";

export const NavBar = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const toggle: Function = () => {
    setIsOpen(!isOpen);
  };

  const goTo: Function = (path: String) => {
    toggle();
    navigate(`${path}`);
    window.scroll(0, 0);
  };

  return (
    <div className={style.navBar}>
      <section onClick={() => navigate("/")}>
        <img alt="baco" src={logo} />
        <div>
          <h2>Baco Fusión</h2>
          <p>Vinos y Algo Más</p>
        </div>
      </section>
      <label
        htmlFor="menu"
        onClick={() => toggle()}
        className={style.nav__label}
      >
        <div className={style.btn_hmb} id="btn_hmb">
          <div className={style.linea1} id="linea1"></div>
          <div className={style.linea2} id="linea2"></div>
          <div className={style.linea3} id="linea3"></div>
        </div>
      </label>
      <input
        type="checkbox"
        id="menu"
        checked={isOpen}
        className={style.nav__input}
      />
      <div className={style.nav__menu}>
        <h2 onClick={() => goTo("/")}>Inicio</h2>
        <h2 onClick={() => goTo("/gallery")}>Galeria</h2>
        <h2 onClick={() => goTo("/menu/#carnes")}>Menu</h2>
      </div>
      <section>
        <h3 onClick={() => goTo("/reservations")}>Reservas</h3>
      </section>
    </div>
  );
};
