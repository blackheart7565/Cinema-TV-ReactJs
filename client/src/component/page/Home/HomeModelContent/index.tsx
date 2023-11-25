import { FC } from "react";

import { ICard } from "..";

interface IHomeModelContent {
	title: string;
	cards: ICard[];
	posters: string[];
}

export const HomeModelContent: FC<IHomeModelContent> = ({
	title,
	cards,
	posters,
}) => {
	const className = title.toLowerCase();

	return (
		<div className={`home__${className}`}>
			<section className={`home__${className}-title`}>
				<h2>{title}</h2>
			</section>

			<div className={`home__${className}-top`}>
				<div className={`home__${className}-cards`}>
					{
						cards.map((item, idx) => (
							<div
								key={idx}
								className={`home__${className}-card`}
							>
								<img src={item.pathImg} alt={`${className}-img`} className={`home__${className}-card-img`} />
							</div>
						))
					}
				</div>
				<div className={`home__${className}-avatar-right`}>
					<img className={`home__${className}-img`} src={posters[0]} alt={`home-${className}-poster-right`} />
				</div>
			</div>

			<div className={`home__${className}-bottom`}>
				<div className={`home__${className}-avatar-left`}>
					<img className={`home__${className}-img`} src={posters[1]} alt={`home-${className}-poster-left`} />
				</div>
				<div className={`home__${className}-cards`}>
					{
						cards.map((item, idx) => (
							<div
								key={idx}
								className={`home__${className}-card`}
							>
								<img src={item.pathImg} alt={`${className}-img`} className={`home__${className}-card-img`} />
							</div>
						))
					}
				</div>
			</div>

		</div>
	);
}
