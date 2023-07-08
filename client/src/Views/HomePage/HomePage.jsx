import React from "react";
import { useSelector } from "react-redux";
import Cards from "../../Components/cards/Cards";
import styles from "./HomePage.module.css";


/**
 * Componente de la página de inicio.
 * Muestra el título "Home" y renderiza el componente `Cards` para mostrar los países.
 */

const Home = () => {
  const CountriesFilter = useSelector((state) => state.CountryFilter);
  
  return (
    <div className={styles.container}>
      <h2 className={styles.home}>Home</h2>
      <Cards CountriesFilter={CountriesFilter} />
    </div>
  );
};

export default Home;
