import { NavLink } from 'react-router-dom';
import style from "./Card.module.css";

const Card = ({
  country,
  flag,
  continente,
  id
}) => {
  return (
    <div className={style.cardContainer}>
      <h1>Country: {country}</h1>
      <img src={flag} alt="" />
      <h2>Continente: {continente}</h2>
      <NavLink to={`/detail/${id}`}>
        <button>Detalles</button>
      </NavLink>
    </div>
  );
};

export default Card;
