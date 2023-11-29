import { createSlice } from "@reduxjs/toolkit";


interface IInitialState {

}

const initialState: IInitialState = {
	
}

const mediaSlice = createSlice({
	name: "media",
	initialState,
	reducers: {
	}
})

const media =  {
	actions: mediaSlice.actions,
	reducer: mediaSlice.reducer,
}

export default media;