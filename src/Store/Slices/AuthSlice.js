import { createSlice } from "@reduxjs/toolkit";

let storedUser = null;

try {
  const rawUser = localStorage.getItem("user");
  storedUser = rawUser && rawUser !== "undefined" ? JSON.parse(rawUser) : null;
} catch (error) {
  storedUser = null;
  localStorage.removeItem("user");
}
const storedToken = localStorage.getItem("token");

const initialState = {
  user: storedUser,
  token: storedToken || null,
  isAuthenticated: !!storedToken && !!storedUser,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const { user, token } = action.payload;

      state.user = user;
      state.token = token;
      state.isAuthenticated = true;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
    },

    updateUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;

      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const { loginSuccess, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;
