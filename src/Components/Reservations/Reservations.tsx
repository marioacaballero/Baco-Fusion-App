import React from "react";
import style from "./Reservations.module.css";

export const Reservations = () => {
  return (
    <div className={style.reservations}>
      <section>
        <h3>
          Para reservas o consultas podes hacer click{" "}
          <a
            href="https://api.whatsapp.com/send?phone=5493442549695"
            id="btn-wsp"
            target="_black"
          >
            AQUÍ
          </a>{" "}
          o tambien podes comunicarte vía whatsapp al +5493442549695
        </h3>

        <h4>
          Información Importante! de viernes a domingos SOLO TRABAJAMOS CON
          RESERVA.
        </h4>
        <a
          href="https://api.whatsapp.com/send?phone=5493442549695"
          id="btn-wsp"
          target="_black"
        >
          WSP
        </a>
      </section>
    </div>
  );
};
