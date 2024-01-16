import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import { useReducer } from "../../../hooks/reducer.hook";
import { UserService } from "../../../services/user.service";
import Button from "../../UI/Button";
import InformationUserContainer from "../InformationUserContainer/InformationUserContainer";
import SelectAvatar from "../SelectAvatar/SelectAvatar";
import SelectHeaderBackground from "../SelectHeaderBackground/SelectHeaderBackground";

const ProfileSettings = () => {
	const { state } = useReducer();
	const [username, setUsername] = useState<string>("");
	const [posterUser, setPosterUser] = useState<File>({} as File);
	const [avatarUser, setAvatarUser] = useState<File>({} as File);

	const setValueUsername = (e: ChangeEvent<HTMLInputElement>): void => {
		setUsername(e.target.value);
	}

	const valueCacheCallbackPoster = (value: File) => {
		setPosterUser(value);
	}

	const valueCacheCallbackAvatar = (value: File) => {
		setAvatarUser(value);
	}

	const clearState = () => {
		setUsername("");
		setPosterUser({} as File);
		setAvatarUser({} as File);
	}

	const handleSave = async (): Promise<void> => {
		const formData = new FormData();

		formData.append("username", username || state.user.user?.username as string);
		formData.append("email", state.user.user?.email as string);
		formData.append("avatar", avatarUser as File || state.user.user?.avatar);
		formData.append("poster", posterUser as File || state.user.user?.poster);

		const response = await UserService.update(formData);
		toast.success(response)
		clearState();
	}
	return (
		<div
			className="settings__content-profile"
		>
			<h1
				className="settings__content-profile-title"
			>
				Profile settings
			</h1>

			<InformationUserContainer
				wrapperClass="settings__content-change-name-container"
			>
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

			<InformationUserContainer
				wrapperClass="settings__content-change-header-profile-container"
			>
				<div className="settings__content-change-title">Сменить шапку профиля: </div>
				<div className="settings__content-change-header-profile">
					<SelectHeaderBackground
						valueCacheCallback={valueCacheCallbackPoster}
						id="open-bg-file"
						width={"100%"}
						height={"100%"}
					/>
				</div>
			</InformationUserContainer>

			<InformationUserContainer
				wrapperClass="settings__content-change-avatar-profile-container"
			>
				<div className="settings__content-change-title">Сменить аватарку профиля: </div>
				<div className="settings__content-change-avatar-profile">
					<SelectAvatar
						id="open-avatar-file"
						size={"70px"}
						valueCacheCallback={valueCacheCallbackAvatar}
					/>
				</div>
			</InformationUserContainer>

			<InformationUserContainer
				wrapperClass="settings__content-change-password-container"
			>
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
						htmlFor="enter-new-password-change"
						className="settings__content-change-label"
					>
						Новый пароль:
						<input
							type="text"
							id="enter-new-password-change"
							placeholder="New password"
							className="settings__content-change-enter"
						/>
					</label>
				</div>
				<Button
					className="settings__content-btn-save"
					onClick={handleSave}
				>
					Save
				</Button>
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