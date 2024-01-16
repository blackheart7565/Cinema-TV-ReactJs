import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
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
	update: (data: FormData) => Promise<void | IError>;
	updatePassword: (email: string, password: string, newPassword: string) => Promise<void | IError>;
}

const userEndpoints = {
	login: "user/login",
	registration: "user/registration",
	logout: "user/logout",
	refresh: "user/refresh",
	update: "user/update",
	update_password: "user/update-password",
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
		await privateAxios.post(userEndpoints.logout);
	},

	checkAuth: async (): Promise<IUserResponse | IError> => {
		try {
			const response = await publicAxios.get<IUserResponse>(userEndpoints.refresh);
			return response
		} catch (error: IError) {
			return error.data;
		}
	},

	update: async (data: FormData): Promise<void | IError> => {
		try {
			const { data: response } = await privateAxios.put(userEndpoints.update, data);
			return response;
		} catch (error: IError) {
			toast.error((
				<div>
					<div>
						{error.response.data.message}
					</div>
					<div>
						{error.response.data.details}
					</div>
				</div>
			))
			return;
		}
	},

	updatePassword: async (email: string, password: string, newPassword: string): Promise<void | IError> => {
		try {
			const { data } = await privateAxios.put(userEndpoints.update_password, {
				email,
				password,
				newPassword
			});
			return data;
		} catch (error: IError) {
			toast.error((
				<div>
					<div>
						{error.response.data.message}
					</div>
					<div>
						{error.response.data.details}
					</div>
				</div>
			))
			return;
		}
	}
}