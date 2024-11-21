import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    username: "",
    profileName: "",
    role: "",
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.username = action.payload.username;
      state.profileName = action.payload.profileName;
      state.role = action.payload.isAdmin === 1 ? "Admin" : "Visitor";
    },
    setLogoutUser: (state) => {
      state.username = "";
      state.profileName = "";
      state.role = "";
    },
  },
});

export const { setAuthUser, setLogoutUser } = authSlice.actions;
export default authSlice.reducer;
