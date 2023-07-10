import React from "react";
import { useDispatch } from "react-redux";
import { filterOrder } from "../../../Redux/actions/index";
import style from "./CountryOrder.module.css";

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
    <div className={style.filtersContainer}>
      <div className={style.section}>
        <select onChange={handlePopulationOrder} className={style.select}>
          <option className={style.option} value="All">Ordena por Poblacion</option>
          <option className={style.option} value="G">Ascendente</option>
          <option className={style.option} value="P">Descendente</option>
        </select>
      </div>
      <div className={style.section} >
        <select onChange={handleNameOrder} className={style.select}>
          <option className={style.option} value="All">Ordenar por Nombre</option>
          <option className={style.option} value="A">Ascendente</option>
          <option className={style.option} value="D">Descendente</option>
        </select>
      </div>
    </div>
  );
};

export default CountryOrder;
