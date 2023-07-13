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

  const country = useSelector((state) => state.countryDetail);

  useEffect(() => {
    // Obtener los detalles del país cuando el componente se monta
    dispatch(getCountryDetails(id));

    return () => {
      // Limpiar los detalles del país cuando el componente se desmonta
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);

  const [showActivities, setShowActivities] = useState(false);

  useEffect(() => {
    // Actualizar el estado de las actividades cuando el estado countryDetail cambie
    if (country && country.Activities && country.Activities.length > 0) {
      setShowActivities(true);
    } else {
      setShowActivities(false);
    }
  }, [country]);

  /**
   * Maneja el evento de clic en el botón de mostrar/ocultar actividades.
   * Cambia el estado de visibilidad de las actividades.
   */
  const handleToggleActivities = () => {
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
          {/* Botón para mostrar u ocultar las actividades */}
          <button className={style.button} onClick={handleToggleActivities}>
            {showActivities ? "Ocultar actividades" : "Mostrar actividades"}
          </button>
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
      ) : (
        // Mostrar pantalla de carga si no hay detalles del país
        <p>No hay detalles del país</p>
      )}
    </div>
  );
};

export default Detail;
