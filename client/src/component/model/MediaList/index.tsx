import { FC, ReactNode } from "react";

import "./MediaList.scss";

interface IMediaList {
	children: ReactNode;
	// mediaType: string;
	// mediaCategory: string;
	// page: number;
}

const MediaList: FC<IMediaList> = ({
	children
}) => {
	return (
		<ul className="media-list">
			{children}
		</ul>
	);
}

export default MediaList;