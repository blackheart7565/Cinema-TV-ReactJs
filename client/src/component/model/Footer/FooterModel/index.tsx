import { FC } from "react";
import { Link } from "react-router-dom";

import "./FooterModel.scss";

interface IListModel {
	path: string;
	text: string;
}

interface IFooterModel {
	title: string;
	list: IListModel[];
}

const FooterModel: FC<IFooterModel> = ({
	title,
	list
}) => {
	return (
		<div className="footer__model">
			<div className="footer__model-title">{title}</div>
			<div className="footer__model-list">
				{
					list.map(item => (
						<Link
							key={item.path}
							to={item.path}
							className="footer__model-link"
						>
							{item.text}
						</Link>
					))
				}
			</div>
		</div>
	);
};

export default FooterModel;