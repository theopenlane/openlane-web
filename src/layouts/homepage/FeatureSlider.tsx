import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import NextBtn from "../../components/buttons/NextBtn.tsx";
import PreviousBtn from "../../components/buttons/PreviousBtn.tsx";

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

  return (
    <div className="relative">
      <div className="flex items-start justify-between mb-10">
        <div>
          <p className="text-base font-medium leading-[100%]">Features</p>
          <p className="text-4xl font-medium leading-[100%] tracking-[-0.9px]">
            Breaking down the compliance complexity
          </p>
        </div>
        <div className="flex items-center gap-4">
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

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={32}
        slidesPerView="auto"
        className="px-4"
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index} style={{ width: "298px" }}>
            <div className="w-[298px]">
              <p className="text-lg font-normal mb-2 leading-7">
                {feature.title}
              </p>
              <div className="w-full h-[394px]">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-700 mt-4">
                {feature.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
