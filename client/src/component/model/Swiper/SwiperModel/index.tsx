import { FC, ReactNode } from "react";
import { EffectCoverflow } from "swiper/modules";
import { Swiper } from "swiper/react";

interface ISwiperModelProps {
	className?: string;
	children?: ReactNode;
	speed?: number;
	spaceBetween?: number;
}

const SwiperModel: FC<ISwiperModelProps> = ({
	className,
	children,
	speed,
	spaceBetween,
}) => {
	return (
		<Swiper
			className={`swiper ${className || ""}`}
			grabCursor={true}
			centeredSlides={true}
			lazyPreloadPrevNext={5}
			loopAdditionalSlides={5}
			loopAddBlankSlides={true}
			effect={'coverflow'}
			loop={true}
			spaceBetween={spaceBetween || 40}
			speed={speed || 600}
			modules={[EffectCoverflow]}
			coverflowEffect={{
				rotate: 20,
				stretch: 0,
				depth: 200,
				modifier: 1,
				slideShadows: true,
			}}
			breakpoints={{
				1400: {
					slidesPerView: 5,
				},
				1100: {
					slidesPerView: 4,
				},
				900: {
					slidesPerView: 3,
				},
				500: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			}}
		>
			{children}
		</Swiper>
	);
};

export default SwiperModel;