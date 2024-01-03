
export interface IPopupItem {
	id: string | number;
	icon?: React.ReactNode;
	path?: string | undefined;
	body?: string;
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
		body: "Exit",
	},
]

export const popupItemAuth: Array<IPopupItem> = [
	{
		id: 1,
		path: "/auth",
		body: "Login",
	}
]