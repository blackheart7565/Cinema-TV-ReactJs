import { IResponseMediasListResult, IResponseMediasListResultMovie, IResponseMediasListResultSerials } from "../media.types";

// ====================> Media Details  All <====================

export interface IActor {
	id: number | string;
	pathImage: string;
	name: string;
}

// ====================> Media Details API<====================

export interface IMediaDetailsRoot<TDetails extends string> {
	adult: boolean
	backdrop_path: string
	genres: Genre[]
	homepage: string
	id: number
	original_language: string
	overview: string
	popularity: number
	poster_path: string
	production_companies: ProductionCompany[]
	production_countries: ProductionCountry[]
	spoken_languages: SpokenLanguage[]
	status: string
	tagline: string
	vote_average: number
	vote_count: number
	images: Images
	credits: Credits
	recommendation: Recommendation<TDetails>
	videos: Videos
}
export interface IMediaDetailsMovieRoot<TDetails extends string>
	extends IMediaDetailsRoot<TDetails> {
	belongs_to_collection: any
	budget: number
	imdb_id: string
	original_title: string
	release_date: string
	revenue: number
	runtime: number
	title: string
	video: boolean
}
export interface IMediaDetailsSerialsRoot<TDetails extends string>
	extends IMediaDetailsRoot<TDetails> {
	created_by: CreatedBy[]
	episode_run_time: number[]
	first_air_date: string
	in_production: boolean
	languages: string[]
	last_air_date: string
	last_episode_to_air: LastEpisodeToAir
	name: string
	next_episode_to_air: NextEpisodeToAir
	networks: Network[]
	number_of_episodes: number
	number_of_seasons: number
	origin_country: string[]
	original_name: string
	seasons: Season[]
	type: string
}
export interface Genre {
	id: number
	name: string
}

export interface ProductionCompany {
	id: number
	logo_path: string
	name: string
	origin_country: string
}

export interface ProductionCountry {
	iso_3166_1: string
	name: string
}

export interface SpokenLanguage {
	english_name: string
	iso_639_1: string
	name: string
}

export interface Images {
	backdrops: Backdrop[]
	id: number
	logos: Logo[]
	posters: Poster[]
}

export interface Backdrop {
	aspect_ratio: number
	height: number
	iso_639_1?: string
	file_path: string
	vote_average: number
	vote_count: number
	width: number
}

export interface Logo {
	aspect_ratio: number
	height: number
	iso_639_1: string
	file_path: string
	vote_average: number
	vote_count: number
	width: number
}

export interface Poster {
	aspect_ratio: number
	height: number
	iso_639_1?: string
	file_path: string
	vote_average: number
	vote_count: number
	width: number
}

export interface Credits {
	id: number
	cast: Cast[]
	crew: Crew[]
}

export interface Cast {
	adult: boolean
	gender: number
	id: number
	known_for_department: string
	name: string
	original_name: string
	popularity: number
	profile_path?: string
	cast_id: number
	character: string
	credit_id: string
	order: number
}

export interface Crew {
	adult: boolean
	gender: number
	id: number
	known_for_department: string
	name: string
	original_name: string
	popularity: number
	profile_path?: string
	credit_id: string
	department: string
	job: string
}

export interface Videos {
	id: number
	results: IMediaDetailsVideoResult[]
}

export interface IMediaDetailsVideoResult {
	iso_639_1: string
	iso_3166_1: string
	name: string
	key: string
	site: string
	size: number
	type: string
	official: boolean
	published_at: string
	id: string
}

export interface CreatedBy {
	id: number
	credit_id: string
	name: string
	gender: number
	profile_path: string
}
export interface LastEpisodeToAir {
	id: number
	name: string
	overview: string
	vote_average: number
	vote_count: number
	air_date: string
	episode_number: number
	episode_type: string
	production_code: string
	runtime: number
	season_number: number
	show_id: number
	still_path: string
}
export interface NextEpisodeToAir {
	id: number
	name: string
	overview: string
	vote_average: number
	vote_count: number
	air_date: string
	episode_number: number
	episode_type: string
	production_code: string
	runtime: number
	season_number: number
	show_id: number
	still_path: string
}
export interface Network {
	id: number
	logo_path: string
	name: string
	origin_country: string
}
export interface Season {
	air_date: string
	episode_count: number
	id: number
	name: string
	overview: string
	poster_path: string
	season_number: number
	vote_average: number
}

export interface Recommendation<TDetails extends string> {
	page: number
	results: IResponseMediasDetailsValidationType<TDetails>[]
	total_pages: number
	total_results: number
}

export interface IResponseMediasRecommendationResult
	extends IResponseMediasListResult { media_type: string }

export interface IResponseMediasRecommendationMovieResult
	extends IResponseMediasRecommendationResult, IResponseMediasListResultMovie { }

export interface IResponseMediasRecommendationSerialsResult
	extends IResponseMediasRecommendationResult, IResponseMediasListResultSerials { }

export type IResponseMediasDetailsValidationType<T extends string> = T extends "movie"
	? IResponseMediasRecommendationMovieResult
	: T extends "tv"
	? IResponseMediasRecommendationSerialsResult
	: never;

export type IResponseMediaDetailsValidationRoot<TDetails extends string> = TDetails extends "movie"
	? IMediaDetailsMovieRoot<TDetails>
	: TDetails extends "tv"
	? IMediaDetailsSerialsRoot<TDetails>
	: never;
