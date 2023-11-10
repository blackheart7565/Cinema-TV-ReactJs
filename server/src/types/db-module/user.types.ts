
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