import classNames from "classnames";
import React, { forwardRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types/swiper-options";

import 'swiper/css';
import "./LinearSwiper.scss";

interface ICollection {
	id: string | number;
	element: React.ReactNode;
}
interface ILinearSwiperProps {
	wrapperClassName?: string | undefined;
	slideClassName?: string | undefined;
	ref: React.RefObject<SwiperRef>;
	collection?: ICollection[] | undefined;
	options?: SwiperOptions;
}

const defaultOptions: SwiperOptions = {
	grabCursor: true,
	spaceBetween: 10,
	slidesPerView: "auto",
}

type ILinearSwiperRefType = React.ForwardRefExoticComponent<Omit<ILinearSwiperProps, "ref"> & React.RefAttributes<SwiperRef>>

const LinearSwiper: ILinearSwiperRefType = forwardRef(({
	wrapperClassName,
	slideClassName,
	collection,
	options = defaultOptions,
}, ref) => {
	return (
		<Swiper
			ref={ref}
			className={classNames("swiper", "linearSwiper", wrapperClassName)}
			{...options}
		>
			{collection && collection.length > 0 && (
				collection.map((item: ICollection) => (
					<SwiperSlide
						key={item.id}
						className={classNames("swiper-slide", "linearSwiper__slide", slideClassName)}
					>
						{item.element}
					</SwiperSlide>
				))
			)}
		</Swiper>
	);
});


export default LinearSwiper;