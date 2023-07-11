import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Inicio.module.css";
import Fondo from '../../assets/Fondo.jpg'

function LandingPage() {
  return (
    <div className={styles.fondo}>
    <section className={styles.container}>
      <h1>Individual Project Henry Countries</h1>
      <h2>
        Developed by
        <a
          className={styles.yellow}
          href="https://www.linkedin.com/in/ezequiel-benitez2203/"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;Ezequiel Benitez&nbsp;
        </a>
        with <span className={styles.red}>❤</span>
      </h2>
      <NavLink to="/home" className={styles.btn}>
        Let's Travel!
      </NavLink>
      <div className={styles.imgContainer}>
        <img src={Fondo} alt="" />
      </div>
    </section>
    </div>
  );
}

export default LandingPage;
