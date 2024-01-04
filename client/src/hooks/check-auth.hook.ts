import { useEffect } from "react";
import { toast } from "react-toastify";
import { UserService } from "../services/user.service";
import userSlice from "../store/reducer/user.slice";
import { useReducer } from "./reducer.hook";

export const useCheckAuth = () => {
	const { dispatch } = useReducer();

	useEffect(() => {
		(async () => {
			if (localStorage.getItem("token")) {
				const { data, error } = await UserService.checkAuth();

				if (error) {
					toast.error(error);
				}

				if (data) {
					localStorage.setItem("token", data.accessToken);
					dispatch(userSlice.actions.setIsAuth(true));
					dispatch(userSlice.actions.setUser(data.user));
				}
			}
		})();
	}, [dispatch]);
}