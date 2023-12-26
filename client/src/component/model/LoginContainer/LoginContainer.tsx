import React from 'react';

import "./LoginContainer.scss";

interface ILoginContainerProps {
	children: React.ReactNode;
}

const LoginContainer: React.FC<ILoginContainerProps> = ({
	children,
}) => {
	return (
		<div className={"login-container"}>
			{children}
		</div>
	);
};

export default LoginContainer;