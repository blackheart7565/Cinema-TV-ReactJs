import {
	TypedUseSelectorHook,
	useDispatch,
	useSelector
} from "react-redux";
import burgerMenuSlice from "../store/reducer/burger-menu.slice";
import errorSlice from "../store/reducer/error.slice";
import loaderSlice from "../store/reducer/loader.slice";
import mediaSlice from "../store/reducer/media.slice";
import userSlice from "../store/reducer/user.slice";
import {
	IDispatchType,
	IStateType
} from "../types/store.types";


export const useReducer = () => {
	const useAppSelector: TypedUseSelectorHook<IStateType> = useSelector;
	const useAppDispatch = () => useDispatch<IDispatchType>();

	const dispatch = useAppDispatch();
	const loader = useAppSelector(state => state.loader);
	const error = useAppSelector(state => state.error);
	const media = useAppSelector(state => state.media);
	const burgerMenu = useAppSelector(state => state.burgerMenu);
	const user = useAppSelector(state => state.user);

	return {
		dispatch,
		state: {
			loader,
			error,
			media,
			burgerMenu,
			user,
		},
		actions: {
			...loaderSlice.actions,
			...errorSlice.actions,
			...mediaSlice.actions,
			...burgerMenuSlice.actions,
			...userSlice.actions,
		},
	};
}