import { FC } from "react";
import styled from "styled-components";

interface IMediaDetailsHeaderProps {
	src: string;
}

const MediaDetailsHeader: FC<IMediaDetailsHeaderProps> = ({
	src
}) => {
	return (
		// <div className="media-details__header"
		<Header
			style={{
				backgroundImage: `url(${src})`
			}} />
	);
}

export default MediaDetailsHeader;

const Header = styled.div`
	width: 100%;
	height: 80vh;
	position: relative;
	background-attachment: fixed;
	background-position: center top;
	background-size: cover;
	transition: all 0.3s ease-in-out;

	@media screen and (max-width: 960px) {
		height: 70vh;
	}

	&::before {
		content: "";
		width: 100%;
		height: 101%;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(to top, #01000c, #01000c00);
	}
`;