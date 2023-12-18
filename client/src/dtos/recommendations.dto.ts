//~~

interface IRecommendationsDto {
	id: string | number;
	poster: string;
	name?: string | undefined;
}

export class RecommendationsDto implements IRecommendationsDto {
	id: string | number;
	poster: string;
	name?: string | undefined;

	constructor({ id, poster, name }: IRecommendationsDto) {
		this.id = id;
		this.poster = poster;
		this.name = name;
	}
}