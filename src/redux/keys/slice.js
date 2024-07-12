import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "../auth/operations";

import { fetchKeys, addTask, deleteKey, editKeyById } from "./operations";

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
    keysForRender: [],
    isLoading: false,
    error: null,
    filters: {
      Maker: "",

      ModelsArr: [],
      Model: "",

      YearsArr: [],
      Year: "",

      TypeOfKeyArr: [],
      TypeOfKey: "",
    },
  },
  reducers: {
    setFilteredKeys: {
      reducer(state, action) {
        state.filteredKeys = action.payload;
      },
    },
    setFilters2: {
      reducer(state, action) {
        const [name, value] = action.payload;

        state.filters = { ...state.filters, [name]: value };

        if (name === "Maker") {
          state.filters.ModelsArr = state.allKeys.filter(
            (item) => item.Maker === state.filters.Maker
          );
          state.filters.Model = "";
          state.filters.Year = "";
          state.filters.TypeOfKey = "";
          state.keysForRender = [];
        }

        if (name === "Model") {
          state.filters.YearsArr = state.filters.ModelsArr.filter(
            (item) => item.Model === state.filters.Model
          );
          state.filters.TypeOfKey = "";
          state.filters.Year = "";
          state.keysForRender = [];
        }

        if (name === "Year") {
          state.filters.TypeOfKeyArr = state.filters.YearsArr.filter(
            (item) => item.Year === state.filters.Year
          );
          state.filters.TypeOfKey = "";
          state.keysForRender = [];
        }
        if (name === "TypeOfKey") {
          console.log("state.keysForRender", state.keysForRender);
          state.keysForRender = state.filters.TypeOfKeyArr.filter(
            (item) => item["Type of Key"] === value
          );
        }
      },
    },
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
      // editKeyById
      .addCase(editKeyById.pending, handlePending)
      .addCase(editKeyById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.keysForRender = [];
        state.filters.Maker = "";
        state.filters.Model = "";
        state.filters.Year = "";
        state.filters.TypeOfKey = "";
        state.filters.ModelsArr = [];
        state.filters.YearsArr = [];
        state.filters.TypeOfKeyArr = [];
      })
      .addCase(editKeyById.rejected, handleRejected)
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

export const { setFilteredKeys, setFilters2 } = keysSlice.actions;
