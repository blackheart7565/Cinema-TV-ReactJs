import { FC } from "react";
import concatClasses from "../../../utils/ClassNames";

type IMediaTypeEnums = "movie" | "tv" | "";

interface IMediaDetailsVideoProps {
	className?: string | undefined;
	mediaType?: IMediaTypeEnums | undefined | null;
	mediaName?: string | undefined | null;
}


const MediaDetailsVideo: FC<IMediaDetailsVideoProps> = ({
	className,
	mediaType,
	mediaName,
}) => {
	return (
		<div className={className}>
			<div className={className && concatClasses(className, "-header")}>
				Watch {mediaType === "movie" ? "movie" : mediaType === "tv" ? "the series" : ""} {mediaName} online
			</div>

			<div className={className && concatClasses(className, "-content")}>

			</div>
		</div>
	);
}

MediaDetailsVideo.defaultProps = {
	mediaType: "",
}

export default MediaDetailsVideo;