import {
	createApi,
	fetchBaseQuery,
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../../features/Auth/AuthSlice";
import { RootState } from "../store";


const baseQuery = fetchBaseQuery({
	baseUrl: `${import.meta.env.VITE_API_URL}`,
	credentials: "include",
	prepareHeaders: (headers, { getState }) => {
		const accessToken = (getState() as RootState).auth.accessToken;
		if (accessToken) {
			headers.set("authorization", `Bearer ${accessToken}`);
		}

		return headers;
	},
});

const baseQueryWithReAuth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);

	if (
		("error" in result &&
			result.error &&
			"originalStatus" in result.error &&
			result.error.originalStatus == 403) ||
		result.error?.status === 403
	) {
		
		//  Sending refresh token to generate new access token
		const refreshResult = await baseQuery("/refresh/", api, extraOptions);
		if (refreshResult?.data) {
			const refreshResultData = refreshResult.data as RootState;
			const user = (api.getState() as RootState).auth.user;
			api.dispatch(setCredentials({ ...refreshResultData.auth, user }));

			result = await baseQuery(args, api, extraOptions);
		} else {
			api.dispatch(logOut());
		}
	}
	return result;
};

export const apiSlice = createApi({
	baseQuery: baseQueryWithReAuth,
	tagTypes: ["Todos", "Profile"],
	endpoints: (builder) => ({}),
});
