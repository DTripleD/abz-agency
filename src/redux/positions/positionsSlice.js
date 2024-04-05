import { createSlice } from "@reduxjs/toolkit";
import { getPositions } from "./positionsOperations";

const initialState = {
  positions: [],
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = "";
};

const handleRejected = (state, action) => {
  state.error = action.payload;
};

export const positionsSlice = createSlice({
  name: "positions",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getPositions.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.positions = payload.positions;
      })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      ),
});

export default positionsSlice.reducer;
