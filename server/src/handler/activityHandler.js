const newPost = require("../utils/PostActivity");
const { getAllActivity } = require("../utils/dbHelper");
const deleteIdActivity = require("../utils/deleteIdActivity");
const ActivityUpdate = require("../utils/ActivityUpdate");
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

const deleteActivity = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id || isNaN(id)) {
      throw new Error("ID inválida o no numérica");
    }
    
    const resp = await deleteIdActivity(+id);
    if (!resp) {
      throw new Error("No se encontró ninguna actividad con el ID especificado");
    }
    
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateActivity = async (req, res) => {
  const { id } = req.params;
  const { name, dificultad, duracion, tempodara, countryId } = req.body;

  try {
    const resp = await ActivityUpdate(id, name, dificultad, duracion, tempodara, countryId);
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

module.exports = {
  postActivity,
  getActivity,
  deleteActivity,
  updateActivity,
};
