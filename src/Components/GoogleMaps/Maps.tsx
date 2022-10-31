import React from "react";
import style from "./Maps.module.css";

function Maps() {
  return (
    <div className={style.mapsDiv}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d561.5786029490622!2d-58.222733630783175!3d-32.481551130434376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95afdb00f6630b2b%3A0xa6bf504561d387af!2sBaco%20Fusi%C3%B3n%20Restaurant!5e0!3m2!1ses-419!2sar!4v1667239342461!5m2!1ses-419!2sar"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Maps;
