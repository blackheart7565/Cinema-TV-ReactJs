import classNames from "classnames";
import React, { HTMLInputTypeAttribute } from 'react';
import {
	FieldErrors,
	FieldValues,
	UseFormRegister
} from "react-hook-form";

import ErrorIcon from "../../Icon/ErrorIcon";
import "./Input.scss";

interface IInputProps {
	wrapperClass?: string | undefined;
	id: string;
	label: string;
	type?: HTMLInputTypeAttribute | undefined;
	placeholder?: string | undefined;
	required?: boolean | string | undefined;
	disabled?: boolean | undefined;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
	tabIndex?: number | undefined;
}

const Input: React.FC<IInputProps> = ({
	wrapperClass,
	id,
	label,
	type,
	placeholder,
	required,
	disabled,
	register,
	errors,
	tabIndex,
}) => {
	return (
		<div className={classNames("Input_Box", wrapperClass)}>
			<label htmlFor={id} className="Input_Box__label">
				{label}
			</label>
			<div className="Input_Box__wrapper">
				{errors[id] && (
					<div className="Input_Box__error-ico">
						<ErrorIcon
							width={"20px"}
							height={"20px"}
						/>
					</div>
				)}
				<input
					className={classNames(
						"Input_Box__enter", {
						"Input_Box__enter-error": errors[id],
					}
					)}
					type={type}
					id={id}
					autoComplete={id}
					placeholder={placeholder}
					tabIndex={tabIndex}
					disabled={disabled}
					{...register(id, {
						required: required || "Required field!" || "Обязательное поле!",
					})}
				/>
			</div>
		</div>
	);
};

export default Input;