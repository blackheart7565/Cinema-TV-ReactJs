import { FC } from "react";

import "./FooterCard.scss";
import FooterCardList from "./FooterCardList";

export interface IFooterCard {
	path: string;
	body: string;
}

interface IFooterCardProps {
	title: string;
	list: IFooterCard[];
}

const FooterCard: FC<IFooterCardProps> = ({
	title,
	list
}) => {
	return (
		<div className="footer__model">
			<div className="footer__model-title">{title}</div>
			<FooterCardList
				list={list}
			/>
		</div>
	);
};

export default FooterCard;