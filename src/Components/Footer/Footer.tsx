import React from "react";
import style from "./Footer.module.css";
import logo from "../../Baco/Logo/LogoNav.png";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaMapMarkedAlt, FaPhoneSquareAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Copyright } from "./Copyright";

export const Footer = () => {
  const navigate = useNavigate();

  const goTo: Function = (path: String) => {
    navigate(`${path}`);
    scroll(0, 0);
  };

  return (
    <div className={style.footer}>
      <section>
        {/* <div>
        <h5>Powered by</h5>
        <h3>CaneDev</h3>
      </div> */}
        <div
          className={style.brand}
          onClick={() => goTo("/")}
          style={{ cursor: "pointer" }}
        >
          {/* <img alt="baco" src={logo} /> */}
          <h2>Baco Fusión</h2>
          <p>Vinos y Algo Más</p>
        </div>
        <div className={style.contact}>
          <h3>Contacto</h3>
          <div>
            <div>
              <FaPhoneSquareAlt style={{ fontSize: 22 }} />
              <h4>(5493442) 549695</h4>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=5493442549695&text=Hola,%20quisiera%20hacer%20una%20reserva%20a%20nombre%20de%20"
              target="_blank"
            >
              Reservas
            </a>
          </div>
        </div>
        <div className={style.point}>
          <h3>Ubicación</h3>
          <div>
            <FaMapMarkedAlt style={{ fontSize: 30 }} />
            <a
              href="https://www.google.com.ar/maps/place/Baco+Fusi%C3%B3n+Restaurant/@-32.4814829,-58.2249961,17z/data=!3m1!4b1!4m5!3m4!1s0x95afdb00f6630b2b:0xa6bf504561d387af!8m2!3d-32.4814874!4d-58.2228074"
              target="_blank"
            >
              Rocamora 129. C. del Uruguay, Entre Ríos
            </a>
          </div>
        </div>
        <div className={style.social}>
          <h3>Siguenos en</h3>
          <div className={style.redes}>
            <a
              href="https://www.facebook.com/BacoFusion/"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook style={{ fontSize: 35 }} />
            </a>
            <a
              href="https://www.instagram.com/bacofusion/?hl=es"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram style={{ fontSize: 35 }} />
            </a>
          </div>
        </div>
      </section>
      <Copyright/>
    </div>
  );
};
