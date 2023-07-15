const loadDb = require("../utils/LoadDb");
const { getAllData } = require("../utils/dbHelper");
const { findCountryById, getByName } = require("../utils/findCountryby");

/**
 * Manejador de la ruta GET /country/:id.
 * Obtiene un país por su ID.
 * @param {object} req - El objeto de solicitud.
 * @param {object} res - El objeto de respuesta.
 */
const getCountryId = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await findCountryById(id);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Manejador de la ruta GET /country.
 * Obtiene países por nombre o carga todos los países.
 * @param {object} req - El objeto de solicitud.
 * @param {object} res - El objeto de respuesta.
 */
const getCountryByName = async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      const result = await getByName(name);
      res.status(200).send(result);
    } else {
      await loadDb();
      const response = await getAllData();
      res.status(200).send(response);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getCountryId,
  getCountryByName,
};
