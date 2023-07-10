import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetails, cleanDetail } from "../../Redux/actions/index";
import style from "./Detail.module.css";

/**
 * Componente de detalle de país.
 * Obtiene los detalles de un país específico mediante una llamada a la acción `getCountryDetails`.
 * Muestra información como el nombre, la bandera, el continente, la capital, la subregión, el área y la población del país.
 * También proporciona un enlace para volver a la página de inicio.
 */
const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const country = useSelector((state) => state.countryDetail);
  
  useEffect(() => {
    dispatch(getCountryDetails(id));
    return () => {
      
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);

  return (
    <div className={style.container}>
      <div className={style.containerTwo}>
        <img className={style.image} src={country?.flag} alt="" />
        <h1 className={style.title}>{country?.name}</h1>
        <h2 className={style.subtitle}>{country?.continente}</h2>
        <h2 className={style.description}>{country?.subregion}</h2>
        <h2 className={style.subtitle}>{country?.capital}</h2>
        <h3 className={style.description}>{country?.area}</h3>
        <h4 className={style.population}>Poblacion:{country?.poblacion}</h4>
        <NavLink to={"/home"} className={style.link}>
          <button className={style.button}>Home</button>
        </NavLink>
      </div>
      
    </div>
  );
};

export default Detail;
