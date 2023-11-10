import mongoose from "mongoose";

export type IObjectIdType = typeof mongoose.Types.ObjectId;

export interface DocumentResult<T> {
	_doc: T
}

export interface IUserScheme extends DocumentResult<IUserScheme> {
	email: string;
	username: string;
	password: string | undefined;
	salt: string | undefined;
	setHashPassword: (password: string) => void;
	validPassword: (password: string) => boolean;
}

export interface ITokenScheme {
	userId: IObjectIdType,
	refreshToken: string,
}
