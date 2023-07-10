import styles from "./SearchBar.module.css";

/**
 * Componente de barra de búsqueda.
 * Permite al usuario ingresar un término de búsqueda y realizar una búsqueda al enviar el formulario.
 * @param {string} searchString - Valor del término de búsqueda.
 * @param {function} handleChange - Función que maneja el cambio en el campo de búsqueda.
 * @param {function} handleSubmit - Función que maneja el envío del formulario de búsqueda.
 */
const SearchBar = ({ searchString, handleChange, handleSubmit }) => {
  /**
   * Maneja el envío del formulario de búsqueda.
   * Previene el comportamiento predeterminado del formulario y llama a la función `handleSubmit`.
   * @param {object} event - Evento de envío del formulario.
   */
  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit();
  };

  return (
    <div className={styles.searchBox}>
      <form onSubmit={handleFormSubmit}>
        <input
          className={styles.input}
          type="search"
          name="search"
          placeholder="Buscar..."
          value={searchString}
          onChange={handleChange}
        />
        <button className={styles.button} type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default SearchBar;
