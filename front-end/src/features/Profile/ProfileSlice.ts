import { apiSlice } from "../../app/api/apiSlice";

export interface Profile {
	username: string;
	email: string;
	password: string;
	updatedAt: string;
}

export const ProfileSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getUserProfile: builder.query<Profile, { userId: string }>({
			query: ({ userId }) => ({
				url: `/profile/${userId}`,
				method: "GET",
				credentials: "omit",
			}),
			providesTags: ["Profile"],
		}),
		patchUserProfile: builder.mutation<
			void,
			{ profile: Partial<Omit<Profile, "updatedAt">>; userId: string }
		>({
			query: ({ profile, userId }) => ({
				url: `/profile/${userId}`,
				method: "PATCH",
				body: {
					...profile,
				},
				credentials: "omit"
			}),
			invalidatesTags: ["Profile"],
		}),
	}),
});

export const { useGetUserProfileQuery, usePatchUserProfileMutation } = ProfileSlice;
