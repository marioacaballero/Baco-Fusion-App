import React from 'react'
import { Link } from 'react-router-dom'
import style from "./NavBar.module.css"

export const NavBar = () => {
  return (
    <div className={style.navBar}>
        <Link to={"/"}>Inicio</Link>
        <Link to={"/about"}>Sobre nosotros</Link>
        <Link to={"/history"}>Nuestra historia</Link>
        <Link to={"/"}>Menu</Link>
        <Link to={"/"}>Reservas</Link>
    </div>
  )
}
