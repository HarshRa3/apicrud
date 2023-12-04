import { combineReducers } from "@reduxjs/toolkit";
import signUp from "./Slices/signupSlice";
import signIn from "./Slices/signinSlice";

const rootReducer = combineReducers({
  signUp: signUp,
  signIn: signIn,
});
export default rootReducer;
