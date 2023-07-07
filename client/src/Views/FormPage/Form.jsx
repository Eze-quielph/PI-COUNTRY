import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    dificultad: "",
    duracion: "",
    tempodara: "",
    countryId: "",
  });

  const [error, setError] = useState({
    name: "",
    dificultad: "",
    duracion: "",
    tempodara: "",
    countryId: "",
  });

  const validate = (input) => {

    if (!input.name) {
      setError({
        error,
        name: "Este campo es obligatorio",
      }) 
      return
    }
    if(!input.name > 3 && !input.name < 10){
      setError({
        error,
        name: "El nombre debe tener entre 3 y 10 caracteres",
      })
      return
    }
    setError({...error, name: ""})
  };

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({
      ...form,
      [property]: value,
    });
    validate({
      ...form,
      property: value,
    });
  };

  return (
    <form onSubmit={changeHandler}>
      <h1>Crea una nueva actividad: </h1>
      <div>
        <label htmlFor="name">Nombre: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={changeHandler}
        />
        
      </div>
      <div>
        <label htmlFor="dificultad">Dificultad: </label>
        <select
          type="select"
          id="dificultad"
          name="dificultad"
          value={form.dificultad}
          onChange={changeHandler}
          required
        >
          <option value="">Seleccione una opción</option>
          <option value="tipo1">1</option>
          <option value="tipo2">2</option>
          <option value="tipo3">3</option>
          <option value="tipo4">4</option>
          <option value="tipo5">5</option>
        </select>
      </div>
      <div>
        <label htmlFor="duracion">Duracion: </label>
        <input
          type="time"
          id="duracion"
          name="duracion"
          value={form.duracion}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label htmlFor="tempodara">Tempodara: </label>
        <select
          id="tempodara"
          name="tempodara"
          value={form.tempodara}
          onChange={changeHandler}
        >
          <option value="">Seleccione una opción</option>
          <option value="opcion1">Opción 1</option>
          <option value="opcion2">Opción 2</option>
          <option value="opcion3">Opción 3</option>
          <option value="opcion4">Opción 4</option>
        </select>
      </div>
      <div>
        <label htmlFor="country">Country: </label>
        <input
          type="text"
          id="country"
          name="country"
          value={form.country}
          onChange={changeHandler}
        />
      </div>
      {error.name ? null :  <button type="submit">Submit</button>}
     
    </form>
  );
};

export default Form;
