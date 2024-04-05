import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../api/instance";

export const getPositions = createAsyncThunk(
  "positions/getPositions",
  async (page, thunkAPI) => {
    try {
      const { data } = await instance.get("/positions");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);
