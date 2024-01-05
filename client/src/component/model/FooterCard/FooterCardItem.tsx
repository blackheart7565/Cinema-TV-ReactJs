import React from 'react';
import { Link } from "react-router-dom";

interface IFooterCardItemProps {
	path: string;
	body: string;
}

const FooterCardItem: React.FC<IFooterCardItemProps> = ({
	path,
	body,
}) => {
	return (
		<>
			<Link
				key={path}
				to={path}
				className="footer__model-link"
			>
				{body}
			</Link>
		</>
	);
};

export default FooterCardItem;