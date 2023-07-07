import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../Components/cards/Cards";
import { getCountry } from "../../Redux/actions/index";
import styles from "./HomePage.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const Countries = useSelector((state) => state.Countries);

  useEffect(() => {
    dispatch(getCountry());
  }, []);
  //console.log(Countries);
  return (
    <div className={styles.container}>
      <h2 className={styles.home}>Home</h2>
      <Cards Countries={Countries} />
    </div>
  );
};

export default Home;
