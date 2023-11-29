import { Request, Response } from "express";
import responseHandler from "../handlers/response.handler";
import { tmdbApi } from "../tmdb/tmdb.api";

interface IMediaController {
	getMediaList?: (req: Request, res: Response) => Promise<void>
	getMediaDetails?: (req: Request, res: Response) => Promise<void>
	getMediaGenre?: (req: Request, res: Response) => Promise<void>
	getMediaSearch?: (req: Request, res: Response) => Promise<void>
}

class MediaController implements IMediaController {
	constructor() { }

	async getMediaList(req: Request, res: Response): Promise<void> {
		try {
			let { page } = req.query;
			const { mediaType, mediaCategory } = req.params;

			page = page?.toString();
			if (!page) throw new Error("Отсутствует параметр page!")

			const response = await tmdbApi.mediaList({ mediaType, mediaCategory, page })

			if (response) {
				res.status(200).json(response)
			}
		} catch (error: any) {
			responseHandler.errors(res, error.message);
		}
	}
	async getMediaDetails(req: Request, res: Response): Promise<void> {
		try {
			const { mediaType, mediaId } = req.params;
			const params = { mediaType, mediaId };

			const media = await tmdbApi.mediaDetails(params);
			media.images = await tmdbApi.mediaImages(params);
			media.credits = await tmdbApi.mediaCredits(params);
			media.recommendation = await tmdbApi.mediaRecommendations(params);
			media.videos = await tmdbApi.mediaVideos(params);

			if (media) {
				res.status(200).json(media);
			}
		} catch (error: any) {
			responseHandler.errors(res, error.message);
		}
	}
	async getMediaGenre(req: Request, res: Response): Promise<void> {
		try {
			const { mediaType } = req.params;

			const response = await tmdbApi.mediaGenre({ mediaType })

			if (response) {
				res.status(200).json(response);
			}
		} catch (error: any) {
			responseHandler.errors(res, error.message);
		}
	}
	async getMediaSearch(req: Request, res: Response): Promise<void> {
		try {
			let { query, page } = req.query;
			const { mediaType } = req.params;

			query = query?.toString();
			page = page?.toString();

			if (!query || !page) throw new Error("Параметри query та page не були вказані");

			const response = await tmdbApi.mediaSearch({
				mediaType: mediaType === "people" ? "person" : mediaType,
				mediaQuery: query,
				page
			});

			if (response) {
				res.status(200).json(response);
			}
		} catch (error: any) {
			responseHandler.errors(res, error.message);
		}
	}
}

export default new MediaController();