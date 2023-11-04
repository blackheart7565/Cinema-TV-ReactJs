import axiosClient from '../../api/axios.client';
import { IPersonCredits, IPersonDetails } from "../../types/tmdb/tmdb-person-types";
import { tmdbEndpoints } from "../tmdb.endpoints";

export const tmdbPersonApi = {
	personDetails: async ({ personId }: IPersonDetails): Promise<object> => await axiosClient.get(
		await tmdbEndpoints.personDetails({ personId })
	),
	personMedias: async ({ personId }: IPersonCredits): Promise<object> => await axiosClient.get(
		await tmdbEndpoints.personMedias({ personId })
	),
}