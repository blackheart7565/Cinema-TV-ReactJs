import bcrypt from "bcrypt";
import { Request, Response } from "express";
import fileUpload, { UploadedFile } from "express-fileupload";
import fs from "fs";
import path from "path";
import { v4 } from "uuid";
import responseHandler from "../handlers/response.handler";
import userModel from "../modules/user.model";
import tokenService from "../services/token.service";

class UserController {

	private static _cookiesTokenName: string = "refreshToken";
	private static _maxAgeRefreshTokenCookie: number = 30 * 24 * 60 * 60 * 1000;

	constructor() { }

	private static saveRefreshTokenToCookie(res: Response, refreshToken: string): void {
		res.cookie(UserController._cookiesTokenName, refreshToken, {
			httpOnly: true,
			maxAge: UserController._maxAgeRefreshTokenCookie,
		});
	}
	private static removingTokenFromCookie(res: Response, nameToken?: string): void {
		res.clearCookie(nameToken || UserController._cookiesTokenName);
	}

	private static moveFileToStatic(image: UploadedFile): string | void {
		if (!image) return;

		const fileExtension: string = `.${image.name.split(".")[1]}`;
		let fileName: string = v4() + fileExtension;
		image.mv(path.resolve(__dirname, "..", "static", fileName));

		return fileName;
	}

	public async registration(req: Request, res: Response) {
		try {
			const { username, email, password } = req.body;

			const userExist = await userModel.findOne({ email });

			if (userExist) {
				return responseHandler.badRequest(res, "Email already using");
			}

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
				avatar: user.avatar,
				poster: user.poster,
			});
			const saveToken = await tokenService.saveToken(user.id, tokens.refreshToken);
			UserController.saveRefreshTokenToCookie(res, saveToken.refreshToken);

			return responseHandler.ok(res, {
				accessToken: tokens.accessToken,
				user: {
					id: user.id,
					username: user.username,
					email: user.email,
					avatar: user.avatar,
					poster: user.poster,
				}
			});
		} catch (error: any) {
			return responseHandler.errors(res, error.message);
		}
	}

	public async login(req: Request, res: Response) {
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
				avatar: userExist.avatar,
				poster: userExist.poster,
			});

			const saveToken = await tokenService.saveToken(userExist.id, tokens.refreshToken);
			UserController.saveRefreshTokenToCookie(res, saveToken.refreshToken);

			return responseHandler.ok(res, {
				accessToken: tokens.accessToken,
				user: {
					id: userExist.id,
					username: userExist.username,
					email: userExist.email,
					avatar: userExist.avatar,
					poster: userExist.poster,
				}
			});
		} catch (error: any) {
			responseHandler.errors(res, error.message);
		}
	}

	public async logout(req: Request, res: Response) {
		try {
			const { refreshToken } = req.cookies;
			if (!refreshToken) return responseHandler.badRequest(res, "Token not found!")

			await tokenService.removeToken(refreshToken);
			UserController.removingTokenFromCookie(res);

			return responseHandler.ok(res, "User logout");
		} catch (error: any) {
			responseHandler.errors(res, error.message);
		}
	}

	public async refresh(req: Request, res: Response) {
		try {
			const { refreshToken } = req.cookies;
			if (!refreshToken) return responseHandler.unauthorized(res);

			const tokenData = tokenService.validateRefreshToken(refreshToken);
			const findToken = tokenService.findToken(refreshToken);

			if (!tokenData || !findToken) return responseHandler.unauthorized(res);

			const user = await userModel.findById(tokenData.id);

			if (user) {
				const tokens = tokenService.generateToken({
					id: user.id,
					username: user.username,
					email: user.email,
					avatar: user.avatar,
					poster: user.poster,
				});

				const saveToken = await tokenService.saveToken(user.id, tokens.refreshToken);
				UserController.saveRefreshTokenToCookie(res, saveToken.refreshToken);

				return responseHandler.ok(res, {
					accessToken: tokens.accessToken,
					user: {
						id: user.id,
						username: user.username,
						email: user.email,
						avatar: user.avatar,
						poster: user.poster,
					}
				});
			}
		} catch (error: any) {
			responseHandler.errors(res, error.message);
		}
	}

	public async delete(req: Request, res: Response) {
		try {
			const { email } = req.body;
			const { refreshToken } = req.cookies;

			const userExist = await userModel.findOne({ email });
			if (!userExist) return responseHandler.badRequest(res, "User not found");

			if (!refreshToken) return responseHandler.badRequest(res, "Token not found!");

			await tokenService.removeToken(refreshToken);
			UserController.removingTokenFromCookie(res);

			const filePathAvatar = path.resolve(__dirname, "..", "static", userExist?.avatar as string);
			if (fs.existsSync(filePathAvatar)) {
				fs.unlink(filePathAvatar, (err) => { });
			}
			const filePathPoster = path.resolve(__dirname, "..", "static", userExist?.poster as string);
			if (fs.existsSync(filePathPoster)) {
				fs.unlink(filePathPoster, (err) => { });
			}

			await userModel.deleteOne({ email });

			return responseHandler.ok(res, "Deleted successfully user!");
		} catch (error: any) {
			responseHandler.errors(res, error.message);
		}
	}

	public async updateData(req: Request, res: Response) {
		try {

			const { username, email } = req.body;
			const { avatar, poster } = (req?.files || {}) as fileUpload.FileArray;

			const userExist = await userModel.findOne({ email });
			if (!userExist) return responseHandler.badRequest(res, "User not found");

			if (avatar) {
				const filePathAvatar = path.resolve(__dirname, "..", "static", userExist?.avatar as string);

				if (fs.existsSync(filePathAvatar)) {
					fs.unlink(filePathAvatar, (err) => { });
				}
			}
			if (poster) {
				const filePathPoster = path.resolve(__dirname, "..", "static", userExist?.poster as string);

				if (fs.existsSync(filePathPoster)) {
					fs.unlink(filePathPoster, (err) => { });
				}
			}

			await userExist?.updateOne({
				avatar: UserController.moveFileToStatic(avatar as UploadedFile),
				username,
				poster: UserController.moveFileToStatic(poster as UploadedFile),
			});

			return responseHandler.ok(res, "User successfully update!");
		} catch (error: any) {
			responseHandler.errors(res, error.message);
		}
	}

	public async updatePassword(req: Request, res: Response) {
		try {
			const { email, password, newPassword } = req.body;

			const userExist = await userModel.findOne({ email });
			if (!userExist) return responseHandler.badRequest(res, "User not found");

			const comparePassword = await bcrypt.compare(password, userExist.password);
			if (!comparePassword) return responseHandler.badRequest(res, "Wrong password");

			const hashNewPassword = await bcrypt.hash(newPassword, 8);
			await userModel.updateOne({
				password: hashNewPassword
			});

			return responseHandler.ok(res, "Password successfully update!");
		} catch (error: any) {
			responseHandler.errors(res, error.message);
		}
	}
}

export default new UserController();