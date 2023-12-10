import { FC } from "react";

interface IMediaDetailsHeaderProps {
	src: string;
}

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