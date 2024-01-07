import React from "react";

import { mediaConfig } from "../../../api/config/media.config";
import MediaList from "../../model/MediaList/MediaList";

import "./Serials.scss";

interface ISerials { }

const Serials: React.FC<ISerials> = () => {
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