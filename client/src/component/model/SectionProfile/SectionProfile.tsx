import { Button, Input } from "antd";
import { ChangeEvent, useState } from "react";
import { MdEdit } from "react-icons/md";
import { useReducer } from "../../../hooks/reducer.hook";
import { DateServices } from "../../../utils/DateServices";
import AboutMeIcon from "../../Icon/AboutMeIcon/AboutMeIcon";
import InformationUserContainer from "../InformationUserContainer/InformationUserContainer";

interface ISectionProfileProps {

}

const SectionProfile: React.FC<ISectionProfileProps> = () => {
	const { state } = useReducer();
	const userDate: string = "2023-11-17T13:58:35.974+00:00";

	const [aboutMeText, setAboutMeText] = useState<string>("");
	const [aboutMeTextPrev, setAboutMeTextPrev] = useState<string>("");
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const [isShowMore, setIsShowMore] = useState<boolean>(false);

	function cancelValue(): void {
		setAboutMeTextPrev(aboutMeText);
		setIsEdit(!isEdit);
	}

	function handleEditAboutMe() {
		cancelValue();
	}

	function handleSaveAboutMeText() {
		setAboutMeText(aboutMeTextPrev);
		setIsEdit(false);
	}

	function handleCancelAboutMeText() {
		cancelValue();
	}

	function onChangeText(e: ChangeEvent<HTMLTextAreaElement>): void {
		setAboutMeTextPrev(e.target.value);
	}

	function handleShowMore() {
		setIsShowMore(!isShowMore);
	}

	return (
		<>
			<InformationUserContainer
				wrapperClass={"profile__user-data"}
			>
				<div className="profile__user-data-id">
					<span className="profile__user-data-id-title">Id:</span>
					<span className="profile__user-data-id-text">{state.user.user?.id}</span>
				</div>
				<div className="profile__user-data-email">
					<span className="profile__user-data-email-title">Email:</span>
					<span className="profile__user-data-email-text">{state.user.user?.email}</span>
				</div>
				{userDate && (
					<div
						className="profile__registration-date"
					>
						{new DateServices(userDate).getRegistrationDateOnSite()}
					</div>
				)}
			</InformationUserContainer>

			<InformationUserContainer
				wrapperClass={"profile__about-me"}
			>
				<div className="profile__about-me-top">
					<div className="profile__about-me-top-title">
						About Me
					</div>
					<div
						className="profile__about-me-top-btn-edit"
						onClick={handleEditAboutMe}
					>
						<MdEdit
							size={"20px"}
						/>
					</div>
				</div>

				{!isEdit && (
					aboutMeText
						? (
							<>
								<div
									className="profile__about-me-text"
									style={{
										height: isShowMore ? "7.5rem" : "",
										overflow: isShowMore ? "hidden" : "",
									}}
								>
									<div>{aboutMeText}</div>
								</div>
								{isShowMore && (
									<Button
										className="profile__about-me-btn-show-more"
										type="primary"
										size="small"
										onClick={handleShowMore}
									>
										Show more
									</Button>
								)}
							</>
						)
						: (
							<div className="profile__about-me-center">
								<div className="profile__about-me-center-logo">
									<AboutMeIcon
										size={"50px"}
									/>
								</div>
								<div className="profile__about-me-center-text">
									Add an entry about yourself!
								</div>
							</div>
						)
				)}

				{isEdit && (
					<div
						className="profile__about-me-edit-form"
					>
						<div className="profile__about-me-edit-enter">
							<Input.TextArea
								className="profile__about-me-edit-input"
								value={aboutMeTextPrev}
								onChange={onChangeText}
								placeholder="Tell us about yourself"
								autoSize
							/>
						</div>
						<div
							className="profile__about-me-edit-control"
						>
							<Button
								type="default"
								size={"middle"}
								onClick={handleCancelAboutMeText}
							>
								Cancel
							</Button>
							<Button
								type="primary"
								size={"middle"}
								onClick={handleSaveAboutMeText}
							>
								Save
							</Button>
						</div>
					</div>
				)}
			</InformationUserContainer >
		</>
	);
}


export default SectionProfile;