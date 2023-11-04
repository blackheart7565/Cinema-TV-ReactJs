//~~

const baseTmdbUrl = process.env.TMDB_BASE_URL;
const apiTmdbKey = process.env.TMDB_API_KEY;

const getTmdbBaseUrl = async (endpoints: string, params?: any): Promise<string> => {
	const queryParams = new URLSearchParams(params);
	return `${baseTmdbUrl}${endpoints}?api_key=${apiTmdbKey}&${queryParams}`;
}

export default { getTmdbBaseUrl }