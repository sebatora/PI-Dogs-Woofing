import { CLEAN_DETAIL, GET_DOGS, GET_DOG_BY_ID } from "./action-type";

const initialState = {
  allDogs: [], 
  allDogsFilter: [], // ES LA COPIA PARA PODER ORDENAR O FILTRAR
  dogById: {}
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

    case CLEAN_DETAIL: {
      return {
        ...state,
        dogById: {},
      };
    };

    default:
      return { ...state }
  }
}
export default rootReducer;