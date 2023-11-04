
interface IMedia {
	mediaType: string;
	mediaId: string;
}
export interface IMediaList {
	mediaType: string;
	mediaCategory: string;
	page: string;
}
export interface IMediaGenre {
	mediaType: string;
}
export interface IMediaSearch {
	mediaType: string;
	mediaQuery: string;
	page: string;
}
export interface IMediaDetails extends IMedia {
	images?: object,
	videos?: object,
	recommendation?: object,
	credits?: object,
}
export interface IMediaImages extends IMedia { }
export interface IMediaVideos extends IMedia { }
export interface IMediaCredits extends IMedia { }
export interface IMediaRecommendations extends IMedia { }
