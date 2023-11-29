import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
	isLoading: boolean,
	error: null,
}

const initialState: IInitialState = {
	isLoading: false,
	error: null,
}

const loaderErrorSlice = createSlice({
	name: "loaderError",
	initialState,
	reducers: {
		setIsLoading(state, actions: PayloadAction<boolean>) {
			state.isLoading = actions.payload;
		}
	},
});

const loaderError = {
	actions: loaderErrorSlice.actions,
	reducer: loaderErrorSlice.reducer,
}

export default loaderError;