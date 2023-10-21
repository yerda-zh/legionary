'use client';
import { configureStore } from "@reduxjs/toolkit";

import answersReducer from "./answersSlice";
import additionalReducer from './additionalSlice';
import routineReducer from './routineSlice';
import userReducer from './userSlice';
import fetchingReducer from "./fetchingSlice";

const store = configureStore({
  reducer: {
    answers: answersReducer,
    additional: additionalReducer,
    routine: routineReducer,
    user: userReducer,
    fetching: fetchingReducer,
  },
});
export default store;
