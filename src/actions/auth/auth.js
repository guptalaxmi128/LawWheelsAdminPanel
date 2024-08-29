import * as api from "../../api";
import { ADMIN_LOGIN ,LOGOUT} from "../../constants/actionTypes";

export const adminLogin = (userInfo) => async (dispatch) => {
  try {
    const { data } = await api.adminLogin(userInfo);
    dispatch({ type: ADMIN_LOGIN, payload: data });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const logout = () => {
  return {
      type: LOGOUT,
  };
};