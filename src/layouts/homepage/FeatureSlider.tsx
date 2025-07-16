import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import NextBtn from "../../components/buttons/NextBtn.tsx";
import PreviousBtn from "../../components/buttons/PreviousBtn.tsx";
import { Autoplay } from "swiper/modules";

const features = [
  {
    title: "Policy & Procedure template",
    img: "/assets/home-mobile-1.png",
    description:
      "Con latte trade whipped aroma café blue trade breve con dripper caffeine lungo aftertaste black...",
  },
  {
    title: "Questionnaire",
    img: "/assets/home-mobile-2.png",
    description:
      "Galão extra strong caramelization body medium mug percolator irish instant...",
  },
  {
    title: "Automation",
    img: "/assets/home-mobile-1.png",
    description:
      "Con latte trade whipped aroma café blue trade breve con dripper caffeine lungo aftertaste black...",
  },
  {
    title: "Mapping Controls",
    img: "/assets/home-mobile-2.png",
    description:
      "Galão extra strong caramelization body medium mug percolator irish instant...",
  },
  {
    title: "Mapping Controls",
    img: "/assets/home-mobile-1.png",
    description:
      "Galão extra strong caramelization body medium mug percolator irish instant...",
  },
];

export default function FeatureSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between text-center sm:text-left mb-10">
        <div>
          <p className="text-base font-medium leading-[100%]">Features</p>
          <p className="text-4xl font-medium leading-[100%] tracking-[-0.9px]">
            Breaking down the compliance complexity
          </p>
        </div>
        <div className="flex items-center gap-4 mt-3 sm:mt-0">
          <PreviousBtn
            onClick={() => swiperRef.current?.slidePrev()}
            className="cursor-pointer"
          />
          <NextBtn
            onClick={() => swiperRef.current?.slideNext()}
            className="cursor-pointer"
          />
        </div>
      </div>

      {!isLoaded && (
        <div
          className="swiper-placeholder"
          style={{
            height: "400px",
            width: "100%",
          }}
        />
      )}

      {isLoaded && (
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          slidesPerView={4}
          breakpoints={{
            0: { slidesPerView: 1 },
            512: { slidesPerView: 2 },
            800: { slidesPerView: 3 },
            1080: { slidesPerView: 4 },
          }}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index} className="px-5 sm:px-5">
              <p className="text-sm lg:text-lg font-normal mb-2 leading-7">
                {feature.title}
              </p>
              <div className="w-full">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-700 mt-4">
                {feature.description}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
