import { FC } from "react";
import { IMediaDetailsHeaderProps } from "../../../types/media-types/details.type";

const MediaDetailsHeader: FC<IMediaDetailsHeaderProps> = ({
	src
}) => {
	return (
		<div className="media-details__header"
			style={{
				backgroundImage: `url(${src})`
			}} />
	);
}

export default MediaDetailsHeader;