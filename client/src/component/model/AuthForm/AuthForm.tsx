import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
import {
	FieldValues,
	SubmitHandler,
	useForm
} from "react-hook-form";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import { useValidErrorKeys } from "../../../hooks/errors.hook";
import { useReducer } from "../../../hooks/reducer.hook";
import { UserService } from "../../../services/user.service";
import userSlice from "../../../store/reducer/user-slice/user.slice";
import { IUser } from "../../../types/user.types";
import RegExpValidator from "../../../utils/RegExpValidator";
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
	const { dispatch } = useReducer();
	const navigation = useNavigate();
	const regExpValid = new RegExpValidator();
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
	}, [variant, resetInputValues, setTitle]);

	const handleRegistration = async (paramsValue: FieldValues) => {
		const { data } = await UserService.registration(
			paramsValue.username,
			paramsValue.email,
			paramsValue.password
		);

		if (data) {
			localStorage.setItem("token", data.accessToken);

			dispatch(userSlice.actions.setIsAuth(false));
			dispatch(userSlice.actions.setUser({} as IUser));

			setIsLoading(false);

			toast.success("User successfully created!")

			resetInputValues();
			setVariant("LOGIN");
		}
	}

	const handleLogin = async (paramsValue: FieldValues) => {
		const { data } = await UserService.login(
			paramsValue.email,
			paramsValue.password
		);

		if (data) {
			localStorage.setItem("token", data.accessToken);

			dispatch(userSlice.actions.setIsAuth(true));
			dispatch(userSlice.actions.setUser(data.user));

			setIsLoading(false);

			toast.success("User successfully login!");

			resetInputValues();
			navigation(-1);
		}
	}

	const validationValueInput = (paramsValue: FieldValues): boolean => {
		const validUsername = regExpValid.validateUsernameRegexp(paramsValue.username);
		const validEmail = regExpValid.validateEmailRegexp(paramsValue.email);
		const validPassword = regExpValid.validatePasswordRegexp(paramsValue.password);

		if (!validUsername) {
			toast.error("The maximum length of username should be no more than 20 characters");
			return false;
		}

		if (!validEmail) {
			toast.error("Emails do not meet the specified format");
			return false;
		}

		if (!validPassword) {
			toast.error((
				<ul style={{
					fontSize: "14px",
					display: "flex",
					flexDirection: "column",
					gap: "10px",
				}}>
					<li>Пароль должен:</li>
					<li>1) Содержать хотя бы 1 буквенный символ нижнего регистра.</li>
					<li>2) Содержать хотя бы 1 буквенный символ верхнего регистра.</li>
					<li>3) Содержать хотя бы 1 цифровой символ.</li>
					<li>4) Содержать хотя бы один специальный символ.</li>
					<li>5) Состоять из 8 символов или длиннее.</li>
				</ul>
			));
			return false;
		}
		return true;
	}

	const onSubmit: SubmitHandler<FieldValues> = async (paramsValue: FieldValues) => {
		if (!validationValueInput(paramsValue)) return;

		try {
			setIsLoading(true);

			if (variant === "LOGIN") {
				await handleLogin(paramsValue);
			}

			if (variant === "REGISTRATION") {
				await handleRegistration(paramsValue);
			}
		} catch (error: any) {
			const { data } = error.response
			setIsLoading(false);
			toast.error(data.message);
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

	useValidErrorKeys(errors);

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
						title={(
							""
						)}
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
					fontBold
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
						fontBold
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