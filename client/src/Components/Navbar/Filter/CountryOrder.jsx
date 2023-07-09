import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterOrder } from "../../../Redux/actions/index";

/**
 * Componente de ordenamiento de países.
 * Renderiza dos selectores para ordenar países por población y nombre.
 * Utiliza el estado global y dispatch para aplicar el ordenamiento.
 */
const CountryOrder = () => {
  const dispatch = useDispatch();
  const actividades = useSelector((state) => state.allActivities);

  /**
   * Manejador de cambio de ordenamiento.
   * Dispara la acción de ordenar países por población o nombre.
   * @param {object} event - Evento del selector.
   */
  const handleOrder = (event) => {
    dispatch(filterOrder(event.target.value));
    console.log(actividades);
  };

  return (
    <div>
      <p>Ordenar por Población</p>
      <select onChange={handleOrder}>
        <option value="All">Seleccione uno</option>
        <option value="G">Ascendente</option>
        <option value="P">Descendente</option>
      </select>
      <p>Ordenar por Nombre</p>
      <select onChange={handleOrder}>
        <option value="All">Seleccione uno</option>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
    </div>
  );
};

export default CountryOrder;
