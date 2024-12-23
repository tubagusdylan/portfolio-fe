import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    id: "",
    username: "",
    profileName: "",
    role: "",
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.id = action.payload.id;
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
