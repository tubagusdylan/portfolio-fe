import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    username: "",
    profileName: "",
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.username = action.payload.username;
      state.profileName = action.payload.profileName;
    },
    setLogoutUser: (state) => {
      state.username = "";
      state.profileName = "";
    },
  },
});

export const { setAuthUser, setLogoutUser } = authSlice.actions;
export default authSlice.reducer;
