import axios from "axios";

export const GET_COUNTRY = "GET_COUNTRY";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_COUNTRY_DETAILS = "GET_COUNTRY_DETAILS";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const FILTER_COUNTRY_CONTINENTE = "FILTER_COUNTRY_CONTINENTE";
export const FILTER_ACTIVITIES = "FILTER_ACTIVITIES";
export const ORDEN = "ORDEN";
export const ADD_ACTIVITIES = "ADD_ACTIVITIES";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const DELETE_ACTIVITY = "DELETE_ACTIVITY"
export const UPDATE_ACTIVITY = "UPDATE_ACTIVITY"
export const CLEAN_COUNTRIES = 'CLEAN_COUNTRIES'

/**
 * Action para obtener la lista de países.
 */
export const getCountry = () => {
  return async function (dispatch) {
    try {
      const response = await axios(`https://pi-country-production-1156.up.railway.app/countries`);
      const country = response.data;
      dispatch({
        type: GET_COUNTRY,
        payload: country,
      });
    } catch (error) {
      alert("Error: " + error.response.data.error);
    }
  };
};

/**
 * Action para obtener un país por nombre.
 * @param {string} name - Nombre del país.
 */
export const getCountryByName = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios(`https://pi-country-production-1156.up.railway.app/countries/?name=${name}`);
      const data = response.data;
      dispatch({
        type: GET_BY_NAME,
        payload: data,
      });
    } catch (error) {
      alert("Error: " + error.response.data.error);
    }
  };
};

/**
 * Action para limpiar la lista de países filtrados y restaurarla a la lista original.
 */
export const cleanCountries = () => {
  return {
    type: CLEAN_COUNTRIES
  };
};

/**
 * Action para obtener los detalles de un país.
 * @param {string} id - ID del país.
 */
export const getCountryDetails = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios(`https://pi-country-production-1156.up.railway.app/countries/${id}`);
      const country = response.data;
      dispatch({
        type: GET_COUNTRY_DETAILS,
        payload: country,
      });
    } catch (error) {
      alert("Error: " + error.response.data.error);
    }
  };
};

/**
 * Action para limpiar los detalles de un país.
 */
export const cleanDetail = () => {
  return {
    type: CLEAN_DETAIL,
  };
};

/**
 * Action para filtrar los países por continente.
 * @param {string} input - Continente seleccionado.
 */
export const filterCountryByContinente = (input) => {
  return {
    type: FILTER_COUNTRY_CONTINENTE,
    payload: input,
  };
};

/**
 * Action para filtrar los países por actividad.
 * @param {string} input - Actividad seleccionada.
 */
export const filterActivities = (input) => {
  return {
    type: FILTER_ACTIVITIES,
    payload: input,
  };
};

/**
 * Action para ordenar los países.
 * @param {string} payload - Criterio de ordenamiento.
 */
export const filterOrder = (payload) => {
  return {
    type: ORDEN,
    payload,
  };
};

/**
 * Action para agregar una actividad.
 * @param {Object} activities - Datos de la actividad a agregar.
 */
export const addActivity = (activities) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("https://pi-country-production-1156.up.railway.app/activities", activities);
      return dispatch({ type: ADD_ACTIVITIES, payload: data });
    } catch (error) {
      alert("Error: " + error.response.data.error);
    }
  };
};

/**
 * Action para obtener la lista de actividades.
 */
export const getActivities = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("https://pi-country-production-1156.up.railway.app/activities");
      return dispatch({ type: GET_ACTIVITIES, payload: data });
    } catch (error) {
      alert("Error: " + error.response.data.error);
    }
  };
};

/**
 * Action para eliminar una actividad.
 * @param {string} id - ID de la actividad a eliminar.
 */
export const deleteActivity = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`https://pi-country-production-1156.up.railway.app/activities/${id}`);
      return dispatch({ type: DELETE_ACTIVITY, payload: data });
    } catch (error) {
      alert("Error: " + error.response.data.error);
    }
  };
};

/**
 * Action para actualizar una actividad.
 * @param {string} id - ID de la actividad a actualizar.
 * @param {Object} body - Datos actualizados de la actividad.
 */
export const updateActivity = (id, body) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`https://pi-country-production-1156.up.railway.app/activities/${id}`, body);
      return dispatch({ type: UPDATE_ACTIVITY, payload: data });
    } catch (error) {
      alert("Error: " + error.response.data.error);
    }
  };
};

/**
 * Action para establecer la página actual.
 * @param {number} page - Número de página.
 */
export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: page,
  };
};
