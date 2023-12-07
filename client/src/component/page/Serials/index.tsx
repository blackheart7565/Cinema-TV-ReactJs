import { FC } from "react";

import { mediaConfig } from "../../../api/config/media.config";
import MediaList from "../../model/MediaList";

import "./Serials.scss";

interface ISerials { }

const Serials: FC<ISerials> = () => {
	return (
		<div className="serials">
			<MediaList
				mediaType={mediaConfig.types.tv}
				mediaCategory={mediaConfig.category.popular}
			/>
		</div>
	);
};

export default Serials;