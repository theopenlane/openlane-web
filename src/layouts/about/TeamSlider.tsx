import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const features = [
  {
    img: "/team/team-1.png",
    alt: "Openlane founders in a heated Texas vs KC BBQ debate",
    description: "Openlane founders in a heated Texas vs KC BBQ debate",
  },
  {
    img: "/team/team-2.png",
    alt: "Post escape room defeat in San Antonio - maybe stick to compliance?",
    description:
      "Post escape room defeat in San Antonio - maybe stick to compliance?",
  },
  {
    img: "/team/team-3.png",
    alt: "Kelsey and Matt plotting world-class compliance tools",
    description: "Kelsey and Matt plotting world-class compliance tools",
  },
  {
    img: "/team/team-4.png",
    alt: "Matt and Sarah hunting down a particularly sneaky bug",
    description: "Matt and Sarah hunting down a particularly sneaky bug",
  },
];

const TeamSlider = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  // Double the features array to ensure smooth infinite loop
  const slidesData = [...features, ...features];

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
            slidesPerView: 1.5,
          },
          1024: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 2.5,
          },
        }}
      >
        {slidesData.map((feature, index) => (
          <SwiperSlide key={index} className="border rounded-2xl p-3 team-bg">
            <div className="w-full aspect-[16/9] relative overflow-hidden rounded-xl">
              <img
                src={feature.img}
                alt={feature.description}
                className="absolute inset-0 w-full h-full object-cover"
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
