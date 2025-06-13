import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
const Banner = () => {
  return (
    <Swiper
      className=" bg-gray-100  h-14 lg:h-16"
      modules={[Autoplay]}
      slidesPerView={1}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop
    >
      {Array.from({ length: 6 }).map((_, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex flex-col items-center justify-center">
              <span className="text-[14px] lg:text-[16px]">
                Free Standard Delivery & 30-Day Free Returns {index}
              </span>
              <p className="text-[10px] lg:text-[12px] font-semibold underline">
                Free Standard Delivery & 30-Day Free Returns {index}
              </p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Banner;
