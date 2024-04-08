import { createSlice } from "@reduxjs/toolkit";
import { getToken, getUsers, postUser } from "./usersOperations";

const initialState = {
  total_pages: 1,
  page: 1,
  users: [],
  error: "",
  isLoading: true,
  token: "",
  isSent: false,
  isPosting: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setPage: (state, { payload }) => {
      if (payload === 1) {
        state.page = 1;
      } else {
        state.page += 1;
      }
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getToken.fulfilled, (state, { payload }) => {
        state.token = payload.token;
      })
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;

        state.error = "";
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.total_pages = payload.total_pages;
        state.isLoading = false;

        if (state.page === 1) {
          state.users = payload.users;
        } else {
          state.users = [...state.users, ...payload.users];
        }
        state.isLoading = false;
      })
      .addCase(getUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(postUser.pending, (state) => {
        state.isPosting = true;
      })
      .addCase(postUser.fulfilled, (state) => {
        state.isPosting = false;
        state.isSent = true;
      })
      .addCase(postUser.rejected, (state) => {
        state.isPosting = false;
      }),
});

export const { setPage } = usersSlice.actions;

export default usersSlice.reducer;
