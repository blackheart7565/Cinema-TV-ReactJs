import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
	isActiveMenu: boolean,
}

const initialState: IInitialState = {
	isActiveMenu: false,
}

const burgerMenuSlice = createSlice({
	name: "loaderError",
	initialState,
	reducers: {
		setIsActiveMenu(state, actions: PayloadAction<boolean>) {
			state.isActiveMenu = actions.payload;
		}
	},
});

const burgerMenu = {
	actions: burgerMenuSlice.actions,
	reducer: burgerMenuSlice.reducer,
}

export default burgerMenu;