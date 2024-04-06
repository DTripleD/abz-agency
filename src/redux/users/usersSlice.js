import { createSlice } from "@reduxjs/toolkit";
import { getToken, getUsers } from "./usersOperations";

const initialState = {
  total_pages: 1,
  page: 1,
  users: [],
  error: "",
  isLoading: true,
  token: "",
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
      state.page += 1;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getToken.fulfilled, (state, { payload }) => {
        state.token = payload.token;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.total_pages = payload.total_pages;

        if (state.page === 1) {
          state.users = payload.users;
        } else {
          state.users = [...state.users, ...payload.users];
        }
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
