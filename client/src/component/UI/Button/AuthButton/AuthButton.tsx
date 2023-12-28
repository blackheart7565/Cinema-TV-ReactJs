import classNames from "classnames";
import React from 'react';
import { Link } from "react-router-dom";

import "./AuthButton.scss";

interface IAuthButtonProps {
	wrapperClass?: string | undefined;
	fullWidth?: boolean | undefined;

	/**
	 *  @param disabled свойство не работает на сылку, когда свойство isLink равно true
	 */
	disabled?: boolean | undefined;

	type?: "submit" | "reset" | "button" | undefined;
	children?: React.ReactNode;
	/**
	 * @param isLink указываеть кнопка являеться сылкой или нет.
	 */
	isLink?: boolean | undefined;
	/**
	 * @param pathLink свойство работает когда свойство isLink равно true
	 */
	pathLink?: string | undefined;

	onClick?: () => void;
}

const AuthButton: React.FC<IAuthButtonProps> = ({
	wrapperClass,
	fullWidth,
	disabled,
	type,
	children,
	isLink,
	pathLink,
	onClick,
}) => {
	return (
		<>
			{isLink
				? (
					<Link
						to={pathLink || ""}
						onClick={onClick}
						type={type || "button"}
						className={classNames(
							"AuthButton",
							wrapperClass, {
							"full-w": fullWidth
						})}
					>
						{children}
					</Link>
				)
				: (
					<button
						type={type || "button"}
						disabled={disabled}
						onClick={onClick}
						className={classNames(
							"AuthButton",
							wrapperClass, {
							"AuthButton__disabled": disabled,
							"full-w": fullWidth
						})}
					>
						{children}
					</button>
				)}
		</>
	);
};

export default AuthButton;