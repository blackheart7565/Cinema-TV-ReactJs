import * as mediaEndpoint from "./tmdb.media.endpoints";
import * as personEndpoint from "./tmdb.person.endpoints";

export default {
	...mediaEndpoint,
	...personEndpoint,
}