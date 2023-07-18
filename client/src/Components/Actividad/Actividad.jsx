import style from "./Actividad.module.css";
import { deleteActivity } from "../../Redux/actions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

const Actividad = ({ activity }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [eliminar, setEliminar] = useState(false);

  useEffect(() => {
    if (eliminar) {
      dispatch(deleteActivity(activity.id));
    }
  }, [dispatch, eliminar, activity.id]);

  const handleCardClick = () => {
    setEliminar(!eliminar);
  };

  return (
    <div className={style.container}>
      <h3 className={style.title}>Name: {activity.name}</h3>
      <h3 className={style.title}>Dificultad: {activity.dificultad}</h3>
      <h3 className={style.title}>Tempodara: {activity.tempodara}</h3>
      <h3>Duracion: {activity.duracion}</h3>
      <button onClick={handleCardClick}>Eliminar</button>
      <NavLink to={`/update/${activity.id}`}>
        <button>Modificar Actividad</button>
      </NavLink>
    </div>
  );
};

export default Actividad;
