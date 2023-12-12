
interface IActorDto {
	id: number;
	name: string;
	pathImage: string;
}

class ActorDto implements IActorDto {
	id: number;
	name: string;
	pathImage: string;

	constructor(id: number, name: string, pathImage: string) {
		this.id = id;
		this.name = name;
		this.pathImage = pathImage;
	}
}

export {
	ActorDto
};
