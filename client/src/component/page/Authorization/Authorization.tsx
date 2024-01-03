import { useState } from "react";
import AuthForm from "../../model/AuthForm/AuthForm";
import "./Authorization.scss";

export type ITitleType = "Sing In" | "Registration";

const Authorization = () => {
	const [title, setTitle] = useState<ITitleType>("Sing In");

	return (
		<div className="authorization">
			<div className="authorization__bg">
				<img className="authorization__img" src="/bg.jpg" alt="bg" />
			</div>
			<div className="authorization__wrapper">
				<h1 className="authorization__title">{title}</h1>
				<AuthForm setTitle={setTitle} />
			</div>
		</div>
	);
};



export default Authorization;