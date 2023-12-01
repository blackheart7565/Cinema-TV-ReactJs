import queryString from "query-string";

const PORT = 8000;

export const axiosConfig = {
	withCredentials: true,
	baseURL: `http://localhost:${PORT}/api/v1`,
	paramsSerializer: {
		encode: (params: any) => queryString.stringify(params),
	},
	header: {
		"Content-Type": "application/json",
	}
}