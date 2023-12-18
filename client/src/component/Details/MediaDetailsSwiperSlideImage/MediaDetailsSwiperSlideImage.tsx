import { FC } from "react";

interface IMediaDetailsSwiperSlideImageProps {
	className?: string;
	pathImage?: string;
}

const MediaDetailsSwiperSlideImage: FC<IMediaDetailsSwiperSlideImageProps> = ({
	className,
	pathImage,
}) => {
	return (
		<>
			<img
				className={className}
				src={pathImage || ""}
				alt={`${className}-image`}
			/>
		</>
	);
}

export default MediaDetailsSwiperSlideImage;