
export interface IFavorite {
	id: number;
	userId: number;
	mediaId: number;
	mediaType: string,
	mediaPosterPath: string,
	mediaTitle: string,
	mediaRating: number,
	mediaReleaseDate: string,
}

export interface IUser {
	id: number;
	avatar: string;
	username: string;
	email: string;
	poster: string;
	favorite: IFavorite[]
}