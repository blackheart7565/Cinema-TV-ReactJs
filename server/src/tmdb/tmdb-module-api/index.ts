import * as tmdbMediaApi from "./tmdb-media-api"
import * as tmdbPersonApi from "./tmdb-person-api"

export default {
	...tmdbMediaApi,
	...tmdbPersonApi
}