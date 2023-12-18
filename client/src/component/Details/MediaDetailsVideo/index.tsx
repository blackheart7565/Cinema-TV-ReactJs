import { FC } from "react";
import { mediaConfig } from "../../../api/config/media.config";
import { IMediaTop } from "../../../types/media-types/details.type";
import concatClasses from "../../../utils/ClassNames";
import { CinemaPlayer } from "../../UI/CinemaPlayer/CinemaPlayer";
import CinemaPlayerFrameYT from "../../UI/CinemaPlayerFrameYT/CinemaPlayerFrameYT";
import TabBar from "../../UI/TabBar/TabBar";
import MediaDetailsTop from "../MediaDetailsTop";

type IMediaTypeEnums = "movie" | "tv" | "";

interface IMediaDetailsVideoProps {
	className?: string | undefined;
	mediaType?: IMediaTypeEnums | undefined | null;
	mediaId?: string | undefined | null;
	mediaName?: string | undefined | null;
	trailerUtlKey?: string | undefined;
	topMedia?: IMediaTop[];
}

/**
 *  @param mediaType type movies or series
 *  @param mediaName name movie or series
 *  @n if the amount of content is greater than the number of navigation buttons, then the menu tab will not be displayed.
 * @n (если объем контента превышает количество кнопок навигации, то вкладка меню отображаться не будет.)
 */
const MediaDetailsVideo: FC<IMediaDetailsVideoProps> = ({
	className,
	mediaType,
	mediaId,
	mediaName,
	trailerUtlKey,
	topMedia,
}) => {
	return (
		<div className={className} style={{
			color: "#DDd"
		}}>
			<div className={className && concatClasses(className, "-header")}>
				Watch {mediaType === "movie" ? "movie" : mediaType === "tv" ? "the series" : ""} {mediaName} online
			</div>

			<div className={className && concatClasses(className, "-content")}>
				<TabBar
					dependencies={[mediaType, mediaId]}
					className={className}
					navigation={[
						{
							id: "1",
							label: "Watch online"
						},
						{
							id: "2",
							label: "Trailer"
						},
					]}
					content={[
						{
							id: "1",
							node: <CinemaPlayer
								dependencies={[mediaType, mediaId]}
								// url={"https://www.youtube.com/watch?v=5_4TKRgEr9U&list=RDMM5_4TKRgEr9U&start_radio=1"}
								// url="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
								// url="//vjs.zencdn.net/v/oceans.mp4"
								// url="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
								url={"/86.mp4"}
							// url={"/movie.mp4"}
							/>,
						},
						{
							id: "2",
							node: <CinemaPlayerFrameYT url={mediaConfig.methods.youtube_path(trailerUtlKey)} />,
						},
					]}
				/>

				<MediaDetailsTop
					mediaType={
						mediaType === "movie"
							? "movie"
							: mediaType === "tv"
								? "tv"
								: ""
					}
					className={className}
					title={(
						<>
							Top <span>10</span>
						</>
					)}
					topList={topMedia && topMedia.slice(0, 10)}
				/>

			</div>
		</div>
	);
}

MediaDetailsVideo.defaultProps = {
	mediaType: "",
}

export default MediaDetailsVideo;