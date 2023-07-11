import {
  GET_COUNTRY,
  GET_BY_NAME,
  GET_COUNTRY_DETAILS,
  CLEAN_DETAIL,
  FILTER_COUNTRY_CONTINENTE,
  ORDEN,
  ADD_ACTIVITIES,
  GET_ACTIVITIES,
  FILTER_ACTIVITIES,
  SET_CURRENT_PAGE,
  DELETE_ACTIVITY
} from "../actions/index";

const initialState = {
  Countries: [],
  CountryFilter: [],
  countryDetail: [],
  allActivitiesFilter: [],
  allActivities: [],
  currentPage: [],
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
      return {
        ...state,
        countryDetail: [],
      };
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
    //filtro por actividad
    case FILTER_ACTIVITIES: {
      if (action.payload !== "All") {
        const activity = state.allActivities.find(
          (a) => a.name === action.payload
        );
        if (activity && activity.Countries) {
          return {
            ...state,
            CountryFilter: activity.Countries,
            allActivitiesFilter: activity.Countries,
          };
        } else {
          // No se encontró un país relacionado, devolver array vacío
          return {
            ...state,
            CountryFilter: [],
          };
        }
      }
      return {
        ...state,
        CountryFilter: state.Countries,
      };
    }

    //Orden por nombre y poblacion
    case ORDEN: {
      const allCountries1 = [...state.CountryFilter];

      if (action.payload === "A") {
        allCountries1.sort((a, b) => a.name.localeCompare(b.name));
      }

      if (action.payload === "D") {
        allCountries1.sort((a, b) => b.name.localeCompare(a.name));
      }

      if (action.payload === "G") {
        allCountries1.sort((a, b) => a.poblacion - b.poblacion);
      }

      if (action.payload === "P") {
        allCountries1.sort((a, b) => b.poblacion - a.poblacion);
      }

      if (action.payload === "All") {
        return {
          ...state,
          CountryFilter: [...state.Countries],
        };
      }

      return {
        ...state,
        CountryFilter: allCountries1,
      };
    }

    //Guardado de Actividades
    case ADD_ACTIVITIES: {
      return {
        ...state,
        allActivities: action.payload,
        allActivitiesFilter: action.payload,
      };
    }
    case GET_ACTIVITIES: {
      return {
        ...state,
        allActivities: action.payload,
        allActivitiesFilter: action.payload
      };
    }

    //eliminar actividad
    case DELETE_ACTIVITY: {
      const allActivities = state.allActivities.filter((element) => element.id !== action.payload);
      return {
        ...state,
        allActivitiesFilter: allActivities
      };
    }
    

    //Paginado
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
