import { Response } from "express";
import { IResponseData, IResponseDataType, IResponseHandlers } from "../types/exceptions-types/exceptions";

class ResponseHandlers implements IResponseHandlers {
	constructor() { }

	#responseWithData = (res: Response, statusCode: number, data: IResponseDataType): Response<any> =>
		res.status(statusCode).json(data);

	errors = (res: Response, data?: IResponseDataType): Response<IResponseData> =>
		this.#responseWithData(res, 500, { status: 500, data: data || "Oops! Something wrong, Internal Server Error" })

	// Плохой запрос
	badRequest = (res: Response, data: IResponseDataType): Response<IResponseData> =>
		this.#responseWithData(res, 400, { status: 400, data })

	// OK
	ok = (res: Response, data: IResponseDataType): Response<IResponseData> =>
		this.#responseWithData(res, 200, { status: 200, data })

	/**
	 * Создынный запрос
	 *  The request has been fulfilled, resulting in the creation of a new resource.
	 */
	created = (res: Response, data: IResponseDataType): Response<any> =>
		this.#responseWithData(res, 201, { status: 201, data })

	// Неавторизованно
	unauthorized = (res: Response, data?: IResponseDataType): Response<IResponseData> =>
		this.#responseWithData(res, 401, { status: 401, data: data || "Unauthorized" })

	// Не найден
	notFound = (res: Response, data?: IResponseDataType): Response<IResponseData> =>
		this.#responseWithData(res, 404, { status: 404, data: data || "Resource not found" })
}

export default new ResponseHandlers();
