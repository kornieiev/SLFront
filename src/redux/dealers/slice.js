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
    // choosedDealerCategory: "",
    // choosedDealer: "",
    isLoading: false,
    error: null,
  },
  reducers: {
    // chooseDealerCategory: {
    //   reducer(state, action) {
    //     state.choosedDealer = "";
    //     state.choosedDealerCategory = action.payload;
    //   },
    // },
    // chooseDealerName: {
    //   reducer(state, action) {
    //     state.choosedDealer = action.payload;
    //   },
    // },
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
        console.log("action.payload-slice", action.payload);
        state.isLoading = false;
        state.error = null;
        state.allDealers.push(action.payload.result);
      })
      .addCase(createDealer.rejected, handleRejected);
  },
});

export const dealersReducer = dealersSlice.reducer;

export const { chooseDealerCategory, chooseDealerName } = dealersSlice.actions;
