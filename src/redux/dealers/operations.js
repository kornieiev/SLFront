import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// fetchDealers - GET @ /api/dealers
export const fetchDealers = createAsyncThunk(
  "/api/dealers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/dealers");

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// createDealer - POST @ /keys
export const createDealer = createAsyncThunk(
  "dealers/createDealer",
  async (credentials, thunkAPI) => {
    const { dealerName, dealerCategory } = credentials;

    try {
      const response = await axios.post("/dealers", {
        dealerName,
        dealerCategory,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
