import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetails } from "../../Redux/actions/index";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryDetails(id));
  }, [dispatch]);
  
  const country = useSelector((state) => state.CountryFilter);
  console.log(country);

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
