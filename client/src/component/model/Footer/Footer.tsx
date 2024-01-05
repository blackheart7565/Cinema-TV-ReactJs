import { useState } from "react";

import FooterCard from "../FooterCard/FooterCard";
import FooterHeader from "../FooterHeader/FooterHeader";

import "./Footer.scss";

const Footer = () => {
	const [pages] = useState([
		{
			path: "/",
			body: "Home"
		},
		{
			path: "/cartoons",
			body: "Cartoons"
		},
		{
			path: "/anime",
			body: "Anime"
		},
		{
			path: "/films",
			body: "Films"
		},
		{
			path: "/serials",
			body: "Serials"
		},
		{
			path: "/co-viewing",
			body: "Co-Viewing"
		},
	]);

	const [information] = useState([
		{
			path: "/developers",
			body: "Developers",
		}
	]);

	return (
		<footer className="footer">
			<FooterHeader />
			<FooterCard list={pages} title={"Pages"} />
			<FooterCard list={information} title={"Information"} />
		</footer>
	);
};

export default Footer;