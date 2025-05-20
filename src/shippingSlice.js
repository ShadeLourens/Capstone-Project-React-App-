// shippingSlice.js
// Manages the selected shipping method using Redux Toolkit

import { createSlice } from "@reduxjs/toolkit";

const shippingSlice = createSlice({
  name: "shipping", // Slices name
  initialState: {
    method: "", // Stores selected shipping method (e.g. "standard", "express")
  },
  reducers: {
    // Sets the chosen shipping method
    setShippingMethod: (state, action) => {
      state.method = action.payload;
    },

    // Clears the shipping method (e.g. on cart reset)
    clearShippingMethod: (state) => {
      state.method = "";
    },
  },
});

// Export actions for use in components
export const { setShippingMethod, clearShippingMethod } = shippingSlice.actions;

// Export reducer to include in Redux store
export default shippingSlice.reducer;
