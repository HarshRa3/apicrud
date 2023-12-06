import { combineReducers } from "@reduxjs/toolkit";
import signUp from "./Slices/signupSlice";
import signIn from "./Slices/signinSlice";
import AdminPoll from "./Slices/AdminPoll";
import DeleteOption from "./Slices/DeleteOption";
const rootReducer = combineReducers({
  signUp: signUp,
  signIn: signIn,
  AdminPoll:AdminPoll,
  DeleteOption:DeleteOption,
});
export default rootReducer;
