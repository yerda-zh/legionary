"use client";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: null,
    name: null,
    email: null,
    routine: null,
  },
  reducers: {
    setUser: (state, action) => {
      const { id, name, email, routine } = action.payload;
      state.id = id;
      state.name = name;
      state.email = email;
      state.routine = routine;
    },
    setRoutine: (state, action) => {
      state.routine = action.payload;
    },
  },
});
export const { setUser, setRoutine } = userSlice.actions;
export default userSlice.reducer;
