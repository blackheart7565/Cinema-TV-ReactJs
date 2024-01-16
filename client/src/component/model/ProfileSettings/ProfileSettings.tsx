import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import { useReducer } from "../../../hooks/reducer.hook";
import { UserService } from "../../../services/user.service";
import RegExpValidator from "../../../utils/RegExpValidator";
import Button from "../../UI/Button";
import InformationUserContainer from "../InformationUserContainer/InformationUserContainer";
import SelectAvatar from "../SelectAvatar/SelectAvatar";
import SelectHeaderBackground from "../SelectHeaderBackground/SelectHeaderBackground";


interface IChangePassword {
	currentPassword: string,
	newPassword: string,
}

interface IProfileSettingsProps { }

const ProfileSettings: React.FC<IProfileSettingsProps> = () => {
	const regExpValid = new RegExpValidator();
	const { state } = useReducer();
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<IChangePassword>({
		currentPassword: "",
		newPassword: "",
	});
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
		const validUsername = regExpValid.validateUsernameRegexp(username);

		if (username && !validUsername) {
			toast.error("The maximum length of username should be no more than 20 characters");
			return;
		}

		formData.append("username", username || state.user.user?.username as string);
		formData.append("email", state.user.user?.email as string);
		formData.append("avatar", avatarUser as File || state.user.user?.avatar);
		formData.append("poster", posterUser as File || state.user.user?.poster);

		const response = await UserService.update(formData);
		toast.success(response)
		clearState();
	}

	const handleSavePassword = async () => {
		const validPassword = regExpValid.validatePasswordRegexp(password.newPassword);

		if (!validPassword) {
			toast.error((
				<ul style={{
					fontSize: "14px",
					display: "flex",
					flexDirection: "column",
					gap: "10px",
				}}>
					<li>Пароль должен:</li>
					<li>1) Содержать хотя бы 1 буквенный символ нижнего регистра.</li>
					<li>2) Содержать хотя бы 1 буквенный символ верхнего регистра.</li>
					<li>3) Содержать хотя бы 1 цифровой символ.</li>
					<li>4) Содержать хотя бы один специальный символ.</li>
					<li>5) Состоять из 8 символов или длиннее.</li>
				</ul>
			));
			return;
		}

		if (!state.user.user) return;

		const response = await UserService.updatePassword(state.user.user.email, password.currentPassword, password.newPassword);

		toast.success(response);
		setPassword({
			currentPassword: "",
			newPassword: ""
		})
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
							value={password.currentPassword}
							pattern={regExpValid.getPasswordRegexpLine}
							onChange={(e) => setPassword({ ...password, currentPassword: e.target.value })}
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
							pattern={regExpValid.getPasswordRegexpLine}
							value={password.newPassword}
							onChange={(e) => setPassword({ ...password, newPassword: e.target.value })}
							className="settings__content-change-enter"
						/>
					</label>
				</div>
				<Button
					className="settings__content-btn-save"
					onClick={handleSavePassword}
				>
					Save password
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