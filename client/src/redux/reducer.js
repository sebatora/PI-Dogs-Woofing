import { CLEAN_DETAIL, GET_DOGS, GET_DOG_BY_ID, GET_DOG_BY_NAME, GET_TEMPERAMENTS, POST_DOG } from "./action-type";

const initialState = {
  allDogs: [], 
  allDogsFilter: [], // ES LA COPIA PARA PODER ORDENAR O FILTRAR
  dogById: {},
  allTemperaments: [],
  allTemperamentsFilter: [],
  newDogs: []
};

const rootReducer = (state = initialState, {type, payload}) => {

  switch(type){

    case GET_DOGS: {
      return {
        ...state,
        allDogs: payload,
        allDogsFilter: payload
      };
    };

    case GET_DOG_BY_ID: {
      return {
        ...state,
        dogById: payload,
      };
    };

    case GET_DOG_BY_NAME: {
      return {
        ...state,
        allDogs: payload,
      };
    };

    case CLEAN_DETAIL: {
      return {
        ...state,
        dogById: {},
      };
    };

    case GET_TEMPERAMENTS: {
      return {
        ...state,
        allTemperaments: payload,
      };
    };

    case POST_DOG: {
      return {
        ...state,
      };
    };

    default:
      return { ...state }
  }
}
export default rootReducer;