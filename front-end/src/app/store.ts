import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "../features/Auth/AuthSlice";
import { apiSlice } from "./api/apiSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
	reducer: {
		auth: AuthSlice,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: (getDefaultMiddleWare) =>
		getDefaultMiddleWare().concat(apiSlice.middleware),
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
