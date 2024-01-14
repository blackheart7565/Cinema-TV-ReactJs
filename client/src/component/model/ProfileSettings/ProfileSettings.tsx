import { ChangeEvent, useEffect, useState } from "react";
import Button from "../../UI/Button";
import InformationUserContainer from "../InformationUserContainer/InformationUserContainer";
import SelectAvatar from "../SelectAvatar/SelectAvatar";
import SelectHeaderBackground from "../SelectHeaderBackground/SelectHeaderBackground";

const ProfileSettings = () => {
	const [username, setUsername] = useState<string>("");
	const [posterUser, setPosterUser] = useState<string>("");
	const [avatarUser, setAvatarUser] = useState<string>("");
	const [isSave, setIsSave] = useState<boolean>(false);

	const setValueUsername = (e: ChangeEvent<HTMLInputElement>): void => {
		setUsername(e.target.value);
	}

	const valueCacheCallbackPoster = (value: string) => {
		setPosterUser(value);
	}

	const valueCacheCallbackAvatar = (value: string) => {
		setAvatarUser(value);
	}

	const handleSave = (): void => {
		setIsSave(true);
	}

	useEffect(() => {
		if (isSave) {

		}
	}, [isSave]);

	return (
		<div
			className="settings__content-profile"
		>
			<h1
				className="settings__content-profile-title"
			>
				Profile settings
			</h1>

			<InformationUserContainer isRow>
				<div className="settings__content-change-title">Сменить имя: </div>
				<div className="settings__content-change-name">
					<label
						htmlFor="enter-name-change"
						className="settings__content-change-label"
					>
						<input
							type="text"
							id="enter-name-change"
							placeholder="Your name"
							value={username}
							onChange={setValueUsername}
							className="settings__content-change-enter"
						/>
					</label>
				</div>
			</InformationUserContainer>

			<InformationUserContainer isRow>
				<div className="settings__content-change-title">Сменить шапку профиля: </div>
				<div className="settings__content-change-header-profile">
					<SelectHeaderBackground
						valueCacheCallback={valueCacheCallbackPoster}
						id="open-bg-file"
						width={"100%"}
						height={"120px"}
					/>
				</div>
			</InformationUserContainer>

			<InformationUserContainer isRow>
				<div className="settings__content-change-title">Сменить аватарку профиля: </div>
				<div className="settings__content-change-avatar-profile">
					<SelectAvatar
						size={"70px"}
						valueCacheCallback={valueCacheCallbackAvatar}
					/>
				</div>
			</InformationUserContainer>

			<InformationUserContainer>
				<div className="settings__content-change-title">Сменить пароль: </div>
				<div className="settings__content-change-password">
					<label
						htmlFor="enter-password-change"
						className="settings__content-change-label"
					>
						Старый пароль:
						<input
							type="text"
							id="enter-password-change"
							placeholder="Password"
							className="settings__content-change-enter"
						/>
					</label>
				</div>
				<div className="settings__content-change-newpassword">
					<label
						htmlFor="enter-password-change"
						className="settings__content-change-label"
					>
						Новый пароль:
						<input
							type="text"
							id="enter-password-change"
							placeholder="New password"
							className="settings__content-change-enter"
						/>
					</label>
				</div>
			</InformationUserContainer>

			<InformationUserContainer isEnd isRow>
				<Button
					className="settings__content-btn-save"
					onClick={handleSave}
				>
					Save
				</Button>
			</InformationUserContainer>

		</div>
	);
};

export default ProfileSettings;