import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import { useDispatch } from "react-redux";
import { getCountryByName } from "../../Redux/actions/index";

const NavBar = () => {
  const dispatch = useDispatch();

  const [searchString, setSearchString] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setSearchString(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getCountryByName(searchString));
  };

  
  return (
    <div className={style.divContainer}>
      <NavLink to="/home" className={style.btn}>
        Home
      </NavLink>
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <NavLink to="/form" className={style.btn}>
        Form
      </NavLink>
    </div>
  );
};

export default NavBar;
