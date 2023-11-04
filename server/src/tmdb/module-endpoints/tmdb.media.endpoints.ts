import tmdbConfig from "../../configs/tmdb.config";
import {
	IMediaCredits,
	IMediaDetails,
	IMediaGenre,
	IMediaImages,
	IMediaList,
	IMediaRecommendations,
	IMediaSearch,
	IMediaVideos
} from '../../types/tmdb/tmdb-media-types';

export const tmdbMediaEndpoints = {
	mediaList: ({ mediaType, mediaCategory, page }: IMediaList): Promise<string> => tmdbConfig.getTmdbBaseUrl(
		`/${mediaType}/${mediaCategory}`, page
	),
	mediaDetails: ({ mediaType, mediaId }: IMediaDetails): Promise<string> => tmdbConfig.getTmdbBaseUrl(
		`/${mediaType}/${mediaId}` // 	/movie/{movie_id}
	),
	mediaImages: ({ mediaType, mediaId }: IMediaImages): Promise<string> => tmdbConfig.getTmdbBaseUrl(
		`/${mediaType}/${mediaId}/images` //	 /movie/{movie_id}/images
	),
	mediaGenre: ({ mediaType }: IMediaGenre): Promise<string> => tmdbConfig.getTmdbBaseUrl(
		`/genre/${mediaType}/list` // 	/genre/movie/list
	),
	mediaVideos: ({ mediaType, mediaId }: IMediaVideos): Promise<string> => tmdbConfig.getTmdbBaseUrl(
		`/${mediaType}/${mediaId}/videos` // 	 /movie/{movie_id}/videos
	),
	mediaCredits: ({ mediaType, mediaId }: IMediaCredits): Promise<string> => tmdbConfig.getTmdbBaseUrl(
		`/${mediaType}/${mediaId}/credits` // 	 /movie/{movie_id}/credits
	),
	mediaRecommendations: ({ mediaType, mediaId }: IMediaRecommendations): Promise<string> => tmdbConfig.getTmdbBaseUrl(
		`/${mediaType}/${mediaId}/recommendations`	//		/movie/{ movie_id }/recommendations
	),
	mediaSearch: ({ mediaType, mediaQuery, page }: IMediaSearch): Promise<string> => tmdbConfig.getTmdbBaseUrl(
		`/search/${mediaType}`, { query: mediaQuery, page }	//		/search/tv
	),
}