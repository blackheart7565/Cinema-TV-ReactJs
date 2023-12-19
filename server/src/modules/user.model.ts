import mongoose from "mongoose";
import { schemaConfig } from "../configs/scheme.config";
import {
	IUserScheme
} from "../types/db-module/user.types";

export default mongoose.model<IUserScheme>(
	"User",
	new mongoose.Schema<IUserScheme>({
		username: {
			type: String,
			require: true
		},
		email: {
			type: String,
			require: true,
			unique: true
		},
		password: {
			type: String,
			require: true,
		},
	}, schemaConfig)
);
