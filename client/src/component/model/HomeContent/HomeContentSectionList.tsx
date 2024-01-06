
import { mediaConfig } from "../../../api/config/media.config";
import { IResponseMediasListResultMovie, IResponseMediasListResultSerials, IResponseMediasListValidationType } from "../../../types/media.types";
import HomeContentSectionListItem from "./HomeContentSectionListItem";

interface IHomeContentSectionListProps {
	list: IResponseMediasListValidationType<"movie" | "tv">[];
	mediaType: string;
}

const HomeContentSectionList: React.FC<IHomeContentSectionListProps> = ({
	list,
	mediaType,
}) => {
	return (
		<>
			<ul className={"home__model-cards"}>
				{
					list.map((item, index: number) => (
						<HomeContentSectionListItem
							key={item.id + index}
							id={item.id}
							image={mediaConfig.methods.poster_path(item.poster_path || item.backdrop_path)}
							path={`/${mediaType && mediaConfig.methods.replaceMovieAndTv_To_FilmsAndSerials(mediaType)}/${mediaType}/${item.id}?name=${(
								mediaType === 'movie'
									? (
										(item as IResponseMediasListResultMovie).title
										|| (item as IResponseMediasListResultMovie).original_title
									)
									: mediaType === "tv"
									&& (
										(item as IResponseMediasListResultSerials).name
										|| (item as IResponseMediasListResultSerials).original_name
									)
							)}`}
							name={(
								mediaType === 'movie'
									? (
										(item as IResponseMediasListResultMovie).title
										|| (item as IResponseMediasListResultMovie).original_title
									)
									: mediaType === "tv"
										? (
											(item as IResponseMediasListResultSerials).name
											|| (item as IResponseMediasListResultSerials).original_name
										)
										: null
							)}
							rating={item.vote_average}
						/>
					))
				}
			</ul>
		</>
	);
};

export default HomeContentSectionList;