import { createSlice } from "@reduxjs/toolkit";

const answersSlice = createSlice({
  name: "answers",
  initialState: [],
  reducers: {
    addAnswer(state, action) {
      state.items.push(action.payload);
    },
    updateAnswer(state, action) {
        state.answers.splice(action.payload);
    },
  },
});
export const { addAnswer, updateAnswer } = answersSlice.actions;
export default answersSlice.reducer;
