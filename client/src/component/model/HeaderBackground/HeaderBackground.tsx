import React from 'react';

import classNames from "classnames";
import "./HeaderBackground.scss";

interface IHeaderBackgroundProps {
	wrapperClass?: string | undefined;
	src?: string | undefined;
}

const HeaderBackground: React.FC<IHeaderBackgroundProps> = ({
	wrapperClass,
	src
}) => {
	return (
		<div
			className={classNames("header-background", wrapperClass)}
			style={{
				backgroundImage: `url(${src})`
			}}
		/>
	);
};

export default HeaderBackground;