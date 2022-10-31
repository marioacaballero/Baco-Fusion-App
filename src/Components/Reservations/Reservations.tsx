import React from "react";
import Maps from "../GoogleMaps/Maps";
import style from "./Reservations.module.css";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { SlNote } from "react-icons/sl";
import { BsInfoCircleFill } from "react-icons/bs";

export const Reservations = () => {
  return (
    <div className={style.reservations}>
      <section>
        <div>
          <h2>Abierto de martes a domingo</h2>
          <h3>12:00 - 15:00 hs. | 20:00 - 00.00 hs.</h3>
        </div>
        <section>
          <div>
            <div>
              <FaMapMarkerAlt className={style.icon} />
              <h2>Dirección</h2>
            </div>
            <h3>
              Rocamora 129 <br /> Concepción del Uruguay <br /> Entre Ríos,
              Argentina
            </h3>
          </div>
          <div className={style.divSection}>
            <div>
              <FaPhoneAlt className={style.icon} />
              <h2>Teléfono</h2>
            </div>
            <h3>(5493442) 549695</h3>
          </div>
          <div>
            <div>
              <SlNote className={style.icon} />
              <h2>Reservas</h2>
            </div>
            <h3>
              <a
                href="https://api.whatsapp.com/send?phone=5493442549695&text=Hola,%20quisiera%20reservar%20una%20mesa%20para%20"
                id="btn-wsp"
                target="_black"
              >
                Reservar una mesa
              </a>
            </h3>
          </div>
        </section>
      </section>
      <div className={style.info}>
        <BsInfoCircleFill className={style.icon2} />
        <h3>De viernes a domingo</h3>
        <p>Solo se trabaja con reserva, los esperamos.</p>
      </div>
      <Maps />
    </div>
  );
};
