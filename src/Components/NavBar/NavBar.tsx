import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <div className={style.navBar}>
      <Link to={"/"}>LOGO BACO</Link>
      <Link to={"/"}>Sobre nosotros</Link>
      <Link to={"/menu"}>Menu</Link>
      <Link to={"/reservations"}>Reservas</Link>
    </div>
  );
};
