import mongoose from "mongoose";
// import crypto from "crypto"
import { schemaConfig } from "../configs/scheme.config";
import {
	IUser
} from "../types/db-module/user.types";

const nameModel = "Users";

const usersSchema = new mongoose.Schema<IUser>({
	username: {
		type: String,
		require: true,
		unique: true
	},
	password: {
		type: String,
		require: true,
	},
	salt: {
		type: String,
		require: true,
	}
}, schemaConfig);

// usersSchema.methods.setPassword = function (password: string) {
// 	const byte = crypto.randomBytes(16).toString("hex");
// }

export default mongoose.model<IUser>(nameModel, usersSchema);