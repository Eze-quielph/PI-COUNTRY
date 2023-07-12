const { Activity } = require("../db");

const ActivityUpdate = async (
  id,
  name,
  dificultad,
  duracion,
  tempodara,
  countryId
) => {
  try {
    const model = await Activity.findByPk(id);
    console.log(model);
    model.name = name;
    model.dificultad = dificultad;
    model.duracion = duracion;
    model.tempodara = tempodara;

    await model.setCountries(countryId);
    await model.save();
    return true;
  } catch (error) {
    return `No se pudo actualizar el modelo, ocurrió el siguiente error: ${error}`;
  }
};

module.exports = ActivityUpdate;
