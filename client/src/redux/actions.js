import { CLEAN_DETAIL, GET_DOGS, GET_DOG_BY_ID } from "./action-type";
import axios from "axios";
const endpoint = "http://localhost:3001/dogs";


// Trae todos los perros
export const getDogs = () => {  
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint)
      return dispatch({ type: GET_DOGS, payload: data });
    }
    catch (error) {
      return error.message;
    }
  };
};

// Trae los perros por ID
export const getDogById = (id) => {  
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${endpoint}/${id}`)
      return dispatch({ type: GET_DOG_BY_ID, payload: data });
    }
    catch (error) {
      return error.message;
    }
  };
};

// Limpia el estado
export const cleanDetail = (id) => {  
  return {type: CLEAN_DETAIL}
};