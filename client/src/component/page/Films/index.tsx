import { FC } from "react";

import MediaList from "../../model/MediaList";

import "./Films.scss";

interface IFilms { }

const Films: FC<IFilms> = () => {
	return (
		<div className="films">
			<MediaList mediaType={""} mediaCategory={""}>
				{films.map((item, index) => (
					<MMediaItem
						key={item.id + index}
						posterImage={item.poster_path || item.backdrop_path}
						name={item.title || item.original_title}
						year={item.release_date.split("-")[0]}
						rating={item.vote_average}
					/>
				))}
			</MediaList>
			{isMediaLoading && (
				<MediaLoader
					isLoading
					width="50"
					height="50"
				/>
			)}
			{(films.length < totalResults) && (
				<Button
					className="films__show-more"
					onClick={showMore}
				>
					{!isMediaLoading && "Show more"}
				</Button>
			)}
		</div>
	);
};

export default Films;