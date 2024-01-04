import { AxiosResponse } from "axios";
import privateAxios from "../api/client/private.client";
import publicAxios from "../api/client/public.client";
import { IUser } from "../types/user.types";

interface IUserResponse {
	accessToken: string;
	user: IUser;
}
type IError = any;

interface IUserService {
	login: (email: string, password: string) =>
		Promise<AxiosResponse<IUserResponse>>;
	registration: (username: string, email: string, password: string) =>
		Promise<AxiosResponse<IUserResponse>>;
	logout: () => Promise<void>;
	checkAuth: () => Promise<IUserResponse | IError>;
}

const userEndpoints = {
	login: "user/login",
	registration: "user/registration",
	logout: "user/logout",
	refresh: "user/refresh",
}

export const UserService: IUserService = {
	login: async (email: string, password: string): Promise<AxiosResponse<IUserResponse>> => {
		const response = await privateAxios.post<IUserResponse>(userEndpoints.login, {
			email,
			password,
		});
		return response;
	},

	registration: async (username: string, email: string, password: string): Promise<AxiosResponse<IUserResponse>> => {
		const response = await privateAxios.post<IUserResponse>(userEndpoints.registration, {
			username,
			email,
			password,
		});
		return response;
	},

	logout: async (): Promise<void> => {
	},

	checkAuth: async (): Promise<IUserResponse | IError> => {
		try {
			const response = await publicAxios.get<IUserResponse>(userEndpoints.refresh);
			return response
		} catch (error: IError) {
			return error.data;
		}
	},
}