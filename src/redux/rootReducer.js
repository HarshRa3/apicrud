import { combineReducers } from "@reduxjs/toolkit";
import signUp from "./Slices/signupSlice";

const rootReducer=combineReducers({
    signUp:signUp,
})
export default rootReducer;