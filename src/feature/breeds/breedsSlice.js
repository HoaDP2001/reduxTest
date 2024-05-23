import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBreeds = createAsyncThunk("breeds/fetchBreeds", async () => {
  const response = await axios.get("https://dogapi.dog/api/v2/breeds");
  return response.data.data;
});

const breedsSlice = createSlice({
  name: "breeds",
  initialState: {
    breeds: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBreeds.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBreeds.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.breeds = action.payload;
      })
      .addCase(fetchBreeds.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default breedsSlice.reducer;
