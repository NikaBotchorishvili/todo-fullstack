import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import  {RootState} from "../../app/store"
type State = {
    user: string | null;
    accessToken: string | null;
}

const AuthSlice = createSlice({
    name:"auth",
    initialState: { user: null, accessToken: null } as State,
    reducers: {
        setCredentials: (state, action: PayloadAction<State>) => {
            const { user, accessToken } = action.payload;

            state.user = user;
            state.accessToken = accessToken;
        },
        logOut: (state) => {
            state.user = null;
            state.accessToken = null;
        },
    },
})


export const { setCredentials, logOut } = AuthSlice.actions

export const SelectCurrentUser = (state: RootState) => state.auth.user
export const SelectCurrentAccessToken = (state: RootState) => state.auth.accessToken
export default AuthSlice.reducer;

