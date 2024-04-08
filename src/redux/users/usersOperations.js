import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../api/instance";

export const getToken = createAsyncThunk(
  "user/getToken",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get("/token");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

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

export const postUser = createAsyncThunk(
  "users/postUser",
  async (formData, { rejectWithValue, getState }) => {
    const token = getState().users.token;

    const config = {
      headers: { Token: token },
    };

    try {
      const { data } = await instance.post("/users", formData, config);

      return { data, formData };
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);
