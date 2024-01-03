import { IUser } from "@/src/types/user.types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
	user: IUser | undefined;
	isAuth: boolean;
}

const initialState: IInitialState = {
	user: undefined,
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