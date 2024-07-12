import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "../auth/operations";

import {
  fetchKeys,
  addTask,
  deleteKey,
  fetchKeysByMaker,
  editKeyById,
} from "./operations";

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
        console.log(
          "action.payload in keys slice - filteredKeys:",
          action.payload
        );
        state.filteredKeys = action.payload;
      },
    },
    setFilters2: {
      reducer(state, action) {
        console.log("🚀 ~ reducer ~ action.payload:", action.payload);
        const [name, value] = action.payload;
        console.log("name: value", name, ":", value);
        console.log("state", state.filters);

        state.filters = { ...state.filters, [name]: value };

        if (name === "Maker") {
          console.log("Maker CHANGED");
          state.filters.ModelsArr = state.allKeys.filter(
            (item) => item.Maker === state.filters.Maker
          );
          state.filters.Year = "";
          state.filters.TypeOfKey = "";
        }

        if (name === "Model") {
          console.log("Model CHANGED");
          state.filters.YearsArr = state.filters.ModelsArr.filter((item) => {
            return item.Model === state.filters.Model;
          });
          state.filters.TypeOfKey = "";
        }

        if (name === "Year") {
          console.log("Year CHANGED");
          state.filters.TypeOfKeyArr = state.filters.YearsArr.filter((item) => {
            return item.Year === state.filters.Year;
          });
        }
        if (name === "TypeOfKey") {
          console.log("TypeOfKey CHANGED");
          state.keysForRender = state.filters.TypeOfKeyArr.filter((item) => {
            console.log("item.TypeOfKey", item["Type of Key"]);
            return item["Type of Key"] === value;
          });
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
      // fetchKeysByMaker
      .addCase(fetchKeysByMaker.pending, handlePending)
      .addCase(fetchKeysByMaker.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.keysByMaker = action.payload;
      })
      .addCase(fetchKeysByMaker.rejected, handleRejected)
      // editKeyById
      .addCase(editKeyById.pending, handlePending)
      .addCase(editKeyById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.keysByMaker = action.payload;
        state.filteredKeys = action.payload;
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
