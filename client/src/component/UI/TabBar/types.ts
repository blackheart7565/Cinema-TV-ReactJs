export type StringNumber = string | number;

export interface INavigation {
	id: number;
	label?: StringNumber | undefined;
}

export interface IContent {
	id: StringNumber;
	node?: React.ReactNode;
}