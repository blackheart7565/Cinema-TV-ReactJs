import mongoose from "mongoose";
import { schemaConfig } from "../configs/scheme.config";
import { IFavorite } from "../types/db-module/favorite.type";

const nameModel: string = "Favorite";
const refUserModel: string = "Users";

const favoriteSchema = new mongoose.Schema<IFavorite>({
	userId: {
		type: mongoose.Types.ObjectId,
		ref: refUserModel,
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
}, schemaConfig);

export default mongoose.model<IFavorite>(nameModel, favoriteSchema);