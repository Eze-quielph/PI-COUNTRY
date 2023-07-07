import { GET_COUNTRY, GET_BY_NAME, GET_COUNTRY_DETAILS } from "../actions/index";

const initialState = {
  Countries: [],
  CountryFilter: [],
  activity: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY: {
      return {
        ...state,
        Countries: action.payload,
        CountryFilter: action.payload,
      };
    }
    case GET_BY_NAME: {
      return {
        ...state,
        Countries: action.payload,
      };
    }
    case GET_COUNTRY_DETAILS:{
      return {
        ...state,
        CountryFilter: action.payload
      }
    }
    default:
      return { ...state };
  }
};

export default rootReducer;
