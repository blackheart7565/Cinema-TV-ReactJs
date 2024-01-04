import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/user.types";

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
		}
	},
});

const userReducer = {
	actions: userSlice.actions,
	reducer: userSlice.reducer,
}

export default userReducer;