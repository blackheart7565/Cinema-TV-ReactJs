import mongoose, { Schema } from "mongoose";
import { schemaConfig } from "../configs/scheme.config";
import { IFavorite } from "../types/db-module/favorite.type";

export default mongoose.model<IFavorite>(
	"Favorite",
	new mongoose.Schema<IFavorite>({
		userId: {
			type: Schema.Types.ObjectId,
			ref: "User",
			require: true,
		},
		mediaId: {
			type: String,
			require: true,
		},
		mediaType: {
			type: String,
			enum: ["movie", "tv"],
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