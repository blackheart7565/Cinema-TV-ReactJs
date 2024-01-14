import React, { ChangeEvent, useState } from 'react';

import { IoCameraOutline } from "react-icons/io5";
import "./SelectHeaderBackground.scss";

interface ISelectHeaderBackgroundProps {
	id: string;
	size?: string | number | undefined;
	width?: string | number | undefined;
	height?: string | number | undefined;

	valueCacheCallback?: (value: string) => void
}

const SelectHeaderBackground: React.FC<ISelectHeaderBackgroundProps> = ({
	id,
	size,
	width,
	height,
	valueCacheCallback,
}) => {
	const [avatarSource, setAvatarSource] = useState<string>("");

	const openFilesChange = (e: ChangeEvent<HTMLInputElement>) => {
		const target = e.target;

		if (!FileReader) {
			return;
		}

		if (!target?.files?.length) {
			return;
		}

		const fileReader = new FileReader();
		fileReader.onload = () => {
			setAvatarSource(fileReader.result as string);

			if (valueCacheCallback) {
				valueCacheCallback(fileReader.result as string);
			}
		}
		fileReader.readAsDataURL(target.files[0]);
	}

	return (
		<div
			className={"select-background"}
			style={{
				height: height || size || "50px",
				width: width || size || "50px",
			}}
		>
			<label
				htmlFor={id}
				className="select-background__label"
			>
				<input
					type="file"
					id={id}
					className="select-background__file"
					onChange={openFilesChange}
				/>
				<div
					className="select-background__icon"
				>
					<IoCameraOutline
						size={"100%"}
					/>
				</div>
				<img
					className={"select-background__img"}
					src={avatarSource || "/profile_poster.jpg"}
					alt="channel-avatar"
				/>
			</label>
		</div>
	);
};

export default SelectHeaderBackground;