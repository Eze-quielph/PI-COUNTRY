import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import style from "./NavBar.module.css";
import { useDispatch } from "react-redux";
import { getCountryByName } from "../../Redux/actions/index";
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

  return (
    <div className={style.divContainer}>
      <NavLink to="/home" className={style.btn}>
        Home
      </NavLink>
      {location.pathname !== "/form" && (
        <SearchBar
          searchString={searchString}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}

      <NavLink to="/form" className={style.btn}>
        Form
      </NavLink>
      {location.pathname !== "/form" && <CountryFilters />}
      {location.pathname !== "/form" && <CountryOrder />}
    </div>
  );
};

export default NavBar;
