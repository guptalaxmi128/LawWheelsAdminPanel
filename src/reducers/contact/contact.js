import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  contact: [],
  reachOut: [],
  state: "idle",
  error: null,
  success: null,
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CONTACT:
      return {
        ...state,
        contact: action.payload,
      };
    case actionTypes.GET_REACH_OUT:
      return {
        ...state,
        reachOut: action.payload,
      };

    default:
      return state;
  }
};

export default contactReducer;
