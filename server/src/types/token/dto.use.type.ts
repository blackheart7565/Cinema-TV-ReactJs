import { IObjectIdType } from "../db-module/user.types";

export interface IDtoUser {
	id: IObjectIdType;
	username: string;
	email: string;
}