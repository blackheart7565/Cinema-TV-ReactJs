import classNames from "classnames";
import React, { HTMLInputTypeAttribute } from 'react';
import {
	FieldErrors,
	FieldValues,
	UseFormRegister
} from "react-hook-form";

import "./Input.scss";

interface IInputProps {
	wrapperClass?: string | undefined;
	id: string;
	label: string;
	type?: HTMLInputTypeAttribute | undefined;
	placeholder?: string | undefined;
	required?: boolean;
	disabled?: boolean | undefined;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
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
}) => {
	return (
		<div className={classNames("Input_Box", wrapperClass)}>
			<label htmlFor={id} className="Input_Box__label">
				{label}
			</label>
			<div className="Input_Box__wrapper">
				<input
					className="Input_Box__enter"
					type={type}
					id={id}
					autoComplete={id}
					placeholder={placeholder}
					disabled={disabled}
					{...register(id, { required })}
				/>
			</div>
		</div>
	);
};

export default Input;