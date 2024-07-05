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