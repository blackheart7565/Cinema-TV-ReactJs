import jwt from "jsonwebtoken";
import { DeleteResult } from "mongodb";
import tokenModule from "../modules/token.module";
import { IObjectIdType, ITokenScheme } from "../types/db-module/user.types";
import { IDtoUser } from "../types/token/dto.use.type";
import { ITokens } from "../types/token/token.type";

class TokenService {

	generateToken(payload: IDtoUser): ITokens {
		const accessSecret = process.env.TOKEN_ACCESS_SECRET || "";
		const refreshSecret = process.env.TOKEN_REFRESH_SECRET || "";

		const accessToken = jwt.sign(payload, accessSecret, { expiresIn: "30m" });
		const refreshToken = jwt.sign(payload, refreshSecret, { expiresIn: "30d" });

		return {
			accessToken,
			refreshToken
		};
	}

	async saveToken(userId: IObjectIdType, refreshToken: string): Promise<ITokenScheme> {
		const tokenExist = await tokenModule.findOne({ userId });

		if (tokenExist) {
			tokenExist.refreshToken = refreshToken;
			await tokenExist.save();
		}

		const token = tokenModule.create({
			userId,
			refreshToken,
		});

		return token;
	}

	async removeToken(refreshToken: string): Promise<DeleteResult> {
		const token = await tokenModule.deleteOne({ refreshToken });
		return token;
	}

	validateAccessToken(token: string): IDtoUser | null {
		try {
			const accessSecret = process.env.TOKEN_ACCESS_SECRET || "";

			const data = jwt.verify(token, accessSecret) as IDtoUser;

			return data;
		} catch {
			return null
		}
	}

	validateRefreshToken(token: string) {
		try {
			const refreshSecret = process.env.TOKEN_REFRESH_SECRET || "";

			const data = jwt.verify(token, refreshSecret) as IDtoUser;

			return data;
		} catch {
			return null
		}
	}

	async findToken(token: string) {
		const data = await tokenModule.findOne({ refreshToken: token });
		return data;
	}
}

export default new TokenService();