import style from "./Actividad.module.css";
import { deleteActivity } from "../../Redux/actions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {NavLink} from 'react-router-dom'

const Actividad = ({ activity }) => {
  const dispatch = useDispatch();
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
      <h3 className={style.title}>{activity.name}</h3>
      <h3 className={style.title}>{activity.id}</h3>
      <h3 className={style.title}>{activity.dificultad}</h3>
      <h3 className={style.title}>{activity.tempodara}</h3>
      <h3>{activity.duracion}</h3>
      {console.log(activity)}
      <button onClick={handleCardClick}>Eliminar</button>
      <NavLink to={`/update/${activity.id}`}>
        <button>Modificar Actividad</button>
      </NavLink>
    </div>
  );
};

export default Actividad;
