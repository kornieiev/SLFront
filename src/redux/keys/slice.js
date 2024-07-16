import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "../auth/operations";

import { fetchKeys, createKey, deleteKey, editKeyById } from "./operations";

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
    setFilters: {
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

        const newArrToRender = state.keysForRender.map((item) => {
          if (item._id === action.payload._id) {
            return action.payload;
          }
          return item;
        });
        state.keysForRender = newArrToRender;
      })
      .addCase(editKeyById.rejected, handleRejected)

      // createKey
      .addCase(createKey.pending, handlePending)
      .addCase(createKey.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.allKeys.push(action.payload);
      })
      .addCase(createKey.rejected, handleRejected)

      //
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

      // logOut
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const keysReducer = keysSlice.reducer;

export const { setFilteredKeys, setFilters } = keysSlice.actions;