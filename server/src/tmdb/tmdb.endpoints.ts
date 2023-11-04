import tmdbModuleEndpoints from "./module-endpoints";

export const tmdbEndpoints = {
	...tmdbModuleEndpoints.tmdbMediaEndpoints,
	...tmdbModuleEndpoints.tmdbPersonEndpoints
}