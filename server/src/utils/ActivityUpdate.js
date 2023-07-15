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

    if (name !== undefined) {
      model.name = name;
    }
    if (dificultad !== undefined) {
      model.dificultad = dificultad;
    }
    if (duracion !== undefined) {
      model.duracion = duracion;
    }
    if (tempodara !== undefined) {
      model.tempodara = tempodara;
    }
    if (countryId !== undefined) {
      await model.setCountries(countryId);
    }

    await model.save();
    return model;
  } catch (error) {
    throw new Error(`No se pudo actualizar el modelo, ocurrió el siguiente error: ${error}`)
  }
};

module.exports = ActivityUpdate;

