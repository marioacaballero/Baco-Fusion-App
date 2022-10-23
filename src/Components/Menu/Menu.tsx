import React from "react";
import style from "./Menu.module.css";
import {
  menuFoodChickenData,
  menuFoodFishData,
  menuFoodMeatData,
  menuFoodPastaData,
  menuFoodPorkData,
} from "../../Assets/Data";
import { Card } from "./Card";

export const Menu: React.FC = () => {
  return (
    <div className={style.menu}>
      <div>
        <a href="/menu/#carnes">Carnes</a>
        <a href="/menu/#cerdo">Cerdo</a>
        <a href="/menu/#pollo">Pollo</a>
        <a href="/menu/#pescado">Pescado</a>
        <a href="/menu/#pastas">Pastas</a>
      </div>
      <section id={"carnes"}>
        <h2>Carnes</h2>
        <div className={style.cards}>
          {menuFoodMeatData.map((p) => (
            <Card name={p.name} description={p.description} img={p.img} />
          ))}
        </div>
      </section>
      <section id={"cerdo"}>
        <h2>Cerdo</h2>
        <div className={style.cards}>
          {menuFoodPorkData.map((p) => (
            <Card name={p.name} description={p.description} img={p.img} />
          ))}
        </div>
      </section>
      <section>
        <h2 id={"pollo"}>Pollo</h2>
        <div className={style.cards}>
          {menuFoodChickenData.map((p) => (
            <Card name={p.name} description={p.description} img={p.img} />
          ))}
        </div>
      </section>
      <section>
        <h2 id={"pescado"}>Pescado</h2>
        <div className={style.cards}>
          {menuFoodFishData.map((p) => (
            <Card name={p.name} description={p.description} img={p.img} />
          ))}
        </div>
      </section>
      <section>
        <h2 id={"pastas"}>Pastas</h2>
        <div className={style.cards}>
          {menuFoodPastaData.map((p) => (
            <Card name={p.name} description={p.description} img={p.img} />
          ))}
        </div>
      </section>
    </div>
  );
};
