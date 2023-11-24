import { useState } from "react";

import "./Footer.scss";
import FooterModel from "./FooterModel";
import HeaderSection from "./HeaderSection";

const Footer = () => {
	const [pages] = useState([
		{
			path: "/",
			text: "Home"
		},
		{
			path: "/cartoons",
			text: "Cartoons"
		},
		{
			path: "/anime",
			text: "Anime"
		},
		{
			path: "/films",
			text: "Films"
		},
		{
			path: "/serials",
			text: "Serials"
		},
		{
			path: "/co-viewing",
			text: "Co-Viewing"
		},
	]);

	const [information] = useState([
		{
			path: "/developers",
			text: "Developers",
		}
	]);

	return (
		<footer className="footer">
			<HeaderSection />
			<FooterModel list={pages} title={"Pages"} />
			<FooterModel list={information} title={"Information"} />
		</footer>
	);
};

export default Footer;