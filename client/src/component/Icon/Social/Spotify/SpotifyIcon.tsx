import classNames from "classnames";
import React from 'react';
import { IIconDefaultProps } from "../interface";

interface ISpotifyIconProps extends IIconDefaultProps { }

const SpotifyIcon: React.FC<ISpotifyIconProps> = ({
	wrapperClass,
	width,
	height,
}) => {
	return (
		<>
			<svg
				className={classNames(wrapperClass)}
				width={width || "24"}
				height={height || "24"}
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clipPath="url(#clip0_72_287)">
					<path d="M12 0C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24C18.6 24 24 18.6 24 12C24 5.4 18.66 0 12 0ZM17.521 17.34C17.281 17.699 16.861 17.82 16.5 17.58C13.68 15.84 10.14 15.479 5.939 16.439C5.521 16.561 5.16 16.26 5.04 15.9C4.92 15.479 5.22 15.12 5.58 15C10.14 13.979 14.1 14.4 17.22 16.32C17.64 16.5 17.699 16.979 17.521 17.34ZM18.961 14.04C18.66 14.46 18.12 14.64 17.699 14.34C14.46 12.36 9.54 11.76 5.76 12.96C5.281 13.08 4.74 12.84 4.62 12.36C4.5 11.88 4.74 11.339 5.22 11.219C9.6 9.9 15 10.561 18.72 12.84C19.081 13.021 19.26 13.62 18.961 14.04ZM19.081 10.68C15.24 8.4 8.82 8.16 5.16 9.301C4.56 9.48 3.96 9.12 3.78 8.58C3.6 7.979 3.96 7.38 4.5 7.199C8.76 5.939 15.78 6.179 20.221 8.82C20.76 9.12 20.94 9.84 20.64 10.38C20.341 10.801 19.62 10.979 19.081 10.68Z" fill="#101011" />
				</g>
			</svg>
		</>
	);
};

export default SpotifyIcon;