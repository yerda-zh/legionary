'use client';
import { configureStore } from "@reduxjs/toolkit";
import answersReducer from "./answersSlice";
import additionalReducer from './additionalSlice';
import routineReducer from './routineSlice';
 
const store = configureStore({
  reducer: {
    answers: answersReducer,
    additional: additionalReducer,
    routine: routineReducer
  },
});
export default store;
