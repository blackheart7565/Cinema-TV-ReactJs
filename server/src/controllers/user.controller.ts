import bcrypt from "bcrypt";
import { Request, Response } from "express";
import responseHandler from "../handlers/response.handler";
import userModel from "../modules/user.model";
import tokenService from "../services/token.service";

class UserController {

	private static _cookiesTokenName: string = "authToken";

	constructor() { }

	async registration(req: Request, res: Response) {
		try {
			const { username, email, password } = req.body;

			const userExist = await userModel.findOne({ email });

			if (userExist) return responseHandler.badRequest(res, "Email already using");

			const hashPass = await bcrypt.hash(password, 8);
			const user = await userModel.create({
				username,
				email,
				password: hashPass,
			});

			if (!user) return responseHandler.badRequest(res, "Error to creating user!");

			const tokens = tokenService.generateToken({
				id: user.id,
				username: user.username,
				email: user.email,
			});
			const saveToken = await tokenService.saveToken(user.id, tokens.refreshToken);

			res.cookie(UserController._cookiesTokenName, saveToken.refreshToken, {
				httpOnly: true,
				maxAge: 60 * 60 * 100,
			});
			return responseHandler.ok(res, {
				...tokens,
				user: {
					id: user.id,
					username: user.username,
					email: user.email,
				}
			});
		} catch (error: any) {
			responseHandler.errors(res, error.message);
		}
	}

	async login(req: Request, res: Response) {
		try {
			const { email, password } = req.body;

			const userExist = await userModel.findOne({ email });
			if (!userExist) return responseHandler.badRequest(res, "User not found");

			const isPassword = await bcrypt.compare(password, userExist.password);
			if (!isPassword) return responseHandler.badRequest(res, "Wrong password");

			const tokens = tokenService.generateToken({
				id: userExist.id,
				username: userExist.username,
				email: userExist.email,
			});

			const saveToken = await tokenService.saveToken(userExist.id, tokens.refreshToken);

			res.cookie(UserController._cookiesTokenName, saveToken.refreshToken, {
				httpOnly: true,
				maxAge: 60 * 60 * 100,
			});

			return responseHandler.ok(res, {
				...tokens,
				user: {
					id: userExist.id,
					username: userExist.username,
					email: userExist.email,
				}
			});
		} catch (error: any) {
			responseHandler.errors(res, error.message);
		}
	}

	async logout(req: Request, res: Response) {
		try {
			const { authToken } = req.cookies;
			if (!authToken) return responseHandler.badRequest(res, "Token not found!")

			const tokens = await tokenService.removeToken(authToken);
			res.clearCookie(UserController._cookiesTokenName);

			return responseHandler.ok(res, {
				...tokens,
				message: "User logout",
			});
		} catch (error: any) {
			responseHandler.errors(res, error.message);
		}
	}

	async refresh(req: Request, res: Response) {
		try {
			const { authToken } = req.cookies;
			if (!authToken) return responseHandler.unauthorized(res);

			const tokenData = tokenService.validateRefreshToken(authToken);
			const findToken = tokenService.findToken(authToken);

			if (!tokenData || !findToken) return responseHandler.unauthorized(res);

			const user = await userModel.findById(tokenData.id);

			if (user) {
				const tokens = tokenService.generateToken({
					id: user.id,
					username: user.username,
					email: user.email,
				});

				const saveToken = await tokenService.saveToken(user.id, tokens.refreshToken);

				res.cookie(UserController._cookiesTokenName, saveToken.refreshToken, {
					httpOnly: true,
					maxAge: 60 * 60 * 100,
				});

				return responseHandler.ok(res, {
					...tokens,
					user: {
						id: user.id,
						username: user.username,
						email: user.email,
					}
				});
			}
		} catch (error: any) {
			responseHandler.errors(res, error.message);
		}
	}

	async delete(req: Request, res: Response) {
		try {
			const { email } = req.body;

			const userExist = await userModel.findOne({ email });

			if (!userExist) responseHandler.badRequest(res, "User not found");

			await userModel.deleteOne({ email });

			return responseHandler.ok(res, "Deleted successfully user!");
		} catch (error: any) {
			responseHandler.errors(res, error.message);
		}
	}
}

export default new UserController();