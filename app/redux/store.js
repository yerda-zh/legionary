import { configureStore } from "@reduxjs/toolkit";
import answersReducer from "./answers";

const store = configureStore({
  reducer: {
    answersReducer,
  },
});
export default store;
