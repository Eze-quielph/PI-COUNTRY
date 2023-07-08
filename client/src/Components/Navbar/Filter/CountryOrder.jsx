import { useDispatch, useSelector } from "react-redux";
import { filterOrder } from "../../../Redux/actions/index";

const CountryOrder = () => {
  const dispatch = useDispatch();

  const Handle = (event) => {
    dispatch(filterOrder(event.target.value));
  };
  return (
    <div>
      <p>Ordenar por Poblacion</p>
      <select
        placeholder="Ordenar por Poblacion"
        onChange={(event) => Handle(event)}
      >
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <p>Ordenar por Nombre</p>
      <select onChange={(event) => Handle(event)}>
        <option value="All">Seleccione uno</option>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
    </div>
  );
};

export default CountryOrder;
