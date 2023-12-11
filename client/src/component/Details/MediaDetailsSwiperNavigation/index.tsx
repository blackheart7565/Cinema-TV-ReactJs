import { FC } from "react";

interface IMediaDetailsSwiperNavigationProps {
	className?: string;
	onPrev?: () => void;
	onNext?: () => void;
}

const MediaDetailsSwiperNavigation: FC<IMediaDetailsSwiperNavigationProps> = ({
	className,
	onPrev,
	onNext,
}) => {
	return (
		<div className={`${className}-navigation`}>
			<div className={`${className}-btn-prev`} onClick={onPrev}>
				<span></span>
			</div>
			<div className={` ${className}-btn-next`} onClick={onNext}>
				<span></span>
			</div>
		</div>
	);
}


export default MediaDetailsSwiperNavigation;