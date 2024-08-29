import * as api from "../../api";
import {
 GET_CONTACT,
 GET_REACH_OUT
} from "../../constants/actionTypes";

export const getContact = () => async (dispatch) => {
    try {
      const { data } = await api.getContact();
      dispatch({ type: GET_CONTACT, payload: data });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };


  export const getReachOut = () => async (dispatch) => {
    try {
      const { data } = await api.getReachOut();
      dispatch({ type: GET_REACH_OUT, payload: data });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };