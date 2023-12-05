import { combineReducers } from "@reduxjs/toolkit";
import signUp from "./Slices/signupSlice";
import signIn from "./Slices/signinSlice";
import AdminPoll from "./Slices/AdminPoll";

const rootReducer = combineReducers({
  signUp: signUp,
  signIn: signIn,
  AdminPoll:AdminPoll,
});
export default rootReducer;
