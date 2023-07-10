const validate = (form) => {
  const errors = {};

  if (form.name === "") {
    errors.name = "Debes seleccionar una actividad";
  }

  if (!form.dificultad) {
    errors.dificultad = "Selecciona un grado de dificultad";
  }

  if (!form.duracion) {
    errors.duracion = "Selecciona o ingresa un número";
  }

  if (!form.tempodara) {
    errors.tempodara = "Selecciona una temporada";
  }

  if (form.countryId.length < 1) {
    errors.pais = "Debes seleccionar al menos un (1) país";
  }

  return errors;
};

export default validate;
