import React, { useState } from "react";
import validate from "./Validate";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../Redux/actions/index";
import styles from "./Form.module.css";

const Form = () => {
  const allCountries = useSelector((state) => state.Countries);

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    dificultad: "",
    duracion: "",
    tempodara: "",
    countryId: [],
  });

  const [errors, setErrors] = useState({
    name: "Debes seleccionar una actividad",
  });

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
    setErrors(validate(updatedForm));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.keys(errors).length === 0) {
      dispatch(actions.addActivity(form));
      setForm({
        name: "",
        dificultad: "",
        duracion: "",
        tempodara: "",
        countryId: [],
      });
      alert("La actividad se creó con éxito");
    } else {
      alert("Por favor, completa todos los datos");
    }
    event.target.reset()
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
          {errors.name && <p className={styles.error}>{errors.name}</p>}
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
          {errors.dificultad && (
            <p className={styles.error}>{errors.dificultad}</p>
          )}
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
            max={5}
          />
          {errors.duracion && <p className={styles.error}>{errors.duracion}</p>}
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
          {errors.tempodara && (
            <p className={styles.error}>{errors.tempodara}</p>
          )}
        </div>
        <div className={styles.line}>
          <label htmlFor="pais">País / Países: </label>
          <select
            name="pais"
            id="pais"
            className={styles.select}
            onChange={handleChange}
          >
            <option value="">Selecciona el pais</option>
            {allCountries?.map((country) => (
              <option value={country.id} key={country.id}>
                {country.name}
              </option>
            ))}
          </select>
          {errors.pais && <p className={styles.error}>{errors.pais}</p>}
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
          <button type="submit">Crear Actividad</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
