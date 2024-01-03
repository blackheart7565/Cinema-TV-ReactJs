import React, { Dispatch, SetStateAction, useCallback, useMemo, useState } from "react";
import {
	FieldValues,
	SubmitHandler,
	useForm
} from "react-hook-form";
import { toast } from "react-toastify";

import GoogleIcon from "../../Icon/Social/Google/GoogleIcon";
import AuthButton from "../../UI/Button/AuthButton/AuthButton";
import Input from "../../UI/Inputs/Input";
import { ITitleType } from "../../page/Authorization/Authorization";

type IVariantType = "LOGIN" | "REGISTRATION";

interface IAuthFormProps {
	setTitle?: Dispatch<SetStateAction<ITitleType>> | undefined;
}

const AuthForm: React.FC<IAuthFormProps> = ({
	setTitle,
}) => {
	const [variant, setVariant] = useState<IVariantType>("LOGIN");
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		reset: resetInputValues,
		formState: {
			errors,
		}
	} = useForm<FieldValues>({
		mode: "onBlur",
		defaultValues: {
			username: "",
			email: "",
			password: "",
		}
	});

	const toggleVariant = useCallback(() => {
		resetInputValues();
		if (variant === "LOGIN") {
			setVariant("REGISTRATION");

			if (setTitle) {
				setTitle("Registration");
			}
		} else {
			setVariant("LOGIN");

			if (setTitle) {
				setTitle("Sing In");
			}
		}
	}, [variant]);

	const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
		setIsLoading(true);

		if (variant === "LOGIN") {
			console.log(data, "LOGIN");
		}

		if (variant === "REGISTRATION") {
			console.log(data, "REGISTRATION");
		}
	};

	const onSocialSubmit = () => {
		if (variant === "LOGIN") {
			alert("social login");
		}

		if (variant === "REGISTRATION") {
			alert("social register");
		}
	}

	useMemo(() => {
		for (const key in errors) {
			toast.error((errors[key]?.message) as string);
		}
	}, [Object.keys(errors)]);

	return (
		<>
			<form
				className="authorization__form"
				onSubmit={handleSubmit(onSubmit)}
			>
				{variant === "REGISTRATION" && (
					<Input
						wrapperClass="authorization__username"
						id={"username"}
						label="Username:"
						type="text"
						tabIndex={1}
						placeholder="Username"
						register={register}
						required={"Username required field!"}
						errors={errors}
					/>
				)}
				<Input
					wrapperClass="authorization__email"
					id={"email"}
					label="Email:"
					type="email"
					tabIndex={2}
					placeholder="Email"
					register={register}
					required={"Email required field!"}
					errors={errors}
				/>
				<Input
					wrapperClass="authorization__password"
					id={"password"}
					label="Password:"
					type="password"
					tabIndex={3}
					placeholder="Password"
					register={register}
					required={"Password required field!"}
					errors={errors}
				/>
				<AuthButton
					wrapperClass="authorization__auth-btn"
					fullWidth
					disabled={isLoading}
					type="submit"
				>
					{variant === "LOGIN" ? "Sign in" : "Registration"}
				</AuthButton>

				<div className="authorization__underline">
					<div className="authorization__underline-inner">Or</div>
				</div>

				<div className="authorization__social">
					<div className="authorization__google">
						<AuthButton
							fullWidth
							wrapperClass="authorization__google-btn"
							onClick={onSocialSubmit}
						>
							<div className="authorization__google-icon">
								<GoogleIcon width={"100%"} height={"100%"} />
							</div>
							<p className="authorization__google-text">
								Login with google account
							</p>
						</AuthButton>
					</div>
				</div>

				<div className="authorization__link">
					<div
						className="authorization__link-text"
					>
						{variant === "LOGIN" ? "Don't have an account yet?"
							: "Already have an account?"}
					</div>
					<AuthButton
						wrapperClass="authorization__link-btn"
						onClick={toggleVariant}
					>
						{variant === "LOGIN"
							? "Register"
							: "Sign in"}
					</AuthButton>
				</div>

			</form>
		</>
	);
};

export default AuthForm;