import classNames from "classnames";
import React from 'react';

import "./InformationUserContainer.scss";

interface IInformationUserContainerProps {
	wrapperClass?: string | undefined;
	children?: React.ReactNode | undefined;
}

const InformationUserContainer: React.FC<IInformationUserContainerProps> = ({
	wrapperClass,
	children,
}) => {
	return (
		<div
			className={classNames("container-info-user", wrapperClass)}
		>
			{children}
		</div>
	);
};

export default InformationUserContainer;