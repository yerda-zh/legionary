'use client';
import { createSlice } from "@reduxjs/toolkit";

const fetchingSlice = createSlice({
  name: "fetching",
  initialState: false,
  reducers: {
    setFetching: (state, action) => {
        return action.payload;
  },
  },
});
export const { setFetching } = fetchingSlice.actions;
export default fetchingSlice.reducer;
