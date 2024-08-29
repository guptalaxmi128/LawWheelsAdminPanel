import { combineReducers } from "redux";
import auth from "./auth/auth";
import user from "./user/user";
import contact from "./contact/contact";


export const reducers = combineReducers({
   auth,
   user,
   contact,

});
