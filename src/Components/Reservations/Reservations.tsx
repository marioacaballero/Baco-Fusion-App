import React from "react";
import style from "./Reservations.module.css";

export const Reservations = () => {
  return (
    <div className={style.reservations}>
      <div>Reservations</div>
      <section>
        <h3>
          Para reservas o consultas hace click{" "}
          <a
            href="https://api.whatsapp.com/send?phone=543416745943"
            id="btn-wsp"
            target="_black"
          >
            ACÁ
          </a>{" "}
          o comunicate a nuestros telefonos{" "}
        </h3>

        <h4>Importante! de viernes a domingos SOLO CON RESERVA.</h4>
        <a
          href="https://api.whatsapp.com/send?phone=543416745943"
          id="btn-wsp"
          target="_black"
        >
          ICON
        </a>
      </section>
    </div>
  );
};
