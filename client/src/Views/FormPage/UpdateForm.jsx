import React, { useState } from "react";
import validate from "./Validate";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateActivity } from "../../Redux/actions";
import styles from "./Form.module.css";

const UpdateForm = () => {
  const allCountries = useSelector((state) => state.Countries);
  const dispatch = useDispatch();
  const { id } = useParams();

  const [form, setForm] = useState({
    name: "",
    dificultad: "",
    duracion: "",
    tempodara: "",
    countryId: [],
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    let updatedForm = {
      ...form,
      [property]: value,
    };

    if (property === "pais") {
      updatedForm = {
        ...updatedForm,
        countryId: [...form.countryId, value],
      };
    }

    setForm(updatedForm);
    setIsFormValid(updatedForm.name !== ""); // Verificar si se selecciona al menos un elemento
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (isFormValid) {
      const { name, dificultad, duracion, tempodara, countryId } = form;
      const updatedActivity = {
        id: id,
        ...(name && { name }),
        ...(dificultad && { dificultad }),
        ...(duracion && { duracion }),
        ...(tempodara && { tempodara }),
        ...(countryId.length > 0 && { countryIds: countryId }),
      };
  
      dispatch(updateActivity(id, updatedActivity));
  
      setForm({
        name: "",
        dificultad: "",
        duracion: "",
        tempodara: "",
        countryId: [],
      });
      alert("La actividad se actualizó con éxito");
    } else {
      alert("Por favor, selecciona al menos un elemento");
    }
  };
  

  const handleDelete = (element) => {
    setForm({
      ...form,
      countryId: form.countryId.filter((ele) => ele !== element),
    });
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre: </label>
          <select
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
          >
            <option value="" disabled>
              Selecciona la actividad
            </option>
            <option value="Trekking">Trekking</option>
            <option value="Caminata">Caminata</option>
            <option value="Bike Tour">Bike Tour</option>
            <option value="City Tour">City Tour</option>
            <option value="Gastronomic Circuit">Gastronomic Circuit</option>
            <option value="Rapel">Rapel</option>
            <option value="Shopping">Shopping</option>
            <option value="Museum Circuit">Museum Circuit</option>
            <option value="Free Choice">Free Choice</option>
          </select>
          
        </div>

        <div>
          <label htmlFor="dificultad">Dificultad: </label>
          <select
            id="dificultad"
            name="dificultad"
            value={form.dificultad}
            onChange={handleChange}
          >
            <option value="" disabled>
              Seleccione un valor
            </option>
            <option value="1">1 (Dificultad Nula)</option>
            <option value="2">2 (Dificultad Baja)</option>
            <option value="3">3 (Dificultad Media)</option>
            <option value="4">4 (Dificultad Elevada)</option>
            <option value="5">5 (Dificultad Extrema)</option>
          </select>
          
        </div>
        <div>
          <label htmlFor="duracion">Duración (en Horas): </label>
          <input
            id="duracion"
            type="number"
            name="duracion"
            value={form.duracion}
            onChange={handleChange}
            min={1}
            max={6}
          />
         
        </div>

        <div>
          <label htmlFor="tempodara">Temporada: </label>
          <select
            name="tempodara"
            id="tempodara"
            value={form.tempodara}
            onChange={handleChange}
          >
            <option value="" disabled>
              Seleccione un valor
            </option>
            <option value="Verano">Verano</option>
            <option value="Otoño">Otoño</option>
            <option value="Invierno">Invierno</option>
            <option value="Primavera">Primavera</option>
          </select>
         
        </div>
        <div className={styles.line}>
          <label htmlFor="pais">País / Países: </label>
          <select
            name="pais"
            id="pais"
            className={styles.select}
            onChange={handleChange}
          >
            <option value="" disabled>
              Seleccioná el/los países
            </option>
            {allCountries?.map((country) => (
              <option value={country.id} key={country.id}>
                {country.name}
              </option>
            ))}
          </select>
          
          <div>
            {form.countryId?.map((element) => (
              <div key={element}>
                <button
                  onClick={() => {
                    handleDelete(element);
                  }}
                >
                  {element}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <button type="submit">Actualizar Actividad</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
