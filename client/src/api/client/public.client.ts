import axios from "axios";

import { axiosConfig } from "../config/client.config";

const publicAxios = axios.create({
	...axiosConfig,
});

publicAxios.interceptors.response.use(res => {
	if (res && res.data) {
		return res
	};
	return res;
}, (err) => {
	throw err.response.data;
})

export default publicAxios;