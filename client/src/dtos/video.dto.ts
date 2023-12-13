import { IVideo } from "../types/other.type";

export class VideoDto implements IVideo {
	id: string | number;
	youTubeKeyTrailer: string;
	qualityVideo: number;

	constructor({ id, youTubeKeyTrailer, qualityVideo }: IVideo) {
		this.id = id;
		this.youTubeKeyTrailer = youTubeKeyTrailer;
		this.qualityVideo = qualityVideo;
	}
}