import tmdbConfig from "../../configs/tmdb.config";
import {
	IPersonCredits,
	IPersonDetails
} from '../../types/tmdb/tmdb-person-types';

export const tmdbPersonEndpoints = {
	personDetails: ({ personId }: IPersonDetails): Promise<string> => tmdbConfig.getTmdbBaseUrl(
		`/person/${personId}` //		/person/{person_id}
	),
	personMedias: ({ personId }: IPersonCredits): Promise<string> => tmdbConfig.getTmdbBaseUrl(
		`/person/${personId}/combined_credits` //		/person/{person_id}/combined_credits
	),
}