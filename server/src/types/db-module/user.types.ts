import mongoose from "mongoose";

export type IObjectIdType = typeof mongoose.Types.ObjectId;

export interface DocumentResult<T> {
	_doc: T
}

export interface IUserScheme extends DocumentResult<IUserScheme> {
	avatar: string;
	poster: string;
	email: string;
	username: string;
	password: string;
}

export interface ITokenScheme {
	userId: IObjectIdType,
	refreshToken: string,
}