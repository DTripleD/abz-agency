import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../api/instance";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (page, thunkAPI) => {
    try {
      const { data } = await instance.get(`/users?page=${page}&count=6`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);
