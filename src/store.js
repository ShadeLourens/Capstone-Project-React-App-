// store.js
// Configures the global Redux store with persistence for cart, user, and shipping state

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses localStorage for persistence

// Import slices
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import shippingReducer from "./shippingSlice";

// Combine all individual reducers into one root reducer
const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  shipping: shippingReducer,
});

// Config for redux-persist
const persistConfig = {
  key: "root", // Key for localStorage
  storage, // Default: localStorage
};

// Wraps rootReducer in persistReducer to enable persistence
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Creates the store using the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
});

// Creates the persistor to be used in <PersistGate /> (main.jsx)
export const persistor = persistStore(store);
