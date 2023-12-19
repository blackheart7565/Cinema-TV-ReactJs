
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
