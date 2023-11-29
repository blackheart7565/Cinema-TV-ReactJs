import { configureStore } from "@reduxjs/toolkit";

import loaderError from "./reducer/loaderError.slice";
import mediaSlice from "./reducer/media.slice";

const store = configureStore({
	reducer: {
		loaderError: loaderError.reducer,
		media: mediaSlice.reducer,
	}
});

export default store;