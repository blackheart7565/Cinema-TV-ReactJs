import { EffectCoverflow, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide, } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "./Swiper.scss";

export const PopularTVSwiper = () => {
	return (
		<div className="home__header-swiper">
			<Swiper
				className="swiper"
				grabCursor={true}
				centeredSlides={true}
				lazyPreloadPrevNext={5}
				loopAdditionalSlides={5}
				// slidesPerView={5}
				effect={'coverflow'}
				loop={true}
				// freeMode={true}
				spaceBetween={40}
				speed={600}
				coverflowEffect={{
					rotate: 20,
					stretch: 0,
					depth: 200,
					modifier: 1,
					slideShadows: true,
				}}
				modules={[EffectCoverflow, FreeMode]}
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
				<SwiperSlide>
					<img className="swiper-img" src="/path/header/slide-1.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img className="swiper-img" src="/path/header/slide-2.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img className="swiper-img" src="/path/header/slide-3.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img className="swiper-img" src="/path/header/slide-4.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img className="swiper-img" src="/path/header/slide-5.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img className="swiper-img" src="/path/header/slide-1.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img className="swiper-img" src="/path/header/slide-2.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img className="swiper-img" src="/path/header/slide-3.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img className="swiper-img" src="/path/header/slide-4.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img className="swiper-img" src="/path/header/slide-5.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img className="swiper-img" src="/path/header/slide-1.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img className="swiper-img" src="/path/header/slide-2.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img className="swiper-img" src="/path/header/slide-3.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img className="swiper-img" src="/path/header/slide-4.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img className="swiper-img" src="/path/header/slide-5.jpg" alt="" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};