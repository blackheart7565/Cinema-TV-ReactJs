import { FC } from "react";

import { mediaConfig } from "../../../api/config/media.config";
import MediaList from "../../model/MediaList";

import "./Films.scss";

interface IFilms { }

const Films: FC<IFilms> = () => {
	return (
		<div className="films">
			<MediaList
				mediaType={mediaConfig.types.movie}
				mediaCategory={mediaConfig.category.popular}
			/>
		</div>
	);
};

export default Films;