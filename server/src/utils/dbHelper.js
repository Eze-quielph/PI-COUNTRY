const { Country, Activity } = require("../db");

/**
 * Obtiene todos los datos de países incluyendo las actividades relacionadas.
 * @returns {Promise} Una promesa que se resuelve con los datos obtenidos.
 * @throws {Error} Si ocurre un error al obtener los datos de la base de datos.
 */
const getAllData = async () => {
  try {
    const allCountries = await Country.findAll({
      include: [Activity], // Incluir actividades relacionadas
    });

    // Realiza otras consultas si es necesario y combina los resultados

    return allCountries; // Retorna los datos obtenidos
  } catch (error) {
    throw new Error("Error al obtener los datos de la base de datos");
  }
};

/**
 * Obtiene todas las actividades incluyendo los países relacionados.
 * @returns {Promise} Una promesa que se resuelve con las actividades obtenidas.
 * @throws {Error} Si ocurre un error al obtener los datos de la base de datos.
 */
const getAllActivity = async () => {
  try {
    const allActivity = await Activity.findAll({
      include: [Country], // Incluir países relacionados
    });

    return allActivity;
  } catch (error) {
    throw new Error("Error al obtener los datos de la base de datos");
  }
};

module.exports = {
  getAllData,
  getAllActivity,
};
