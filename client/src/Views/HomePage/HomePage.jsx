import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Cards from "../../Components/cards/Cards";
import Pagination from "./Pagination/Pagination";
import styles from "./HomePage.module.css";
import { useLocation } from "react-router-dom";

/**
 * Componente de la página de inicio.
 * Muestra el título "Home", renderiza el componente `Cards` para mostrar los países
 * y agrega el componente `Pagination` para el paginado.
 */
const Home = () => {
  // Obtiene el estado `CountryFilter` desde Redux
  const CountriesFilter = useSelector((state) => state.CountryFilter);

  // Número de elementos por página
  const itemsPerPage = 10;

  // Estado para la página actual
  const [currentPage, setCurrentPage] = useState(1);

  // Obtiene la ubicación actual de la página
  const location = useLocation();

  // Efecto que se ejecuta cuando CountriesFilter cambia
  useEffect(() => {
    // Restablece la página actual a 1
    setCurrentPage(1);
  }, [CountriesFilter]);

  // Calcula los índices de los elementos a mostrar en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = CountriesFilter.slice(indexOfFirstItem, indexOfLastItem);

  // Función para cambiar de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* Muestra el componente Pagination si la ubicación no es "/detail/:id" */}
      <aside className={styles.pagination}>
        {location.pathname !== "/detail/:id" && (
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={CountriesFilter.length}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </aside>
      {/* Muestra el componente Cards para mostrar los países */}
      <section className={styles.cards}>
        <Cards CountriesFilter={currentItems} className={styles.card} />
      </section>
    </div>
  );
};

export default Home;
