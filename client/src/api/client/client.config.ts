
const PORT = 7000;

export const axiosConfig = {
	withCredentials: true,
	baseURL: `http://localhost:${PORT}/api/v1`,
	header: {
		"Content-Type": "application/json",
	}
}