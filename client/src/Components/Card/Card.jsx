import React from "react";
import style from "./Card.module.css";

const Card = ({
  country,
  flag,
  continente,
  capital,
  subregion,
  area,
  poblacion,
}) => {
  return (
    <div className={style.cardContainer}>
      <h1>Country: {country}</h1>
      <img src={flag} alt="" />
      <h2>Continente: {continente}</h2>
      <h2>Capital: {capital}</h2>
      <p>Subregion: {subregion}</p>
      <p>Area: {area}</p>
      <h4>Poblacion: {poblacion}</h4>
      
    </div>
  );
};

export default Card;
