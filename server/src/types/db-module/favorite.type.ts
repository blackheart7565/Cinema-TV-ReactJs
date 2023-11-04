import mongoose from "mongoose";

export interface IFavorite {
	userId: {
		type: mongoose.Types.ObjectId,
		ref: string,
		require: boolean,
	},
	mediaId: {
		type: mongoose.Types.ObjectId,
		require: boolean,
	},
	mediaType: string,
	mediaPosterPath: string,
	mediaTitle: string,
	mediaRating: number,
	mediaReleaseDate: string,
}