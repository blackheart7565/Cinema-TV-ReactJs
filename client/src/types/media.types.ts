
interface IMediaPage {
	page: string | number;
}
interface IMedia {
	mediaType: string;
}

export interface IMediaList extends IMedia, IMediaPage {
	mediaCategory: string;
}
export interface IMediaDetails extends IMedia {
	mediaId: string;
}
export interface IMediaGenre extends IMedia { }
export interface IMediaSearch extends IMedia, IMediaPage {
	query: string;
}

export interface IResponseMediasList<T extends IResponseMediasListResult> {
	page: number
	results: T[];
	total_pages: number
	total_results: number
}

export interface IResponseMediasListResult {
	adult: boolean;
	backdrop_path?: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	overview: string;
	popularity: number;
	poster_path: string;
	vote_average: number;
	vote_count: number;
}
export interface IResponseMediasListResultMovie extends IResponseMediasListResult {
	original_title: string;
	release_date: string;
	title: string;
	video: boolean;
}
export interface IResponseMediasListResultSerials extends IResponseMediasListResult {
	origin_country: string[];
	original_name: string;
	first_air_date: string;
	name: string;
}
export type IResponseMediasListType = IResponseMediasListResultMovie | IResponseMediasListResultSerials;


export interface Dates {
	maximum: string
	minimum: string
}

export interface IResponseMediasListPlayingNow<T extends IResponseMediasListResult> extends IResponseMediasList<T> {
	dates: Dates;
}

export type IResponseMediasListValidationType<T extends string> = T extends "movie"
	? IResponseMediasListResultMovie
	: T extends "tv"
	? IResponseMediasListResultSerials
	: never;



// ====================> Media Details <====================

export interface IMediaDetailsRoot {
	adult: boolean
	backdrop_path: string
	belongs_to_collection: BelongsToCollection
	budget: number
	genres: Genre[]
	homepage: string
	id: number
	imdb_id: string
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string
	production_companies: ProductionCompany[]
	production_countries: ProductionCountry[]
	release_date: string
	revenue: number
	runtime: number
	spoken_languages: SpokenLanguage[]
	status: string
	tagline: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
	images: Images
	credits: Credits
	recommendation: Recommendation
	videos: Videos
}

export interface BelongsToCollection {
	id: number
	name: string
	poster_path: string
	backdrop_path: string
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
	profile_path: string
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

export interface Recommendation {
	page: number
	results: IMediaDetailsResult[]
	total_pages: number
	total_results: number
}

export interface IMediaDetailsResult {
	adult: boolean
	backdrop_path: string
	id: number
	title: string
	original_language: string
	original_title: string
	overview: string
	poster_path: string
	media_type: string
	genre_ids: number[]
	popularity: number
	release_date: string
	video: boolean
	vote_average: number
	vote_count: number
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
