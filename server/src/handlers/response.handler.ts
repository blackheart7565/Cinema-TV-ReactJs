import { Response } from "express";
import { IResponseDataType, IResponseHandlers } from "../types/exceptions-types/exceptions";

class ResponseHandlers implements IResponseHandlers {
	constructor() { }

	#responseWithData = (res: Response, statusCode: number, data: any): Response<any> =>
		res.status(statusCode).json(data);

	/**
	 * Internal Server Error
		The server has encountered a situation it does not know how to handle.
	 */
	errors = (res: Response, data?: object | string): Response<IResponseDataType> => {
		return res.status(500).json({
			status: 500,
			message: "Oops! Something wrong, Internal Server Error",
		});
	}

	// Плохой запрос
	badRequest = (res: Response, data: string): Response<IResponseDataType> => {
		return res.status(400).json({
			status: 400,
			message: data,
		});
	}

	// OK
	ok = (res: Response, data?: object | string): Response<IResponseDataType> => {
		return res.status(200).json(data || "");
	}

	/**
	 * Создынный запрос
	 *  The request has been fulfilled, resulting in the creation of a new resource.
	 */
	created = (res: Response, data: object | string): Response<IResponseDataType> => {
		return res.status(200).json({
			status: 200,
			message: data,
		});
	}

	// Неавторизованно
	unauthorized = (res: Response, data?: object | string): Response<IResponseDataType> =>
		this.#responseWithData(res, 401, {
			status: 401,
			data: data || "Unauthorized",
		})

	// Не найден
	notFound = (res: Response, message?: string): Response<IResponseDataType> =>
		this.#responseWithData(res, 404, {
			status: 404,
			data: message || "Resource not found"
		})
}

export default new ResponseHandlers();