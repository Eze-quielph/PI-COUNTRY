import style from "./Cards.module.css";
import { Suspense, lazy } from "react";
const Card = lazy(() => import("../Card/Card"));
import PantallaCarga from "../PantallaCarga/PantallaCarga";

const Cards = ({ CountriesFilter }) => {
  return (
    <div className={style.container}>
      <Suspense fallback={<PantallaCarga/>}>
        {CountriesFilter.map((country) => {
          return (
            <Card
              key={country.id}
              country={country.name}
              flag={country.flag}
              continente={country.continente}
              capital={country.capital}
              subregion={country.subregion}
              area={country.area}
              poblacion={country.poblacion}
              id={country.id}
            />
          );
        })}
      </Suspense>
    </div>
  );
};

export default Cards;
