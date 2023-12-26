import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
type State = {
	user: string | null;
	accessToken: string | null;
};

const AuthSlice = createSlice({
	name: "auth",
	initialState: {
		user:
			window.localStorage.getItem("user") &&
			window.localStorage.getItem("user"),
		accessToken:
			window.localStorage.getItem("token") &&
			window.localStorage.getItem("token"),
	} as State,
	reducers: {
		setCredentials: (state, action: PayloadAction<State>) => {
			const { user, accessToken } = action.payload;

			if (accessToken) {
				window.localStorage.setItem("token", accessToken);
				state.accessToken = accessToken;
			}
			if (user) {
				window.localStorage.setItem("user", user);
				state.user = user;
			}
		},
		logOut: (state) => {
			state.user = null;
			state.accessToken = null;
			window.localStorage.removeItem("user");
			window.localStorage.removeItem("token");
		},
	},
});

export const { setCredentials, logOut } = AuthSlice.actions;

export const SelectCurrentUser = (state: RootState) => state.auth.user;
export const SelectCurrentAccessToken = (state: RootState) =>
	state.auth.accessToken;
export default AuthSlice.reducer;
