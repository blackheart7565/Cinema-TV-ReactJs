export type StringNumber = string | number;

export interface INavigation {
	id: StringNumber;
	label?: StringNumber | undefined;
}

export interface IContent {
	id: StringNumber;
	node?: React.ReactNode;
}