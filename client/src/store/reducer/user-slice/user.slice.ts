import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../types/user.types";
import { userLogout } from "./thunk/user.slice.thunk";

interface IInitialState {
	user: IUser | undefined;
	isAuth: boolean;
}

const initialState: IInitialState = {
	user: {} as IUser,
	isAuth: false,
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<IUser>) => {
			state.user = action.payload;
		},
		setIsAuth: (state, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(userLogout.fulfilled, (state, action): void => {
			state.isAuth = false;
			state.user = {} as IUser;
		})
	},
});

const userReducer = {
	actions: userSlice.actions,
	reducer: userSlice.reducer,
}

export default userReducer;