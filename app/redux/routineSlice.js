'use client';
import { createSlice } from "@reduxjs/toolkit";


const routineSlice = createSlice({
  name: "routine",
  initialState: null,
  reducers: {
    setRoutine: (state, action) => {
      return action.payload;
    },
  },
});
export const { setRoutine } = routineSlice.actions;
export default routineSlice.reducer;
