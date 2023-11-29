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

export interface IResponseMediasList {
	page: number
	results: IResponseMediasListResult[]
	total_pages: number
	total_results: number
}

export interface IResponseMediasListResult {
	adult: boolean
	backdrop_path?: string
	genre_ids: number[]
	id: number
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string
	release_date: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}

export interface Dates {
	maximum: string
	minimum: string
}

export interface IResponseMediasListPlayingNow extends IResponseMediasList {
	dates: Dates;
}