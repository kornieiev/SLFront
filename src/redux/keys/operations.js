import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// fetchKeys - GET @ /api/keys
export const fetchKeys = createAsyncThunk("/api/keys", async (_, thunkAPI) => {
  try {
    const res = await axios.get("/keys");

    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// editKeyById - PATCH @ /keys/:id
export const editKeyById = createAsyncThunk(
  "keys/editKeyById",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.patch(
        `/keys/${credentials._id}`,
        credentials
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// createKey - POST @ /keys
export const createKey = createAsyncThunk(
  "keys/createKey",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/keys", { ...credentials });
      return response.data;
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

// updateDealerPriceByKeyId - PUT @ /keys/required/:id
export const updateDealerPriceByKeyId = createAsyncThunk(
  "keys/updateDealerPriceByKeyId",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.put(
        `/keys/dealer/${credentials.id}`,
        credentials
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
