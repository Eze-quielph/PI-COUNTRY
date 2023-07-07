
import styles from "./SearchBar.module.css";

const SearchBar = ({ handleSubmit, handleChange }) => {
  return (
    <div className={styles.searchBox}>
      <form onChange={handleChange}>
        <input type="search" name="search" placeholder="Buscar..." />
        <button type="submit" onClick={handleSubmit}>
          Buscar
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
