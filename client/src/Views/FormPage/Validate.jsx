const validate = (form) => {
    const errors = {};
  
    if (form.name === "") {
      errors.name = "Debes seleccionar una actividad";
    }
  
    if (!form.dificultad) {
      errors.difficulty = "Selecciona un grado de dificultad";
    }
  
    if (!form.dificultad) {
      errors.duration = "Selecciona o ingresa un número";
    }
  
    if (!form.tempodara) {
      errors.season = "Selecciona una temporada";
    }
  
    if (!form.countryId.length) {
      errors.pais = "Debes seleccionar al menos un (1) país";
    }
  
    return errors;
  };
  
  export default validate;