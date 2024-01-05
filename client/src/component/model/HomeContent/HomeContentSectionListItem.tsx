import { Link } from "react-router-dom";
import MediaCardInfo from "../MediaCardInfo/MediaCardInfo";

interface IHomeContentSectionListItemProps {
	id: number;
	path?: string | undefined;
	image?: string | undefined;
	name?: string | undefined | null;
	rating?: string | number | undefined | null;
}

const HomeContentSectionListItem: React.FC<IHomeContentSectionListItemProps> = ({
	id,
	path,
	image,
	name,
	rating,
}) => {
	return (
		<>
			<Link
				className={"home__model-card"}
				key={id}
				to={path || ""}
			>
				<img
					className={"home__model-card-img"}
					src={image || ""}
					alt={"home__model-card-img"}
				/>
				<MediaCardInfo
					isIconPlay={false}
					name={name}
					rating={rating}
				/>
			</Link>
		</>
	);
}

export default HomeContentSectionListItem;