import mongoose from "mongoose";
import { IObjectIdType } from "./user.types";

export interface IFavorite {
	userId: {
		type: IObjectIdType,
		ref: string,
		require: boolean,
	},
	mediaId: {
		type: IObjectIdType,
		require: boolean,
	},
	mediaType: string,
	mediaPosterPath: string,
	mediaTitle: string,
	mediaRating: number,
	mediaReleaseDate: string,
}