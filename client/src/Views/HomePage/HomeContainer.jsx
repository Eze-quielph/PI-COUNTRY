import React, { useEffect } from "react";
import { useDispatch,  } from "react-redux";
import { getCountry } from "../../Redux/actions/index";
import Home from "./HomePage";

/**
 * Componente contenedor de la página de inicio.
 * Realiza una llamada a la acción `getCountry` para obtener los países y mostrarlos en la página de inicio.
 */

const HomeContainer = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCountry());
  }, []);
  
  return <Home />;
};

export default HomeContainer;
