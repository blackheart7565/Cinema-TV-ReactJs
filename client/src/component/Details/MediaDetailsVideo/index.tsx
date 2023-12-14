import { FC } from "react";
import concatClasses from "../../../utils/ClassNames";
import { CinemaPlayer } from "../../UI/CinemaPlayer/CinemaPlayer";
import TabBar from "../../UI/TabBar/TabBar";

type IMediaTypeEnums = "movie" | "tv" | "";

interface IMediaDetailsVideoProps {
	className?: string | undefined;
	mediaType?: IMediaTypeEnums | undefined | null;
	mediaName?: string | undefined | null;
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
	mediaName,
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
					className={className}
					navigation={[
						{
							id: "1",
							label: "№1"
						},
						{
							id: "2",
							label: "№2"
						},
						{
							id: "3",
							label: "№3"
						},
					]}
					content={[
						{
							id: "1",
							node: <CinemaPlayer
								// url="https://www.youtube.com/watch?v=5_4TKRgEr9U&list=RDMM5_4TKRgEr9U&start_radio=1" 
								// url="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
								// url="//vjs.zencdn.net/v/oceans.mp4"
								// url="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
								url={"/movie.mp4"}
								options={{
									width: "100%",
									height: "650px",
								}} />,
						},
						{
							id: "2",
							node: <Image src="https://wallpaperwaifu.com/wp-content/uploads/2019/09/underwater-anime-girl-thumb.jpg" />,
						},
						{
							id: "3",
							node: <Image src="https://moewalls.com/wp-content/uploads/2022/06/anime-girl-playing-underwater-thumb.jpg" />,
						},
					]}
				/>
			</div>
		</div>
	);
}

const Image: FC<{ src?: string }> = ({
	src
}) => {
	return (
		<>
			<img style={{
				width: "100%",
				// height: "100%",
				objectFit: "cover"
			}} src={src} alt="" />
		</>
	);
}

MediaDetailsVideo.defaultProps = {
	mediaType: "",
}

export default MediaDetailsVideo;