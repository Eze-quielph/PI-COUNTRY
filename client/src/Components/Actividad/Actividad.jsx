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
      dispatch(deleteActivity(activity.id))
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
      <h3>Paises relacionados:</h3>
      <div>
      {activity.Countries && activity.Countries.map((element)=>(
        <h3 key={element.id}>{element.name}</h3>
      ))}
      </div>
      <button onClick={handleCardClick}>Eliminar</button>
      <NavLink to={`/update/${activity.id}`}>
        <button>Modificar Actividad</button>
      </NavLink>
    </div>
  );
};

export default Actividad;
