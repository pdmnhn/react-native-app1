import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  initialState: null,
  name: "user",
  reducers: {
    setUser: (_state, action) => {
      return action.payload;
    },
  },
});

export const { setUser } = user.actions;

export default user.reducer;
