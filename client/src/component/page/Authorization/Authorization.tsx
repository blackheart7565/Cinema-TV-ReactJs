import { useCallback, useMemo, useState } from "react";
import {
	FieldValues,
	SubmitHandler,
	useForm
} from "react-hook-form";

import GoogleIcon from "../../Icon/Social/Google/GoogleIcon";
import AuthButton from "../../UI/Button/AuthButton/AuthButton";
import Input from "../../UI/Inputs/Input";

import { toast } from "react-toastify";
import "./Authorization.scss";

type IVariantType = "LOGIN" | "REGISTRATION";
type ITitleType = "Sing In" | "Registration";

const Authorization = () => {
	const [variant, setVariant] = useState<IVariantType>("LOGIN");
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [title, setTitle] = useState<ITitleType>("Sing In");

	const {
		register,
		handleSubmit,
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
		const timeout = 100;
		if (variant === "LOGIN") {
			setTimeout(() => {
				setVariant("REGISTRATION");
				setTitle("Registration");
			}, timeout);
		} else {
			setTimeout(() => {
				setVariant("LOGIN");
				setTitle("Sing In");
			}, timeout);
		}
	}, [variant]);

	const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
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
		<div className="authorization">
			<div className="authorization__bg">
				<img className="authorization__img" src="/bg.jpg" alt="bg" />
			</div>
			<div className="authorization__wrapper">
				<h1 className="authorization__title">{title}</h1>
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
			</div>
		</div>
	);
};

export default Authorization;