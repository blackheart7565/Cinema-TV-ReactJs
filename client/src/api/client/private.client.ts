import axios from "axios";

import { IAuthResponse } from "../../types/axios.types";
import { axiosConfig } from "../config/client.config";
import publicAxios from "./public.client";

const privateAxios = axios.create({
	...axiosConfig,
});

privateAxios.interceptors.request.use(config => {
	config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
	return config;
})

privateAxios.interceptors.response.use((config) => {
	return config;
}, async (err) => {
	// Сохроаняем основной запрос
	const originalRequest = err.config;

	// Если ошибка равна 401 , что означает что польщователь не аторищован
	if (err.response.status == 401 && err.config && !err.config._isRetry) {
		originalRequest._isRetry = true;
		try {
			// Полизводым запрос на получение accessToken-a для обновления
			const response = await publicAxios.get<IAuthResponse>(`user/refresh`);
			// Сохраняем токен в локальном хранилище
			localStorage.setItem("token", response.data.accessToken);
			// И заново производым запрос
			return privateAxios.request(originalRequest);
		} catch (error) {
			console.log('Не Авторизован');
		}
	}
	throw err
});

export default privateAxios;