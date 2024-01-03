import { AxiosResponse } from "axios";
import privateAxios from "../api/client/private.client";
import { IUser } from "../types/user.types";

interface IUserResponse {
	accessToken: string;
	user: IUser;
}

interface IUserService {
	login: (email: string, password: string) =>
		Promise<AxiosResponse<IUserResponse>>;
	registration: (username: string, email: string, password: string) =>
		Promise<AxiosResponse<IUserResponse>>;
	logout: () => Promise<void>;
}

export const UserService: IUserService = {
	login: async (email: string, password: string): Promise<AxiosResponse<IUserResponse>> => {
		return {} as AxiosResponse<IUserResponse>;
	},

	registration: async (username: string, email: string, password: string): Promise<AxiosResponse<IUserResponse>> => {
		const response = await privateAxios.post<IUserResponse>("user/registration", {
			username,
			email,
			password,
		});
		return response;
	},

	logout: async (): Promise<void> => {
	}
}