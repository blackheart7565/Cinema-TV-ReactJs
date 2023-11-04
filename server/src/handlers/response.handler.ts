import { Response } from "express";

interface IResponseHandlers { }
interface IResponseData {
	status: number;
	message: string;
}

class ResponseHandlers implements IResponseHandlers {
	constructor() { }

	#responseWithData = (res: Response, statusCode: number, data: IResponseData): Response<any> =>
		res.status(statusCode).json(data);

	errors = (res: Response): Response<IResponseData> =>
		this.#responseWithData(res, 500, { status: 500, message: "Oops! Something wrong, Internal Server Error" })

	// Плохой запрос
	badRequest = (res: Response, message: string): Response<IResponseData> =>
		this.#responseWithData(res, 400, { status: 400, message })

	// OK
	ok = (res: Response, message: string): Response<IResponseData> =>
		this.#responseWithData(res, 200, { status: 200, message })

	// Создынный запрос
	created = (res: Response, message: string): Response<IResponseData> =>
		this.#responseWithData(res, 201, { status: 401, message })

	// Неавторизованно
	unauthorized = (res: Response): Response<IResponseData> =>
		this.#responseWithData(res, 401, { status: 401, message: "Unauthorized" })

	// Не найден
	notFound = (res: Response, message: string): Response<IResponseData> =>
		this.#responseWithData(res, 404, { status: 404, message: "Resource not found" })
}

export default new ResponseHandlers();
