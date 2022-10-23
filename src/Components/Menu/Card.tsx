import React from "react";
import style from "./Card.module.css";

export const Card = ({
  name,
  description,
  img,
}: {
  name: string;
  description: string;
  img: any;
}) => {
  return (
    <div className={style.main}>
      <img alt={name} src={img} />
      <div>
        <h2>{name}</h2>
        <span>{description}</span>
      </div>
    </div>
  );
};
