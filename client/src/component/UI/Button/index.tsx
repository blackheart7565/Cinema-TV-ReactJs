import classNames from "classnames";
import { FC, ReactNode } from 'react';

import "./Button.scss";

interface IButton extends React.DOMAttributes<HTMLButtonElement> {
	children: ReactNode;
	className?: string | undefined;
	isFullW?: boolean | undefined;

	onClick?: (event: React.MouseEvent) => void;
}

const Button: FC<IButton> = ({
	children,
	className,
	isFullW,
	onClick,
	...props
}) => {
	const defaultStyle = "button-default";
	return (
		<button
			{...props}
			className={classNames(defaultStyle, className, {
				"full-w": isFullW,
			})}
			onClick={onClick}
		>
			{children ? children : "click"}
		</button>
	);
};

export default Button;