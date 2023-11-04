import axiosClient from '../../api/axios.client';
import {
	IMediaCredits,
	IMediaDetails,
	IMediaGenre,
	IMediaImages,
	IMediaList,
	IMediaRecommendations,
	IMediaSearch,
	IMediaVideos
} from "../../types/tmdb/tmdb-media-types";
import { tmdbEndpoints } from "../tmdb.endpoints";


export const tmdbMediaApi = {
	mediaList: async ({ mediaType, mediaCategory, page }: IMediaList): Promise<string> => await axiosClient.get(
		await tmdbEndpoints.mediaList({ mediaType, mediaCategory, page })
	),
	mediaDetails: async ({ mediaType, mediaId }: IMediaDetails): Promise<IMediaDetails> => await axiosClient.get(
		await tmdbEndpoints.mediaDetails({ mediaType, mediaId })
	),
	mediaImages: async ({ mediaType, mediaId }: IMediaImages): Promise<object> => await axiosClient.get(
		await tmdbEndpoints.mediaImages({ mediaType, mediaId })
	),
	mediaGenre: async ({ mediaType }: IMediaGenre): Promise<string> => await axiosClient.get(
		await tmdbEndpoints.mediaGenre({ mediaType })
	),
	mediaCredits: async ({ mediaType, mediaId }: IMediaCredits): Promise<object> => await axiosClient.get(
		await tmdbEndpoints.mediaCredits({ mediaType, mediaId })
	),
	mediaVideos: async ({ mediaType, mediaId }: IMediaVideos): Promise<object> => await axiosClient.get(
		await tmdbEndpoints.mediaVideos({ mediaType, mediaId })
	),
	mediaRecommendations: async ({ mediaType, mediaId }: IMediaRecommendations): Promise<object> => await axiosClient.get(
		await tmdbEndpoints.mediaRecommendations({ mediaType, mediaId })
	),
	mediaSearch: async ({ mediaType, mediaQuery, page }: IMediaSearch): Promise<string> => await axiosClient.get(
		await tmdbEndpoints.mediaSearch({ mediaType, mediaQuery, page })
	),
}