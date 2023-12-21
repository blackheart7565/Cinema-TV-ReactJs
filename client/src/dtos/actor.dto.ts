
interface IActorDto {
	id: number;
	name: string;
	characterName: string;
	pathImage: string;
}

class ActorDto implements IActorDto {
	id: number;
	name: string;
	characterName: string;
	pathImage: string;

	constructor({ id, name, characterName, pathImage }: IActorDto) {
		this.id = id;
		this.name = name;
		this.characterName = characterName;
		this.pathImage = pathImage;
	}
}

export {
	ActorDto
};

