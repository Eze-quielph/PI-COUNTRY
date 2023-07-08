import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetails, cleanDetail } from "../../Redux/actions/index";

/**
 * Componente de detalle de país.
 * Obtiene los detalles de un país específico mediante una llamada a la acción `getCountryDetails`.
 * Muestra información como el nombre, la bandera, el continente, la capital, la subregión, el área y la población del país.
 * También proporciona un enlace para volver a la página de inicio.
 */

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryDetails(id));
    return ()=>{
      dispatch(cleanDetail())
    }
  }, [dispatch]);
  
  const country = useSelector((state) => state.countryDetail);
 

  return (
    <div>
      <h1>Country: {country?.name}</h1>
      <img src={country?.flag} alt="" />
      <h2>Continente: {country?.continente}</h2>
      <h2>Capital: {country?.capital}</h2>
      <p>Subregion: {country?.subregion}</p>
      <p>Area: {country?.area}</p>
      <h4>Poblacion: {country?.poblacion}</h4>
      <NavLink to={"/home"}>
        <button>Home</button>
      </NavLink>
    </div>
  );
};

export default Detail;
