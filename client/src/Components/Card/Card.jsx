import { NavLink } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ country, flag, continente, id }) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Country: {country}</h2>
      <NavLink to={`/detail/${id}`}>
        <img src={flag} alt="" className={style.img} />
      </NavLink>
      <h3>Continente: {continente}</h3>
    </div>
  );
};

export default Card;
