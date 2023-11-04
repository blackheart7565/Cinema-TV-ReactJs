export { };

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			BASE_URL_DB: string;
			PORT: number;
			TMDB_BASE_URL: string;
			TMDB_API_KEY: string;
			TMDB_API_TOKEN: string;
		}
	}
}