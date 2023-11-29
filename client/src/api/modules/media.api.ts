import {
	IMediaDetails,
	IMediaGenre,
	IMediaList,
	IMediaSearch,
	IResponseMediasList,
	IResponseMediasListPlayingNow
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
	async getList({ mediaType, mediaCategory, page }: IMediaList): Promise<IResponseMediasList | any | IResponseMediasListPlayingNow> {
		try {
			const response = await publicAxios.get(
				mediaEndpoints.list({ mediaType, mediaCategory, page })
			);
			return response;
		} catch (error) {
			return { error }
		}
	}

	async getDetails({ mediaType, mediaId }: IMediaDetails): Promise<any> {
		try {
			const response = await publicAxios.get(
				mediaEndpoints.details({ mediaType, mediaId })
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