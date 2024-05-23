import { configureStore } from "@reduxjs/toolkit";
import breedsReducer from "./feature/breeds/breedsSlice";

export const store = configureStore({
  reducer: {
    breeds: breedsReducer,
  },
});

export default store;
