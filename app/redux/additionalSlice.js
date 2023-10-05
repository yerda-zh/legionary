'use client';
import { createSlice } from "@reduxjs/toolkit";

const additionalSlice = createSlice({
  name: "additional",
  initialState: ['', ''],
  reducers: {
    updateValue: (state, action) => {
      const { index, howmany, item } = action.payload;
      state.splice(index, howmany, item);
  },
  },
});
export const { updateValue } = additionalSlice.actions;
export default additionalSlice.reducer;
