// userSlice.js
// Manages user login/logout state using Redux Toolkit's createSlice

import { createSlice } from "@reduxjs/toolkit";

// Define the user slice
const userSlice = createSlice({
  name: "user", // Slice name
  initialState: {
    username: "", // Stores the logged-in user's name
    isLoggedIn: false, // Tracks login status
  },
  reducers: {
    // Action to log in a user
    login: (state, action) => {
      state.username = action.payload; // Set username from dispatched payload
      state.isLoggedIn = true; // Set login status to be true
    },

    // Action to log out a user
    logout: (state) => {
      state.username = ""; // Clear the username
      state.isLoggedIn = false; // Resets the login status
    },
  },
});

// Exports the generated action creators
export const { login, logout } = userSlice.actions;

// Exports the reducer to be added to the store
export default userSlice.reducer;
