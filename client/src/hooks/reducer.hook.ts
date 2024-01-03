import {
	TypedUseSelectorHook,
	useDispatch,
	useSelector
} from "react-redux";
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
	};
}