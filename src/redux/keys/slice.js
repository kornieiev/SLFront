import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "../auth/operations";

import { fetchKeys, addTask, deleteKey, fetchKeysByMaker } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const keysSlice = createSlice({
  name: "keys",
  initialState: {
    allKeys: [],
    keysByMaker: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      // fetchKeys
      .addCase(fetchKeys.pending, handlePending)
      .addCase(fetchKeys.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.allKeys = action.payload;
      })
      .addCase(fetchKeys.rejected, handleRejected)
      // fetchKeysByMaker
      .addCase(fetchKeysByMaker.pending, handlePending)
      .addCase(fetchKeysByMaker.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.keysByMaker = action.payload;
      })
      .addCase(fetchKeysByMaker.rejected, handleRejected)
      //
      .addCase(addTask.pending, handlePending)
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, handleRejected)
      .addCase(deleteKey.pending, handlePending)
      .addCase(deleteKey.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (task) => task.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteKey.rejected, handleRejected)
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const keysReducer = keysSlice.reducer;
