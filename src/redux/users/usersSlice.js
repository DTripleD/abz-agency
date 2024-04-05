import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./usersOperations";

const initialState = {
  total_pages: 1,
  page: 1,
  users: [],
  error: "",
  isLoading: true,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = "";
};

const handleRejected = (state, action) => {
  state.error = action.payload;
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setPage: (state) => {
      state.page++;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.total_pages = payload.total_pages;
        state.users = [...state.users, ...payload.users];
        state.isLoading = false;
      })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      ),
});

export const { setPage } = usersSlice.actions;

export default usersSlice.reducer;
