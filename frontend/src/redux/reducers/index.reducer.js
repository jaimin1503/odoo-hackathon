import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";

const rootReducers = combineReducers({
  auth: authReducer,
});
export default rootReducers;
