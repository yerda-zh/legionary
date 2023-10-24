'use client';
import { configureStore } from "@reduxjs/toolkit";

import answersReducer from "./answersSlice";
import userReducer from './userSlice';
import fetchingReducer from "./fetchingSlice";

const store = configureStore({
  reducer: {
    answers: answersReducer,
    user: userReducer,
    fetching: fetchingReducer,
  },
});
export default store;
