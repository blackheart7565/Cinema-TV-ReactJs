import tmdbModuleApi from "./tmdb-module-api"

export const tmdbApi = {
	...tmdbModuleApi.tmdbMediaApi,
	...tmdbModuleApi.tmdbPersonApi
}