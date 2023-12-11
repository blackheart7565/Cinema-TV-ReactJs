import { useRef } from "react";
import { SwiperRef } from "swiper/react";

export const useSwiperNavigation = () => {
	const swiperRef = useRef<SwiperRef>(null);

	const onHandlerPrev = () => {
		if (swiperRef.current) {
			swiperRef.current.swiper.slidePrev();
		}
	};
	const onHandlerNext = () => {
		if (swiperRef.current) {
			swiperRef.current.swiper.slideNext();
		}
	};

	return {
		swiperRef,
		onHandlerPrev,
		onHandlerNext,
	};
};