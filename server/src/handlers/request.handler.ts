import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import tokenService from "../services/token.service";
import responseHandler from "./response.handler";

const validate = (req: Request, res: Response, next: NextFunction) => {
	const errors = validationResult(res);

	if (!errors.isEmpty())
		return responseHandler.badRequest(res, errors.array()[0].msg);

	next();
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
	try {
		const authorizationHeader = req.headers.authorization;
		if (!authorizationHeader) return responseHandler.unauthorized(res);

		const accessToken = authorizationHeader.split(" ")[1];
		if (!accessToken) return responseHandler.unauthorized(res);

		const tokenData = tokenService.validateAccessToken(accessToken);
		if (!tokenData) return responseHandler.unauthorized(res);

		req.users = tokenData;
		next();
	} catch (error) {
		responseHandler.errors(res);
	}
}

export default {
	validate,
	authMiddleware
}