import { configureStore } from "@reduxjs/toolkit";

import loader from "./reducer/loader.slice";
import mediaSlice from "./reducer/media.slice";
import error from "./reducer/error.slice";

const store = configureStore({
	reducer: {
		error: error.reducer,
		loader: loader.reducer,
		media: mediaSlice.reducer,
	}
});

export default store;