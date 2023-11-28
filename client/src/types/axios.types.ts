import { IUser } from "./user.types";

export interface IAuthResponse {
	accessToken: string;
	refreshToken: string;
	user: IUser;
}