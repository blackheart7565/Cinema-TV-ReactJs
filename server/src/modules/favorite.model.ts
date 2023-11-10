import mongoose from "mongoose";
import { schemaConfig } from "../configs/scheme.config";
import { IFavorite } from "../types/db-module/favorite.type";

export default mongoose.model<IFavorite>(
	"Favorite",
	new mongoose.Schema<IFavorite>({
		userId: {
			type: mongoose.Types.ObjectId,
			ref: "User",
			require: true,
		},
		mediaId: {
			type: mongoose.Types.ObjectId,
			require: true,
		},
		mediaType: {
			type: String,
			require: true,
		},
		mediaPosterPath: {
			type: String,
			require: true,
		},
		mediaTitle: {
			type: String,
			require: true,
		},
		mediaRating: {
			type: Number,
			require: true,
		},
		mediaReleaseDate: {
			type: String,
			require: true,
		},
	}, schemaConfig)
);