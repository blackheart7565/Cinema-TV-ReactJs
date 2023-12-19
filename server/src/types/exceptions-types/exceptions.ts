
export interface IResponseHandlers { }

export interface IResponseData {
	status: number;
	message: string;
}

export type IResponseDataType = IResponseData | object | string
