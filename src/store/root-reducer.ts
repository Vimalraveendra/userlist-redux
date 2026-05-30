import { combineReducers } from "@reduxjs/toolkit";
import usersReducer from "../features/users/redux/usersSlice";

export const rootReducer=combineReducers({
    users:usersReducer
})
