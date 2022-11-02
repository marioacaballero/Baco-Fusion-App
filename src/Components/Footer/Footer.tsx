import React from "react";
import style from "./Footer.module.css";
import logo from "../../Baco/Logo/LogoNav.png";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export const Footer = () => {

  function Copyright() {
    return (

      <h5>{"Copyright © " + new Date().getFullYear()}</h5>
    
    );
}

  return (
    <div className={style.footer}>
      <div>
        <h5>Powered by</h5>
        <h3>CaneDev</h3>
      </div>
      <div className={style.brand}>
        <img alt="baco" src={logo} />
        <Copyright />
        {/* <h2>Baco Fusión</h2>
        <p>Vinos y Algo Más</p> */}
      </div>
      <div className={style.redes}>
        <a href="https://www.facebook.com/BacoFusion/" target="_blank" rel="noreferrer">
          <BsFacebook  style={{ fontSize: 35 }} />
        </a>
        <a href="https://www.instagram.com/bacofusion/?hl=es" target="_blank" rel="noreferrer">
          <BsInstagram  style={{ fontSize: 35 }} />
        </a>
      </div>
    </div>
  );
};
