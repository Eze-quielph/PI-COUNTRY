import { getActivities } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, Suspense, lazy } from "react";
import PantallaCarga from "../../Components/PantallaCarga/PantallaCarga";
import styles from "./Activity.module.css";

// Importar el componente de actividad de forma diferida (lazy)
const Actividad = lazy(() => import("../../Components/Actividad/Actividad"));

/**
 * Componente de la tarjeta de actividades.
 * Muestra una lista de actividades obtenidas desde el estado global.
 *
 * @returns {JSX.Element} Componente de la tarjeta de actividades.
 */
const ActivityCard = () => {
  const actividades = useSelector((state) => state.allActivities);
  const dispatch = useDispatch();

  useEffect(() => {
    // Obtener las actividades cuando el componente se monta
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div>
      <h1 className={styles.title}>Activities</h1>
      <div className={styles.container}>
        <Suspense fallback={<PantallaCarga />}>
          {/* Renderizar las actividades si están disponibles */}
          {actividades &&
            actividades.map((actividad) => (
              <Actividad key={actividad.id} activity={actividad} />
            ))}
        </Suspense>
      </div>
    </div>
  );
};

export default ActivityCard;
