import { combineReducers } from "@reduxjs/toolkit";
import signUp from "./Slices/signupSlice";
import signIn from "./Slices/signinSlice";
import AdminPoll from "./Slices/AdminPoll";
import DeleteOption from "./Slices/DeleteOption";
import DeleteTitle from "./Slices/DeleteTitle";
import AddPoll from "./Slices/AddPoll";
const rootReducer = combineReducers({
  signUp: signUp,
  signIn: signIn,
  AdminPoll:AdminPoll,
  DeleteOption:DeleteOption,
  DeleteTitle:DeleteTitle,
  AddPoll:AddPoll,
});
export default rootReducer;
