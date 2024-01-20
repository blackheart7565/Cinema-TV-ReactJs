
export interface IFavorite {
	userId: number;
	mediaId: number | string;
	mediaType: string,
	mediaPosterPath: string,
	mediaTitle: string,
	mediaRating: number,
	mediaReleaseDate: string,
}

export interface IResponseFavorite extends IFavorite {
	id: number;
}

export interface IUser {
	id: number;
	avatar: string;
	username: string;
	email: string;
	poster: string;
	favorite: IResponseFavorite[];
}