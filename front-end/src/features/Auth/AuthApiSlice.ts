import { apiSlice } from "../../app/api/apiSlice";

type UserFormData = {
	username: string;
	email: string;
	password: string;
};

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (credentials) => ({
				url: "auth/login",
				method: "POST",
				credentials: "omit",
				body: { ...credentials },
			}),
		}),
		register: builder.mutation<void, UserFormData>({
			query: ({ username, email, password }) => ({
				url: "auth/register",
				method: "POST",
				credentials: "omit",
				body: {
					username,
					email,
					password,
				},
			}),
		}),
	}),
});

export const { useLoginMutation, useRegisterMutation } = authApiSlice;
