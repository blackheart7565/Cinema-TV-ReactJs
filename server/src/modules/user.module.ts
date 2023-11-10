import mongoose from "mongoose";
import { schemaConfig } from "../configs/scheme.config";
import {
	IUserScheme
} from "../types/db-module/user.types";

const userScheme = new mongoose.Schema<IUserScheme>({
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
}, schemaConfig);

// userScheme.methods.validPassword = function (password: string) {
// 	const hash = crypto.pbkdf2Sync(
// 		password,
// 		this.salt,
// 		1000,
// 		64,
// 		"sha512"
// 	).toString("hex");

// 	return this.password === hash;
// }

export default mongoose.model<IUserScheme>("User", userScheme);

