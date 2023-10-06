'use client';
import { createSlice } from "@reduxjs/toolkit";


const routineSlice = createSlice({
  name: "routine",
  initialState: [],
  reducers: {
    setRoutine: (state, action) => {
      state.splice(0, 1, action.payload);
    },
  },
});
export const { setRoutine } = routineSlice.actions;
export default routineSlice.reducer;
