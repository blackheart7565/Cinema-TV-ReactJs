import {
	TypedUseSelectorHook,
	useDispatch,
	useSelector
} from "react-redux";
import errorSlice from "../store/reducer/error.slice";
import loaderSlice from "../store/reducer/loader.slice";
import mediaSlice from "../store/reducer/media.slice";
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

	return {
		dispatch,
		state: {
			loader,
			error,
			media,
		},
		actions: {
			...loaderSlice.actions,
			...errorSlice.actions,
			...mediaSlice.actions,
		},
	};
}