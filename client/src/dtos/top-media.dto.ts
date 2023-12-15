import { IMediaTop } from "../types/media-types/details.type";

interface IMediaTopDto extends IMediaTop { }

export class MediaTopDto implements IMediaTopDto {
	id: string | number;
	pathImage: string;
	name: string;

	constructor({ id, pathImage, name }: IMediaTop) {
		this.id = id;
		this.name = name;
		this.pathImage = pathImage;
	}
}