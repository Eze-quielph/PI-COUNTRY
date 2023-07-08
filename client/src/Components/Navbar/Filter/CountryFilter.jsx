import { useDispatch } from "react-redux";
import { filterCountryByContinente } from "../../../Redux/actions/index";

const CountryFilters = () => {
  const dispatch = useDispatch();

  const filterContinente = (event) => {
    dispatch(filterCountryByContinente(event.target.value));
  };

  return (
    <>
      <select onChange={(event) => filterContinente(event)}>
        <option value="All">Todos los continentes</option>
        <option value="Asia">Asia</option>
        <option value="Africa">África</option>
        <option value="Oceania">Oceania</option>
        <option value="Europe">Europe</option>
        <option value="Americas">Americas</option>
      </select>
      <select onChange={(event) => filterContinente(event)}>
        <option value="" disabled>
          Selecciona la actividad
        </option>
        <option value="Trekking">Trekking</option>
        <option value="Caminata">Caminata</option>
        <option value="Bike Tour">Bike Tour</option>
        <option value="City Tour">City Tour</option>
        <option value="Gastronomic Circuit">Gastronomic Circuit</option>
        <option value="Rapel">Rapel</option>
        <option value="Shopping">Shopping</option>
        <option value="Museum Circuit">Museum Circuit</option>
        <option value="Free Choice">Free Choice</option>
      </select>
    </>
  );
};

export default CountryFilters;
