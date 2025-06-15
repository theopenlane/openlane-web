import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import NextBtn from "../../components/buttons/NextBtn.tsx";
import PreviousBtn from "../../components/buttons/PreviousBtn.tsx";
import { ChevronRight, User } from "lucide-react";

const partners = [
  {
    name: "A-LIGN",
    description:
      "Quality compliance for teams who take cybersecurity seriously. From the top SOC 2 issuer in the world.",
    tags: [
      "Auditor Partner",
      "vCISO",
      "Security Training Providers",
      "Administrative Tools",
    ],
    component: (
      <div className="flex flex-col items-start justify-between gap-4 p-6 shrink-0 rounded-lg border border-color bg-color-card overflow-hidden">
        <div className="flex items-center gap-4">
          <div className="flex w-[75px] h-[75px] p-[30px_9.618px_26px_9.5px] justify-center items-center aspect-square rounded-lg border border-border bg-card">
            <User />
          </div>
          <p className="text-lg font-medium">Cool Partner</p>
        </div>

        <p className="font-normal leading-7 text-base">
          Quality compliance for teams who take cybersecurity seriously. From
          the top SOC 2 issuer in the world.
        </p>

        <div className="flex flex-wrap gap-2">
          {[
            "Auditor Partner",
            "vCISO",
            "Security Training Providers",
            "Administrative Tools",
          ].map((tag) => (
            <p
              key={tag}
              className="px-3 py-1 rounded-full border border-color text-xs bg-color-card"
            >
              {tag}
            </p>
          ))}
        </div>

        <a
          href="#"
          className="!text-[var(--color-icon-primary)] font-normal text-sm leading-6 flex items-center gap-1 border-t-[1px] border-dashed border-color pt-4 mt-2 w-full"
        >
          <span className="inline-block">Learn more</span>
          <ChevronRight className="!text-[var(--color-icon-primary)] w-[12px] h-[12px]" />
        </a>
      </div>
    ),
  },
];

export default function PartnersSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative">
      <div className="flex flex-col sm:flex-row sm:items-start justify-center sm:justify-between text-center sm:text-left mb-10">
        <div>
          <p className="text-base font-medium leading-[100%] text-left">
            Partners
          </p>
          <p className="text-4xl font-medium leading-[100%] tracking-[-0.9px] text-left">
            We’re partnering with the industries experts
          </p>
        </div>

        <div className="flex items-center gap-4 justify-between pt-5 sm:pt-0">
          <button className="px-6 py-2 border-2 rounded-full border-brand-400 flex items-center gap-2 font-medium w-[195px] cursor-pointer group/feedback hover:border-primary transition-all duration-300">
            <p className="text-base group-hover/feedback:!text-(--color-primary) transition-all duration-300">
              Browse Partners
            </p>
            <ChevronRight className="w-4 h-4 group-hover/feedback:!text-(--color-primary) transition-all duration-300" />
          </button>
          <div className="flex items-center gap-2">
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
      </div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop={true}
        slidesPerView={4}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          950: {
            slidesPerView: 2,
          },
          1240: {
            slidesPerView: 3,
          },
        }}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <SwiperSlide key={index} className="px-5 sm:px-5">
            {partners[0].component}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
