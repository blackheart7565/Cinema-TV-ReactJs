import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
	error: null,
}

const initialState: IInitialState = {
	error: null,
}

const errorSlice = createSlice({
	name: "loaderError",
	initialState,
	reducers: {

	},
});

const error = {
	actions: errorSlice.actions,
	reducer: errorSlice.reducer,
}

export default error;