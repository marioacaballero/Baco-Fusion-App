import React from "react";
import style from "./Footer.module.css";

export const Copyright = () => {
  return (
    <h5 className={style.copy}>
      {"Copyright © " + new Date().getFullYear()}{" "}
      <a href="https://bacofusion.vercel.app/"> Baco Fusión</a>. Todos los
      derechos reservados. | Diseñado por{" "}
      <a href="https://bacofusion.vercel.app/"> CaneDevs</a>
    </h5>
  );
};
