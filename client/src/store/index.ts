import { configureStore } from "@reduxjs/toolkit";

import burgerMenuSlice from "./reducer/burger-menu.slice";
import error from "./reducer/error.slice";
import loader from "./reducer/loader.slice";
import mediaSlice from "./reducer/media.slice";
import userSlice from "./reducer/user-slice/user.slice";

const store = configureStore({
	reducer: {
		error: error.reducer,
		loader: loader.reducer,
		media: mediaSlice.reducer,
		burgerMenu: burgerMenuSlice.reducer,
		user: userSlice.reducer,
	}
});

export default store;