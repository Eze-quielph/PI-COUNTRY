import {
  GET_COUNTRY,
  GET_BY_NAME,
  GET_COUNTRY_DETAILS,
  CLEAN_DETAIL,
  FILTER_COUNTRY_CONTINENTE,

  ORDEN,
  ADD_ACTIVITIES
} from "../actions/index";

const initialState = {
  Countries: [],
  CountryFilter: [],
  countryDetail: [],
  allActivitiesFilter: [],
  allActivities:[]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    //Cargo los country a mi estado y su copia
    case GET_COUNTRY: {
      return {
        ...state,
        Countries: action.payload,
        CountryFilter: action.payload,
      };
    }
    //Busco por nombre
    case GET_BY_NAME: {
      return {
        ...state,
        CountryFilter: action.payload,
      };
    }
    //Guardado de Detail y Limpiador
    case GET_COUNTRY_DETAILS: {
      return {
        ...state,
        countryDetail: action.payload,
      };
    }
    case CLEAN_DETAIL:
      return{
          ...state, 
          countryDetail: []
      }
      //Filtro por continente
    case FILTER_COUNTRY_CONTINENTE: {
      const allCountries = [...state.Countries];

      const continentFiltered =
        action.payload === "All"
          ? allCountries
          : allCountries.filter(
              (coun) =>
                coun.continente.toLowerCase() === action.payload.toLowerCase()
            );

      return {
        ...state,
        CountryFilter: continentFiltered,
      };
    }

    //Orden por nombre y poblacion
    case ORDEN: {
      const allCountries1 = state.CountryFilter

       let allCountriesFilterByOrder

      if(action.payload === 'A'){
          allCountriesFilterByOrder = allCountries1.sort((a,b) => a.name.localeCompare(b.name))
      }

      if(action.payload === 'D'){
          allCountriesFilterByOrder = allCountries1.sort((a,b) => b.name.localeCompare(a.name))
      }
      
      if(action.payload === 'G'){
        allCountriesFilterByOrder = allCountries1.sort((a,b) => a.poblacion - b.poblacion)
    }

    if(action.payload === 'P'){
        allCountriesFilterByOrder = allCountries1.sort((a,b) => b.poblacion - a.poblacion)
    }
      
      return{
          ...state,
          CountryFilter: [...allCountriesFilterByOrder]
      }
    }
    //Guardado de Actividades
    case ADD_ACTIVITIES: {
      return {
        ...state,
        CountryFilter: [],
        allActivities: action.payload,
        allActivitiesFilter: action.payload,
      };
    }

    default:
      return { ...state };
  }
};

export default rootReducer;
