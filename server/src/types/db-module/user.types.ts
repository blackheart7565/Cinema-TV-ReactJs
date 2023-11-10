import mongoose, { HydratedDocument } from "mongoose";

<<<<<<< HEAD
export type IObjectIdType = typeof mongoose.Types.ObjectId;

export interface DocumentResult<T> {
	_doc: T
}

export interface IUserScheme extends DocumentResult<IUserScheme> {
	email: string;
	username: string;
	password: string;
}

export interface ITokenScheme {
	userId: IObjectIdType,
	refreshToken: string,
}
=======
interface DocumentResult<T> {
	_doc: T
}

export interface IUser extends DocumentResult<IUser> {
	email: string;
	username: string;
	password: string | undefined;
	salt: string | undefined;
	setPassword: (password: string) => void;
	validPassword: (password: string) => boolean;
}
>>>>>>> 035affc (Added to exceptions types and update users router)
