import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// GET @ /api/keys
export const fetchKeys = createAsyncThunk("/api/keys", async (_, thunkAPI) => {
  try {
    const res = await axios.get("/keys");

    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// // GET @ /api/getKeysByMaker
// export const fetchKeysByMaker = createAsyncThunk(
//   "/api/keys/getKeysByMaker",
//   async (credentials, thunkAPI) => {
//     console.log("🚀 ~ Keys credentials:", credentials);
//     try {
//       const res = await axios.post("/keys/getKeysByMaker", credentials);
//       console.log("🚀 ~ res:", res);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// GET @ /api/getKeysByMaker
export const fetchKeysByMaker = createAsyncThunk(
  "/keys/getKeysByMaker",
  async ({ maker, model }, thunkAPI) => {
    try {
      const res = await axios.get(`/keys/${maker}+${model}`);

      // console.log("🚀 ~ res:", res);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// // GET @ /api/keys/getKeysByMaker with params
// export const fetchKeysByMaker = createAsyncThunk(
//   "/api/keys/getKeysByMaker",
//   async (credentials, thunkAPI) => {
//     console.log("🚀 ~ Keys credentials:", credentials);
//     try {
//       const queryParams = new URLSearchParams(credentials).toString();
//       const res = await axios.get(`/api/keys/getKeysByMaker?${queryParams}`);
//       console.log("🚀 ~ res:", res);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// POST @ /tasks
export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (text, thunkAPI) => {
    try {
      // const response = await axios.post("/tasks", { text });
      // return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// DELETE @ /keys/:id
export const deleteKey = createAsyncThunk(
  "tasks/deleteKey",
  async (keyId, thunkAPI) => {
    try {
      const response = await axios.delete(`/keys/${keyId}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
