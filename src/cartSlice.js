// cartSlice.js
// Manages shopping cart state using Redux Toolkit

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart", // Slices name for cart state
  initialState: {
    items: [], // Array to store cart items
  },
  reducers: {
    // Adds a new product to the cart
    addToCart: (state, action) => {
      state.items.push(action.payload); // Pushes a product into the cart array
    },

    // Clears the entire cart
    clearCart: (state) => {
      state.items = []; // Resets cart to empty array
    },

    // Removes a specific item from the cart by matching its name
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.name === action.payload.name
      );
      if (index !== -1) {
        state.items.splice(index, 1); // Removes item if found
      }
    },
  },
});

// Export actions to be used in components
export const { addToCart, clearCart, removeFromCart } = cartSlice.actions;

// Export reducer to include in the Redux store
export default cartSlice.reducer;
