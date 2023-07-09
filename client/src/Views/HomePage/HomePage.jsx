import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cards from "../../Components/cards/Cards";
import Pagination from "./Pagination";
import styles from "./HomePage.module.css";

/**
 * Componente de la página de inicio.
 * Muestra el título "Home", renderiza el componente `Cards` para mostrar los países
 * y agrega el componente `Pagination` para el paginado.
 */
const Home = () => {
  const CountriesFilter = useSelector((state) => state.CountryFilter);
  const itemsPerPage = 10; // Número de elementos por página
  const [currentPage, setCurrentPage] = useState(1);

  // Calcular los índices de los elementos a mostrar en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = CountriesFilter.slice(indexOfFirstItem, indexOfLastItem);

  // Función para cambiar de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.home}>Home</h2>
      <Cards CountriesFilter={currentItems} />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={CountriesFilter.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
