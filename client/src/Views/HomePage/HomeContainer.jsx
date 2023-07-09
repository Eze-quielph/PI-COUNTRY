import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountry, getActivities } from "../../Redux/actions/index";
import Home from "./HomePage";

/**
 * Componente contenedor de la página de inicio.
 * Realiza una llamada a las acciones `getCountry` y `getActivities` para obtener los países y actividades, respectivamente,
 * y mostrarlos en la página de inicio.
 */
const HomeContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountry());
    dispatch(getActivities());
  }, []);

  return <Home />;
};

export default HomeContainer;
