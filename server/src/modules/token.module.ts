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

// usersSchema.methods.setPassword = function (password: string) {
// this.salt = crypto.randomBytes(16).toString("hex");
// this.password = crypto.pbkdf2Sync(
// 	password,
// 	this.salt,
// 	1000,
// 	64,
// 	"sha512"
// ).toString("hex");
// }

// usersSchema.methods.validPassword = function (password: string) {
// const hash = crypto.pbkdf2Sync(
// 	password,
// 	this.salt,
// 	1000,
// 	64,
// 	"sha512"
// ).toString("hex");

// return this.password === hash;
// }