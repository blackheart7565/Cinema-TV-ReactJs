import React, { ChangeEvent, useState } from 'react';
import { IoCameraOutline } from "react-icons/io5";

import "./SelectAvatar.scss";

interface ISelectAvatarProps {
	id: string;
	size?: string | number | undefined;
	width?: string | number | undefined;
	height?: string | number | undefined;

	valueCacheCallback?: (value: File) => void
}

const SelectAvatar: React.FC<ISelectAvatarProps> = ({
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

		if (valueCacheCallback) {
			valueCacheCallback(target.files[0]);
		}

		const fileReader = new FileReader();
		fileReader.onload = () => {
			setAvatarSource(fileReader.result as string);
		}
		fileReader.readAsDataURL(target.files[0]);
	}

	return (
		<div
			className={"select-avatar"}
			style={{
				height: height || size || "50px",
				width: width || size || "50px",
			}}
		>
			<label
				htmlFor={id}
				className="select-avatar__label"
			>
				<input
					type="file"
					id={id}
					className="select-avatar__file"
					onChange={openFilesChange}
				/>
				<div
					className="select-avatar__icon"
				>
					<IoCameraOutline
						size={"100%"}
					/>
				</div>
				<img
					className={"select-avatar__img"}
					src={avatarSource || "/profile.png"}
					alt="channel-avatar"
				/>
			</label>
		</div>
	);
};

export default SelectAvatar;