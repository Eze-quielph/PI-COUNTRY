import React from 'react'
import style from './Actividad.module.css'

const Actividad = ({activity}) => {
  return (
 
      <div className={style.container}>
              <h3 className={style.title}>{activity.name}</h3>
              <h3 className={style.title}>{activity.id}</h3>
              <h3 className={style.title}>{activity.dificultad}</h3>
              <h3 className={style.title}>{activity.tempodara}</h3>
              <h3>{activity.duracion}</h3>
              {console.log(activity)}
            </div>

  )
}

export default Actividad
