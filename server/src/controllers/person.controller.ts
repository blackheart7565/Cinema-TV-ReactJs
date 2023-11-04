import { Request, Response } from "express";
import { tmdbApi } from "../tmdb/tmdb.api";

interface IPersonController {
	getPersonDetails?: (req: Request, res: Response) => Promise<void>
	getPersonMedias?: (req: Request, res: Response) => Promise<void>
}

class PersonController implements IPersonController {
	constructor() { }

	async getPersonDetails(req: Request, res: Response): Promise<void> {
		try {
			const { personId } = req.params;

			const response = await tmdbApi.personDetails({ personId });

			if (response) {
				res.status(200).json(response);
			}
		} catch (error) {

		}
	}
	async getPersonMedias(req: Request, res: Response): Promise<void> {
		try {
			const { personId } = req.params;

			const response = await tmdbApi.personMedias({ personId });

			if (response) {
				res.status(200).json(response);
			}
		} catch (error) {

		}
	}
}

export default new PersonController();