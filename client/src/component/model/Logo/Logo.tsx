import { Link } from "react-router-dom";

import classNames from "classnames";
import "./Logo.scss";

interface ILogoProps {
	title?: string;
	logoImage?: string;
	wrapperClassName?: string;
}

export const Logo: React.FC<ILogoProps> = ({
	title,
	logoImage,
	wrapperClassName,
}) => {
	return (
		<Link to={"/"} className={classNames("logo", wrapperClassName)}>
			<div className={classNames("logo__img")}>
				<img src={logoImage || "/path/header/header-logo.png"} alt="logo" />
			</div>
			<p className={classNames("logo__text")}>
				{title || "cinema tv"}
			</p>
		</Link>
	);
};

export default Logo;