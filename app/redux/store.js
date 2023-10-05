'use client';
import { configureStore } from "@reduxjs/toolkit";
import answersReducer from "./answersSlice";
import additionalReducer from './additionalSlice';

 
const store = configureStore({
  reducer: {
    answers: answersReducer,
    additional: additionalReducer
  },
});
export default store;
