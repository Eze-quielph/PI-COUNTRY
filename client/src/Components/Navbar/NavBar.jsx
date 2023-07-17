import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import style from "./NavBar.module.css";
import { useDispatch } from "react-redux";
import { getCountryByName, cleanCountries } from "../../Redux/actions/index";
import SearchBar from "./SearchBar/SearchBar";
import CountryFilters from "./Filter/CountryFilter";
import CountryOrder from "./Filter/CountryOrder";

/**
 * Componente de la barra de navegación.
 * Permite al usuario navegar entre las diferentes secciones de la aplicación y buscar países por nombre.
 */
const NavBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState("");

  /**
   * Manejador del envío del formulario de búsqueda de países.
   * Realiza una búsqueda de países utilizando el valor de `searchString` y actualiza los resultados en la aplicación.
   */
  const handleSubmit = () => {
    dispatch(getCountryByName(searchString));
  };

  /**
   * Manejador del cambio en el campo de búsqueda.
   * Actualiza el valor de `searchString` con el valor ingresado por el usuario.
   * @param {object} event - Evento del cambio en el campo de búsqueda.
   */
  const handleChange = (event) => {
    setSearchString(event.target.value);
  };

  const HandleFilter = ()=>{
    dispatch(cleanCountries())
  }

 
  return (
    <div className={style.divContainer}>
      <div className={style.navLinksContainer}>
        <div className={style.navButtonsContainer}>
          <NavLink to="/home" className={`${style.btn} ${style.btnHome}`}>
            Country
          </NavLink>
          <NavLink
            to="/activity"
            className={`${style.btn} ${style.btnActivity}`}
          >
            Activity
          </NavLink>
          <NavLink to="/form" className={`${style.btn} ${style.btnForm}`}>
            Form
          </NavLink>
        </div>
      </div>
      {location.pathname === "/home" && (
        <div className={style.middleContainer}>
          <div className={style.searchBarContainer}>
            <SearchBar
              searchString={searchString}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
          <div className={style.filtersContainer}>
            <CountryFilters />
            <CountryOrder />
            <button onClick={HandleFilter}>Limpiar Filtro</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
