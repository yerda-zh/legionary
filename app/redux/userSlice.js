"use client";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: null,
    name: null,
    email: null,
    bmi: null,
    joined: null,
    routine: null,
  },
  reducers: {
    setUser: (state, action) => {
      const { id, name, email, bmi, joined, routine } = action.payload;
      state.id = id;
      state.name = name;
      state.email = email;
      state.bmi = bmi;
      state.joined = joined;
      state.routine = routine;
    },
    setRoutine: (state, action) => {
      state.routine = action.payload;
    },
    setBmi: (state, action) => {
      state.bmi = action.payload;
    }
  },
});
export const { setUser, setRoutine, setBmi } = userSlice.actions;
export default userSlice.reducer;
