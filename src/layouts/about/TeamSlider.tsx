import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const features = [
  {
    img: "/team/team-1.png",
    description: "The Openlane founders waiting for something",
  },
  {
    img: "/team/team-2.png",
    description:
      "The Openlane founders after an Escape Room in San Antonio, TX",
  },
  {
    img: "/team/team-3.png",
    description: "Kelsey and Matt discussing lunch menu",
  },
  {
    img: "/team/team-1.png",
    description: "The Openlane founders waiting for something",
  },
  {
    img: "/team/team-2.png",
    description:
      "The Openlane founders after an Escape Room in San Antonio, TX",
  },
  {
    img: "/team/team-3.png",
    description: "Kelsey and Matt discussing lunch menu",
  },
];

const TeamSlider = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative w-full">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        spaceBetween={20}
        slidesPerView="auto"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          512: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {features.map((feature, index) => (
          <SwiperSlide
            key={index}
            className="border rounded-2xl p-3 team-bg !h-[330px]"
          >
            <div className="w-full flex items-center justify-center overflow-hidden border-none !h-[240px] lg:!h-[240px]">
              <img
                src={feature.img}
                alt={feature.description}
                className="max-h-full max-w-full object-contain !rounded-none"
              />
            </div>
            <p className="text-sm sm:text-base mt-4 text-center text-white">
              {feature.description}
            </p>
          </SwiperSlide>

        ))}

      </Swiper>
    </div>
  );
};

export default TeamSlider;
