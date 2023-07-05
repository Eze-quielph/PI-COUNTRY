import React from "react";

const SearchBar = ()=> {
  return (
    <>
      <form>
        <input type="text" name="search" placeholder="Buscar..." />
        <button type="submit">Buscar</button>
      </form>
    </>
  );
}

export default SearchBar;
