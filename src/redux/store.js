import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/usersSlice";
import positionsReducer from "./positions/positionsSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    positions: positionsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
