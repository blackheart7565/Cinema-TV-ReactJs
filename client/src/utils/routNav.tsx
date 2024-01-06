import React from "react";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { IoIosSettings } from "react-icons/io";
import { MdMovie } from "react-icons/md";
import { AnimeIconV11 } from "../component/Icon/AnimeIcon";

interface INavigationMenu {
	path: string;
	body: string;
	icon?: (size?: string | number) => React.ReactNode | undefined;
}

export const routNav: Array<INavigationMenu> = [
	{
		path: "/",
		body: "Home",
		icon: (size?: string | number) => (
			<FaHome
				size={size || "20px"}
			/>
		),
	},
	// {
	// 	path: "/cartoons",
	// 	body: "Cartoons",
	// 	icon: (size?: string | number) => (
	// 		<FaHome
	// 			size={size || "20px"}
	// 		/>
	// 	),
	// },
	{
		path: "/anime",
		body: "Anime",
		icon: (size?: string | number) => (
			<AnimeIconV11
				size={size || "20px"}
			/>
		),
	},
	{
		path: "/films",
		body: "Films",
		icon: (size?: string | number) => (
			<MdMovie
				size={size || "20px"}
			/>
		),
	},
	{
		path: "/serials",
		body: "Serials",
		icon: (size?: string | number) => (
			<BiSolidCameraMovie
				size={size || "20px"}
			/>
		),
	},
	{
		path: "/random",
		body: "Random",
		icon: (size?: string | number) => (
			<GiPerspectiveDiceSixFacesRandom
				size={size || "20px"}
			/>
		),
	},
];

export const routNavBurgerMenu: Array<INavigationMenu> = [
	...routNav,
	{
		path: "/settings",
		body: "Settings",
		icon: (size?: string | number) => (
			<IoIosSettings
				size={size || "20px"}
			/>
		),
	},
]