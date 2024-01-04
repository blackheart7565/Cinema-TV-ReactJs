import { UserService } from "../../../services/user.service";
import userSlice from "../../../store/reducer/user.slice";
import { IDispatchType } from "../../../types/store.types";
import { IUser } from "../../../types/user.types";

export interface IPopupItem {
	id: string | number;
	icon?: React.ReactNode;
	path?: string | undefined;
	body?: string;
	onClick?: (dispatch: IDispatchType) => Promise<void>;
}

const handleLogout = async (dispatch: IDispatchType): Promise<void> => {
	await UserService.logout();
	dispatch(userSlice.actions.setIsAuth(false));
	dispatch(userSlice.actions.setUser({} as IUser));
}

export const popupItem: Array<IPopupItem> = [
	{
		id: 1,
		body: "Profile",
	},
	{
		id: 2,
		body: "Settings",
	},
	{
		id: 3,
		body: "Logout",
		onClick: handleLogout,
	},
]
