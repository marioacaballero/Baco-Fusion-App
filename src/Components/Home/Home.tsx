import React from "react";
import { Carousel } from "antd";
import frente from "../../Baco/Lugar/Frente.jpg";
import frente2 from "../../Baco/Lugar/Frente2.jpg";
import copa from "../../Baco/Lugar/Copa.jpg";
import copa2 from "../../Baco/Lugar/Copa2.jpg";
import pescado from "../../Baco/Lugar/pescadoRelleno.jpg";
import hall from "../../Baco/Lugar/Hall.jpg";
import adentro from "../../Baco/Lugar/Adentro4.jpg";
import promo from "../../Baco/Promos/Promo1.jpg";
import promo2 from "../../Baco/Promos/Promo2.jpg";
import style from "./Home.module.css";

export const Home: React.FC = () => {
  return (
    <div className={style.mainDiv}>
      <div className={style.promo}>
        <Carousel autoplay>
          <img alt="promo" src={promo} className={style.imgPr} />
          <img alt="promo2" src={promo2} className={style.imgPr} />
        </Carousel>
      </div>
      <div className={style.section}>
        <div className={style.caro}>
          <Carousel autoplay>
            <img alt="frente" src={frente} className={style.imgC} />
            <img alt="adentro" src={adentro} className={style.imgC} />
            <img alt="copa" src={copa} className={style.imgC} />
            <img alt="pescado" src={pescado} className={style.imgC} />
            <img alt="frente2" src={frente2} className={style.imgC} />
            <img alt="copa2" src={copa2} className={style.imgC} />
            <img alt="hall" src={hall} className={style.imgC} />
          </Carousel>
        </div>

        <section>
          <img />
          <div>
            <h2>Baco Fusion</h2>
            <p>
              Baco Fusion es un restaurant que combina la cocina fusion con ...,
              sus especialidades en pescado lo hacen destacar sobre el resto.
              Atendido por sus dueños se produce un encanto peculiar, generando
              un ambiente muy familiar para disfrutar de buenos momentos.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
