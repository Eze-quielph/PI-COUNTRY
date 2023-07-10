import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetails, cleanDetail } from "../../Redux/actions/index";
import style from "./Detail.module.css";
import Actividad from "../../Components/Actividad/Actividad";

/**
 * Componente de detalle de país.
 * Muestra información detallada de un país específico.
 * Proporciona opciones para ver la lista de actividades relacionadas.
 *
 * @returns {JSX.Element} Componente de detalle de país.
 */
const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [showActivities, setShowActivities] = useState(false);

  const country = useSelector((state) => state.countryDetail);

  useEffect(() => {
    // Obtener los detalles del país cuando el componente se monta
    dispatch(getCountryDetails(id));

    return () => {
      // Limpiar los detalles del país cuando el componente se desmonta
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);

  /**
   * Maneja el evento de clic en la tarjeta de actividades.
   * Invierte el estado de visualización de actividades.
   */
  const handleCardClick = () => {
    setShowActivities(!showActivities);
  };

  return (
    <div className={style.container}>
      {country ? (
        <div className={style.containerTwo}>
          {/* Mostrar los detalles del país */}
          <img className={style.image} src={country.flag} alt="" />
          <h1 className={style.title}>{country.name}</h1>
          <h2 className={style.subtitle}>{country.continente}</h2>
          <h2 className={style.description}>{country.subregion}</h2>
          <h2 className={style.subtitle}>{country.capital}</h2>
          <h3 className={style.description}>{country.area}</h3>
          <h4 className={style.population}>Poblacion: {country.poblacion}</h4>
          {/* Enlace para volver a la página de inicio */}
          <NavLink to={"/home"} className={style.link}>
            <button className={style.button}>Home</button>
          </NavLink>
          {/* Tarjeta de actividades */}
          <div className={style.card}>
            {!showActivities ? (
              <button onClick={handleCardClick}>Lista de actividades</button>
            ) : (
              <button onClick={handleCardClick}>Cerrar</button>
            )}
            {/* Mostrar las actividades si showActivities es true */}
            {showActivities && country.Activities && (
              <div className={style.cardContent}>
                {country.Activities.length > 0 ? (
                  country.Activities.map((activity) => (
                    <Actividad key={activity.id} activity={activity} />
                  ))
                ) : (
                  <p>No hay actividades</p>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        // Mostrar pantalla de carga si no hay detalles del país
        <p>No hay Details del pais</p>
      )}
    </div>
  );
};

export default Detail;
