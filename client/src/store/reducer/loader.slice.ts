import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
	isLoading: boolean,
}

const initialState: IInitialState = {
	isLoading: false,
}

const loaderSlice = createSlice({
	name: "loaderError",
	initialState,
	reducers: {
		setIsLoading(state, actions: PayloadAction<boolean>) {
			state.isLoading = actions.payload;
		}
	},
});

const loader = {
	actions: loaderSlice.actions,
	reducer: loaderSlice.reducer,
}

export default loader;