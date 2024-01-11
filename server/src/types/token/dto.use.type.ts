import { IObjectIdType } from "../db-module/user.types";

export interface IDtoUser {
	id: IObjectIdType;
	avatar?: string;
	username: string;
	email: string;
	poster?: string;
}