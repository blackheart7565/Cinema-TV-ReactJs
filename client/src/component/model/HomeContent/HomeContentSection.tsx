import classNames from "classnames";

import { IResponseMediasListValidationType } from "../../../types/media.types";
import HomeContentSectionList from "./HomeContentSectionList";

interface IHomeContentSectionProps {
	isRight?: boolean | undefined;
	mediaType: string;
	list: IResponseMediasListValidationType<"movie" | "tv">[];
	poster: string;
}

const HomeContentSection: React.FC<IHomeContentSectionProps> = ({
	isRight,
	mediaType,
	list,
	poster,
}) => {
	return (
		<div className={classNames("home__model-section", {
			"home__model-section-right": isRight,
		})}>
			<HomeContentSectionList
				list={list}
				mediaType={mediaType}
			/>
			<div className={"home__model-poster"}>
				<img
					className={"home__model-poster-img"}
					src={poster || ""}
					alt={"home__model-poster-img"}
				/>
			</div>
		</div>
	);
}

export default HomeContentSection;