
export interface IFavorite {
	userId: any;
	mediaId: any;
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