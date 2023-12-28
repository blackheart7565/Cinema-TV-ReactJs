import classNames from "classnames";
import { Link } from "react-router-dom";

import "./Logo.scss";

interface ILogoProps {
	title?: string;
	logoImage?: string;
	wrapperClassName?: string;
	path?: string | undefined;
	isCursorBlock?: boolean;
}

export const Logo: React.FC<ILogoProps> = ({
	title,
	logoImage,
	wrapperClassName,
	path,
	isCursorBlock = false,
}) => {
	return (
		<Link
			to={path || ""}
			className={classNames("logo", wrapperClassName, {
				"logo-cursor-blocker": isCursorBlock,
			})}
		>
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