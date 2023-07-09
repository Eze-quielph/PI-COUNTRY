import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCountryByContinente, filterActivities } from "../../../Redux/actions/index";

/**
 * Componente de filtros de países.
 * Renderiza dos selectores para filtrar países por continente y actividades.
 * Utiliza el estado global y dispatch para aplicar los filtros.
 */
const CountryFilters = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allActivities);

  // Opciones para el filtro de continentes
  const continenteOptions = [
    { value: "All", label: "Todos los continentes" },
    { value: "Asia", label: "Asia" },
    { value: "Africa", label: "África" },
    { value: "Oceania", label: "Oceanía" },
    { value: "Europe", label: "Europa" },
    { value: "Americas", label: "Américas" },
    { value: "Antarctic", label: "Antártida" },
  ];

  // Opciones para el filtro de actividades
  const activityOptions = [
    { value: "All", label: "Todas las actividades" },
    { value: "Trekking", label: "Trekking" },
    { value: "Caminata", label: "Caminata" },
    { value: "Bike Tour", label: "Bike Tour" },
    { value: "City Tour", label: "City Tour" },
    { value: "Gastronomic Circuit", label: "Circuito Gastronómico" },
    { value: "Rapel", label: "Rapel" },
    { value: "Shopping", label: "Compras" },
    { value: "Museum Circuit", label: "Circuito de Museos" },
    { value: "Free Choice", label: "Elección Libre" },
  ];

  /**
   * Manejador de cambio de filtro de continentes.
   * Dispara la acción de filtrar países por continente.
   * @param {object} event - Evento del selector.
   */
  const handleFilterContinente = (event) => {
    dispatch(filterCountryByContinente(event.target.value));
    
  };

  /**
   * Manejador de cambio de filtro de actividades.
   * Dispara la acción de filtrar países por actividad.
   * @param {object} event - Evento del selector.
   */
  const handleFilterActivity = (event) => {
    dispatch(filterActivities(event.target.value));
    console.log(countries);
  };

  return (
    <>
      {/* Selector de continentes */}
      <select onChange={handleFilterContinente}>
        {continenteOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Selector de actividades */}
      <select onChange={handleFilterActivity}>
        {activityOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default CountryFilters;
