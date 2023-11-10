export { };

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			BASE_URL_DB: string;
			BASE_URL_GLOBAL_DB: string;
			PORT: number;

			TMDB_BASE_URL: string;
			TMDB_API_KEY: string;
			TMDB_API_TOKEN: string;

			TOKEN_ACCESS_SECRET: string;
			TOKEN_REFRESH_SECRET: string;
		}
	}
}

