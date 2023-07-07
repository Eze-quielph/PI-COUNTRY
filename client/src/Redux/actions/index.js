import axios from "axios";

export const GET_COUNTRY = "GET_COUNTRY";
export const GET_COUNTRY_DETAILS = "GET_COUNTRY_DETAILS";
export const GET_BY_NAME = "GET_BY_NAME";

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

export const getCountryByName = (name) => {
  return async function (dispatch) {
    const response = await axios(`http://localhost:3001/countries/?name=${name}`);
    const data = response.data;

    return dispatch({
      type: GET_BY_NAME,
      payload: data,
    });
  };
};
