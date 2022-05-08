import { configureStore } from "@reduxjs/toolkit";
import burger from "./slice/burger";

export const getBurgerState = state => state.burger;

export const store = configureStore({
  reducer: {
    burger,
  },

  devTools: process.env.NODE_ENV !== "production",
});
