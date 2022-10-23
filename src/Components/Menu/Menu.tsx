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
      <section>
        <h2>Carnes</h2>
        <div className={style.cards}>
          {menuFoodMeatData.map((p) => (
            <Card name={p.name} description={p.description} img={p.img} />
          ))}
        </div>
      </section>
      <section>
        <h2>Cerdo</h2>
        <div className={style.cards}>
          {menuFoodPorkData.map((p) => (
            <Card name={p.name} description={p.description} img={p.img} />
          ))}
        </div>
      </section>
      <section>
        <h2>Pollo</h2>
        <div className={style.cards}>
          {menuFoodChickenData.map((p) => (
            <Card name={p.name} description={p.description} img={p.img} />
          ))}
        </div>
      </section>
      <section>
        <h2>Pescado</h2>
        <div className={style.cards}>
          {menuFoodFishData.map((p) => (
            <Card name={p.name} description={p.description} img={p.img} />
          ))}
        </div>
      </section>
      <section>
        <h2>Pastas</h2>
        <div className={style.cards}>
          {menuFoodPastaData.map((p) => (
            <Card name={p.name} description={p.description} img={p.img} />
          ))}
        </div>
      </section>
    </div>
  );
};
