import { FC, ReactNode } from "react";

interface IMediaList {
	children: ReactNode;
}

const MediaList: FC<IMediaList> = ({
	children
}) => {
	return (
		<ul className="films__list">
			{children}
		</ul>
	);
}

export default MediaList;