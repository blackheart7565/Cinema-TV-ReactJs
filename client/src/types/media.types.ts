interface IMedia {
	mediaType: string;
}

export interface IMediaList extends IMedia {
	mediaCategory: string;
	page: string;
}
export interface IMediaDetails extends IMedia {
	mediaId: string;
}
export interface IMediaGenre extends IMedia { }
export interface IMediaSearch extends IMedia {
	query: string;
	page: string;
}