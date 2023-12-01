import { combineReducers } from "@reduxjs/toolkit";

import userDetailSlices from './Slices/userDetailSlices'
const rootReducer=combineReducers({
    userDetail:userDetailSlices,
})
export default rootReducer;