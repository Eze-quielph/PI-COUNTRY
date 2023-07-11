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

export const getCountry = () => {
  return async function (dispatch) {
    const response = await axios(`http://localhost:3001/countries`);
    const country = response.data;
    dispatch({
      type: GET_COUNTRY,
      payload: country,
    });
  };
};
export const getCountryByName = (name) => {
  return async function (dispatch) {
    const response = await axios(
      `http://localhost:3001/countries/?name=${name}`
    );
    const data = response.data;

    return dispatch({
      type: GET_BY_NAME,
      payload: data,
    });
  };
};

export const getCountryDetails = (id) => {
  return async function (dispatch) {
    const response = await axios(`http://localhost:3001/countries/${id}`);
    const country = response.data;
    dispatch({
      type: GET_COUNTRY_DETAILS,
      payload: country,
    });
  };
};

export const cleanDetail = () => {
  return {
    type: CLEAN_DETAIL,
  };
};

export const filterCountryByContinente = (input) => {
  return {
    type: FILTER_COUNTRY_CONTINENTE,
    payload: input,
  };
};

export const filterActivities = (input) => {
  return {
    type: FILTER_ACTIVITIES,
    payload: input,
  };
};

export const filterOrder = (payload) => {
  return {
    type: ORDEN,
    payload,
  };
};

export const addActivity = (activities) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/activities",
        activities
      );
      return dispatch({ type: ADD_ACTIVITIES, payload: data });
    } catch (error) {
      alert("Error: " + error.response.data.error);
    }
  };
};

export const getActivities = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/activities");
      return dispatch({ type: GET_ACTIVITIES, payload: data });
    } catch (error) {
      alert("Error: " + error.response.data.error);
    }
  };
};

//delete de actividad
export const deleteActivity = (id)=>{
  return async(dispatch)=>{
    try {
      const {data} = await axios.delete(`http://localhost:3001/activities/${id}`)
      return dispatch({type: DELETE_ACTIVITY, payload: data})
    } catch (error) {
      alert("Error " + error.response.data.error)
    }
  }
}

//Paginado
export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: page,
  };
};
