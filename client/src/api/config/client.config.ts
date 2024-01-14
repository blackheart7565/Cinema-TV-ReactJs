import queryString from "query-string";

const PORT: number = 8000;
export const BASE_URL_SERVER = `http://localhost:${PORT}/api/v1`;

export const axiosConfig = {
	withCredentials: true,
	baseURL: BASE_URL_SERVER,
	paramsSerializer: {
		encode: (params: any) => queryString.stringify(params),
	},
	header: {
		"Content-Type": "application/json",
	}
}