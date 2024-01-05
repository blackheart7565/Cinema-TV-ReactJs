import React from 'react';
import { IFooterCard } from "./FooterCard";
import FooterCardItem from "./FooterCardItem";

interface IFooterCardListProps {
	list: IFooterCard[];
}

const FooterCardList: React.FC<IFooterCardListProps> = ({
	list,
}) => {
	return (
		<div className="footer__model-list">
			{
				list.map(item => (
					<FooterCardItem
						key={item.path}
						path={item.path}
						body={item.body}
					/>
				))
			}
		</div>
	);
};

export default FooterCardList;