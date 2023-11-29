import { FC } from "react";
import { Link } from "react-router-dom";

import { mediaConfig } from "../../../../api/config/media.config";
import { IResponseMediasListResult } from "../../../../types/media.types";

interface IHomeModelContent {
	title: string;
	classPrefix: string;
	cards: IResponseMediasListResult[];
	posters: string[];
}

const HomeModelContent: FC<IHomeModelContent> = ({
	title,
	classPrefix,
	cards,
	posters,
}) => {
	const titleLow = title.toLowerCase();
	const classPrefixLow = classPrefix.toLowerCase();
	const className = `${classPrefixLow}__model`;

	return (
		<div className={`${className}`}>

			<div className={`${className}-title`}>{title}</div>

			<div className={`${className}-content`}>

				<div className={`${className}-section`}>
					<ul className={`${className}-cards`}>
						{
							cards.slice(0, 6).map((item) => (
								<Link
									className={`${className}-card`}
									key={item.id}
									to={""}
								>
									<img
										className={`${className}-card-img`}
										src={mediaConfig.methods.poster_path(item.poster_path || item.backdrop_path)}
										alt={`${titleLow}-card-img`}
									/>
								</Link>
							))
						}
					</ul>
					<div className={`${className}-poster`}>
						<img
							className={`${className}-poster-img`}
							src={posters[0]}
							alt={`${titleLow}-poster-img`}
						/>
					</div>
				</div>

				<div className={`${className}-section ${className}-content-right`}>
					<ul className={`${className}-cards`}>
						{
							cards.slice(6, 12).map(item => (
								<Link
									className={`${className}-card`}
									key={item.id}
									to={""}
								>
									<img
										className={`${className}-card-img`}
										src={mediaConfig.methods.poster_path(item.poster_path || item.backdrop_path)}
										alt={`${titleLow}-card-img`}
									/>
								</Link>
							))
						}
					</ul>
					<div className={`${className}-poster`}>
						<img
							className={`${className}-poster-img`}
							src={posters[1]}
							alt={`${titleLow}-poster-img`}
						/>
					</div>
				</div>

			</div>

		</div>
	);
};

export default HomeModelContent;