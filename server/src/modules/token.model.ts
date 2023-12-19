import mongoose from "mongoose";
import { schemaConfig } from "../configs/scheme.config";
import {
	ITokenScheme
} from "../types/db-module/user.types";

export default mongoose.model<ITokenScheme>(
	"Token",
	new mongoose.Schema<ITokenScheme>({
		userId: {
			type: mongoose.Types.ObjectId,
			ref: "User",
		},
		refreshToken: {
			type: String,
			required: true,
		},
	}, schemaConfig)
);