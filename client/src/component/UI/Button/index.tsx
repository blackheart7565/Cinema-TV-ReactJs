import { FC, ReactNode } from 'react';

import "./Button.scss";

interface IButton extends React.DOMAttributes<HTMLButtonElement> {
	children: ReactNode;
	className?: string | undefined;
	onClick?: (event: React.MouseEvent) => void;
}

const Button: FC<IButton> = ({
	children,
	className,
	onClick,
	...props
}) => {
	const defaultStyle = "button-default";
	return (
		<button
			{...props}
			className={[defaultStyle, className].join(" ")}
			onClick={onClick}
		>
			{children ? children : "click"}
		</button>
	);
};

export default Button;