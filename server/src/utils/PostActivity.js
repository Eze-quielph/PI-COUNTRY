const { Activity } = require("../db");

/**
 * Crea una nueva actividad en la base de datos y la relaciona con un país específico.
 * @param {object} data - Los datos de la actividad a crear.
 * @param {string} nameId - El ID del país con el que se relacionará la actividad.
 * @returns {Promise} Una promesa que se resuelve con la nueva actividad creada.
 */
const newPost = async (data, nameId) => {
  try {
    const newActivity = await Activity.create({
      name: data.name,
      dificultad: data.dificultad,
      duracion: data.duracion,
      tempodara: data.tempodara,
    });

    await newActivity.setCountries(nameId);
    return newActivity;
  } catch (error) {
    console.error("Error al crear la nueva actividad:", error);
    throw error;
  }
};

module.exports = newPost;
