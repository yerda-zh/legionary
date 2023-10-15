'use client';
import { createSlice } from "@reduxjs/toolkit";

const additionalSlice = createSlice({
  name: "bmi",
  initialState: null,
  reducers: {
    updateBmi: (state, action) => {
      return action.payload;
  },
  },
});
export const { updateBmi } = additionalSlice.actions;
export default additionalSlice.reducer;
