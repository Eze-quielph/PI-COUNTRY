import React from "react";
import { useDispatch } from "react-redux";
import { filterOrder } from "../../../Redux/actions/index";

/**
 * Componente de ordenamiento de países.
 * Renderiza dos selectores para ordenar países por población y nombre.
 * Utiliza el estado global y dispatch para aplicar el ordenamiento.
 */
const CountryOrder = () => {
  const dispatch = useDispatch();

  /**
   * Manejador de cambio de ordenamiento por población.
   * Dispara la acción de ordenar países por población.
   * @param {object} event - Evento del selector.
   */
  const handlePopulationOrder = (event) => {
    dispatch(filterOrder(event.target.value));
  };

  /**
   * Manejador de cambio de ordenamiento por nombre.
   * Dispara la acción de ordenar países por nombre.
   * @param {object} event - Evento del selector.
   */
  const handleNameOrder = (event) => {
    dispatch(filterOrder(event.target.value));
  };

  return (
    <div>
      <p>Ordenar por Población</p>
      <select onChange={handlePopulationOrder}>
        <option value="All">Seleccione uno</option>
        <option value="G">Ascendente</option>
        <option value="P">Descendente</option>
      </select>
      <p>Ordenar por Nombre</p>
      <select onChange={handleNameOrder}>
        <option value="All">Seleccione uno</option>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
    </div>
  );
};

export default CountryOrder;
