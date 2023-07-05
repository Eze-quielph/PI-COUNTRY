import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./inicio.module.css";

const Inicio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="../../../public/fondo.jpg" alt="" />
      </div>
      <div className={styles.contentContainer}>
        <h1>Este es mi Landing</h1>
        <NavLink to="/home">
          <button>Home Page</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Inicio;
