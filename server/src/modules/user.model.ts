import mongoose from "mongoose";
import { schemaConfig } from "../configs/scheme.config";
import {
	IUserScheme
} from "../types/db-module/user.types";

export default mongoose.model<IUserScheme>(
	"User",
	new mongoose.Schema<IUserScheme>({
		avatar: {
			type: String,
			required: false,
			default: "",
		},
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		poster: {
			type: String,
			required: false,
			default: "",
		}
	}, schemaConfig)
);
