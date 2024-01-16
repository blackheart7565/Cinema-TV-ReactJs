
interface IRegExpValidator {
	validateEmailRegexp: (email: string) => boolean;
}

class RegExpValidator implements IRegExpValidator {
	private _usernameRegexpLine = new RegExp("^[0-9A-Za-zА-Яа-я\\s\\!\\@\\#\\$\\%\\^\\&\\*\\(\\)\\_\\+\\-\\=\\~\\`]{1,20}$", "");
	private _emailRegexpLine = new RegExp("^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}.){1,2}[-A-Za-z]{2,})$", "u");

	private _passwordRegexpLine = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[\\W_]).{8,}$", "");

	public get getUsernameRegexpLine(): string {
		return this._usernameRegexpLine.source;
	}

	public get getEmailRegexpLine(): string {
		return this._emailRegexpLine.source;
	}

	public get getPasswordRegexpLine(): string {
		return this._passwordRegexpLine.source;
	}

	public validateUsernameRegexp(username: string): boolean {
		if (username.match(this.getUsernameRegexpLine)) {
			return true;
		}
		return false;
	}

	public validateEmailRegexp(email: string): boolean {
		if (email && email.match(this.getEmailRegexpLine)) {
			return true;
		}
		return false;
	}

	public validatePasswordRegexp(password: string): boolean {
		if (password && password.match(this.getPasswordRegexpLine)) {
			return true;
		}
		return false;
	}
}

export default RegExpValidator;