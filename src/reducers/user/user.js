import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  user: [],
  mutualForm:[],
  state: "idle",
  error: null,
  success: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
  
    case actionTypes.GET_USER:
      return {
        ...state,
        user: action.payload,
      };
      case actionTypes.GET_MUTUAL_FORM:
        return {
          ...state,
          mutualForm: action.payload,
        };
  

    default:
      return state;
  }
};

export default userReducer;
