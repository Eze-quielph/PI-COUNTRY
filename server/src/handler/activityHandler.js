const newPost = require('../utils/PostActivity');
const { getAllActivity } = require('../utils/dbHelper');

/**
 * Manejador de la ruta POST /activity.
 * Crea una nueva actividad.
 * @param {object} req - El objeto de solicitud.
 * @param {object} res - El objeto de respuesta.
 */
const postActivity = async (req, res) => {
  const { name, dificultad, duracion, tempodara, countryId } = req.body;
  const data = { name, dificultad, duracion, tempodara };

  try {
    const resp = await newPost(data, countryId);
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json({ error });
  }
};

/**
 * Manejador de la ruta GET /activity.
 * Obtiene todas las actividades.
 * @param {object} req - El objeto de solicitud.
 * @param {object} res - El objeto de respuesta.
 */
const getActivity = async (req, res) => {
  try {
    const resp = await getAllActivity();
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  postActivity,
  getActivity,
};
