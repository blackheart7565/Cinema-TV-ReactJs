import { FC } from "react";
import { Link } from "react-router-dom";

import { ICard } from "..";

interface IHomeModelContent {
	title: string;
	classPrefix: string;
	cards: ICard[];
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
							cards.map(item => (
								<Link
									className={`${className}-card`}
									key={item.id}
									to={""}
								>
									<img
										className={`${className}-card-img`}
										src={item.pathImg}
										alt={`${titleLow}-card-image`}
									/>
								</Link>
							))
						}
					</ul>
					<div className={`${className}-poster`}>
						<img
							className={`${className}-poster-img`}
							src={posters[0]}
							alt={`${titleLow}-poster-image`}
						/>
					</div>
				</div>

				<div className={`${className}-section ${className}-content-right`}>
					<ul className={`${className}-cards`}>
						{
							cards.map(item => (
								<Link
									className={`${className}-card`}
									key={item.id}
									to={""}
								>
									<img
										className={`${className}-card-img`}
										src={item.pathImg}
										alt={`${titleLow}-card-image`}
									/>
								</Link>
							))
						}
					</ul>
					<div className={`${className}-poster`}>
						<img
							className={`${className}-poster-img`}
							src={posters[1]}
							alt={`${titleLow}-poster-image`}
						/>
					</div>
				</div>

			</div>

		</div>
	);
};

export default HomeModelContent;