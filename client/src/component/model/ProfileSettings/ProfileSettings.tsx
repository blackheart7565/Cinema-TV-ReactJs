import InformationUserContainer from "../InformationUserContainer/InformationUserContainer";

const ProfileSettings = () => {
	return (
		<div
			className="settings__content-profile"
		>
			<h1
				className="settings__content-profile-title"
			>
				Profile settings
			</h1>

			<InformationUserContainer>
				Сменить имя
			</InformationUserContainer>

			<InformationUserContainer>
				Сменить шапку профиля
			</InformationUserContainer>

			<InformationUserContainer>
				Сменить аватарку профиля
			</InformationUserContainer>

			<InformationUserContainer>
				Сменить пароль
			</InformationUserContainer>

			<InformationUserContainer>
				Кнопка сохранить
			</InformationUserContainer>

		</div>
	);
};

export default ProfileSettings;