import { FC } from "react";
import concatClasses from "../../../utils/ClassNames";
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
							node: <Image src="https://i.pinimg.com/474x/38/a8/d4/38a8d4c36de3d059b95da91f9f1ad0b3.jpg" />,
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