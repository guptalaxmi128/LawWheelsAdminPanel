import * as api from "../../api";
import {
 GET_USER,
 GET_MUTUAL_FORM
} from "../../constants/actionTypes";

export const getUser = () => async (dispatch) => {
    try {
      const { data } = await api.getUser();
      dispatch({ type: GET_USER, payload: data });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const getMutualForm = (id) => async (dispatch) => {
    try {
      const { data } = await api.getMutualForm(id);
      dispatch({ type: GET_MUTUAL_FORM, payload: data });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };