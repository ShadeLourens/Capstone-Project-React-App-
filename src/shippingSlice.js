import { createSlice } from "@reduxjs/toolkit";

const shippingSlice = createSlice({
  name: "shipping",
  initialState: {
    method: "",
  },
  reducers: {
    setShippingMethod: (state, action) => {
      state.method = action.payload;
    },
    clearShippingMethod: (state) => {
      state.method = "";
    },
  },
});

export const { setShippingMethod, clearShippingMethod } = shippingSlice.actions;
export default shippingSlice.reducer;
