import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../model/Logo/Logo";

import "./Authorization.scss";

type IVariantType = "LOGIN" | "REGISTRATION";
type ITitleType = "Sing In" | "Registration";

const Authorization = () => {
	const [variant, setVariant] = useState<IVariantType>("LOGIN");
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [title, setTitle] = useState<ITitleType>("Sing In");

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

	return (
		<div className="authorization">
			<div className="authorization__wrapper">
				<section className="authorization__header">
					<Logo wrapperClassName="authorization__logo" />
					<h2 className="authorization__title">{title}</h2>
				</section>
				<div className="authorization__content">
					<Link
						to={""}
						className="authorization__link"
						onClick={toggleVariant}
					>
						{title}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Authorization;