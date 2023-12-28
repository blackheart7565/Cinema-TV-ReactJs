import { useCallback, useState } from "react";
import {
	FieldValues,
	SubmitHandler,
	useForm
} from "react-hook-form";

import Input from "../../UI/Inputs/Input";

import AuthButton from "../../UI/Button/AuthButton/AuthButton";
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

	};

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
							placeholder="Username"
							register={register}
							errors={errors}
						/>
					)}
					<Input
						wrapperClass="authorization__username"
						id={"email"}
						label="Email:"
						type="email"
						placeholder="Email"
						register={register}
						errors={errors}
					/>
					<Input
						wrapperClass="authorization__username"
						id={"password"}
						label="Password:"
						type="password"
						placeholder="Password"
						register={register}
						errors={errors}
					/>
					<AuthButton
						wrapperClass="authorization__auth-btn"
						fullWidth
						disabled={isLoading}
						type="submit"
						onClick={toggleVariant}
					>
						{variant === "LOGIN" ? "Sign in" : "Registration"}
					</AuthButton>

					<div className="authorization__underline">
						<div className="authorization__underline-inner">Or</div>
					</div>

				</form>
			</div>
		</div>
	);
};

export default Authorization;