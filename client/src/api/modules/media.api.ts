import { AxiosResponse } from "axios";
import {
	IMediaDetails,
	IMediaGenre,
	IMediaList,
	IMediaSearch,
	IResponseMediasList,
	IResponseMediasListResult
} from "../../types/media.types";
import publicAxios from "../client/public.client";

const mediaEndpoints = {
	list: ({ mediaType, mediaCategory, page }: IMediaList): string =>
		`/${mediaType}/list/${mediaCategory}?page=${page}`,

	details: ({ mediaType, mediaId }: IMediaDetails): string =>
		`/${mediaType}/details/${mediaId}`,

	genre: ({ mediaType }: IMediaGenre): string =>
		`/${mediaType}/genre`,

	search: ({ mediaType, query, page }: IMediaSearch): string =>
		`/${mediaType}/search?query=${query}$page=${page}`,
}

class MediaApi {
	async getList<T extends IResponseMediasListResult>({
		mediaType,
		mediaCategory,
		page
	}: IMediaList): Promise<IResponseMediasList<T> | any> {
		try {
			const response: AxiosResponse<IResponseMediasList<T>> = await publicAxios.get(
				mediaEndpoints.list({ mediaType, mediaCategory, page })
			);
			return { data: response.data };
		} catch (error: any) {
			return { error }
		}
	}

	async getDetails({ mediaType, mediaId }: IMediaDetails): Promise<any> {
		try {
			const response = await publicAxios.get(
				mediaEndpoints.details({ mediaType, mediaId })
			);
			return { data: response.data };
		} catch (error) {
			return { error }
		}
	}

	async getGenre({ mediaType }: IMediaGenre): Promise<any> {
		try {
			const response = await publicAxios.get(
				mediaEndpoints.genre({ mediaType })
			);
			return response;
		} catch (error) {
			return { error }
		}
	}

	async getGenre({ mediaType }: IMediaGenre): Promise<any> {
		try {
			const response = await publicAxios.get(
				mediaEndpoints.genre({ mediaType })
			);
			return response;
		} catch (error) {
			return { error }
		}
	}

	async search(mediaType: string, query: string, page: string): Promise<any> {
		try {

		} catch (error) {
			return { error }
		}
	}
}

const mediaApi = new MediaApi();
export default mediaApi;
