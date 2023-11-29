import {
	TypedUseSelectorHook,
	useDispatch,
	useSelector
} from "react-redux";
import loaderErrorSlice from "../store/reducer/loaderError.slice";
import mediaSlice from "../store/reducer/media.slice";
import {
	IDispatchType,
	IStateType
} from "../types/store.types";


export const useReducer = () => {
	const useAppSelector: TypedUseSelectorHook<IStateType> = useSelector;
	const useAppDispatch = () => useDispatch<IDispatchType>();

	const dispatch = useAppDispatch();
	const loaderError = useAppSelector(state => state.loaderError);
	const media = useAppSelector(state => state.media);

	return {
		dispatch,
		state: {
			loaderError,
			media,
		},
		actions: {
			...loaderErrorSlice.actions,
			...mediaSlice.actions,
		},
	};
}