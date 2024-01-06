import { userLogout } from "../../../store/reducer/user-slice/thunk/user.slice.thunk";
import { IDispatchType } from "../../../types/store.types";

export interface IPopupItem {
	id: string | number;
	icon?: React.ReactNode;
	path?: string | undefined;
	body?: string;
	onClick?: (dispatch: IDispatchType) => Promise<void>;
}

const handleLogout = async (dispatch: IDispatchType): Promise<void> => {
	dispatch(userLogout());
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
