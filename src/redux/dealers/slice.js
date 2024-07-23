import { createSlice } from "@reduxjs/toolkit";
import { fetchDealers, createDealer } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const dealersSlice = createSlice({
  name: "dealers",
  initialState: {
    allDealers: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setFilters: {},
  },
  extraReducers: (builder) => {
    builder

      // fetchDealers
      .addCase(fetchDealers.pending, handlePending)
      .addCase(fetchDealers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.allDealers = action.payload;
      })
      .addCase(fetchDealers.rejected, handleRejected)

      // createDealer
      .addCase(createDealer.pending, handlePending)
      .addCase(createDealer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.allDealers.push(action.payload.result);
      })
      .addCase(createDealer.rejected, handleRejected);
  },
});

export const dealersReducer = dealersSlice.reducer;

export const { setFilters, setDealer } = dealersSlice.actions;
