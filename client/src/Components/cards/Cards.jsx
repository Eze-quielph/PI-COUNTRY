import Card from "../Card/Card";
import style from './Cards.module.css'

const Cards = ({CountriesFilter}) => {

  return (
    <div className={style.container}>
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
    </div>
  );
};

export default Cards;
