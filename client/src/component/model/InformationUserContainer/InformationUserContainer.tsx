import classNames from "classnames";
import React from 'react';

import "./InformationUserContainer.scss";

interface IInformationUserContainerProps {
	wrapperClass?: string | undefined;
	children?: React.ReactNode | undefined;
	isRow?: boolean | undefined;
	isEnd?: boolean | undefined;
}

const InformationUserContainer: React.FC<IInformationUserContainerProps> = ({
	wrapperClass,
	children,
	isRow,
	isEnd,
}) => {
	return (
		<div
			className={classNames("container-info-user", wrapperClass, {
				"flex-row-r": isRow,
				"flex-end": isEnd,
			})}
		>
			{children}
		</div>
	);
};

export default InformationUserContainer;