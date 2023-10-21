'use client';
import { createSlice } from "@reduxjs/toolkit";

const answersSlice = createSlice({
  name: "answers",
  initialState: [],
  reducers: {
    addAnswer: (state, action) => {
      state.push(action.payload);
    },
    updateAnswer: (state, action) => {
        const { index, howmany, item } = action.payload;
        state.splice(index, howmany, item);
    },
    resetAnswer: (state, action) => {
      return [];
    }
  },
});
export const { addAnswer, updateAnswer, resetAnswer } = answersSlice.actions;
export default answersSlice.reducer;
