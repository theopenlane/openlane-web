import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import NextBtn from "../../components/buttons/NextBtn.tsx";
import PreviousBtn from "../../components/buttons/PreviousBtn.tsx";
import AlignLogoLight from "../../components/icons/AlignLogoLight.tsx";
import AlignLogoDark from "../../components/icons/AlignLogoDark.tsx";
import { ChevronRight } from "lucide-react";

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
      <div className="flex flex-col items-start justify-between gap-4 w-[407px] p-6 shrink-0 rounded-lg border border-color bg-color-card h-[351px] overflow-hidden">
        <div className="flex items-center gap-4">
          <div className="flex w-[75px] h-[75px] p-[30px_9.618px_26px_9.5px] justify-center items-center aspect-square rounded-lg border border-border bg-card">
            <div className="block dark:hidden">
              <AlignLogoLight />
            </div>
            <div className="hidden dark:block">
              <AlignLogoDark />
            </div>
          </div>
          <p className="text-lg font-medium">A-LIGN</p>
        </div>

        <p className="font-normal leading-7 text-normal">
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
  {
    name: "Airius, LLC",
    description:
      "Airius, LLC provides risk management, compliance, and regulatory services with 20+ years of experience aged caramelization lu...",
    tags: [
      "Auditor Partner",
      "vCISO",
      "Security Training Providers",
      "Administrative Tools",
    ],
    component: (
      <div className="flex flex-col items-start justify-between gap-4 w-[407px] p-6 shrink-0 rounded-lg border border-color bg-color-card h-[351px] overflow-hidden">
        <div className="flex items-center gap-4">
          <div className="flex w-[75px] h-[75px] p-[30px_9.618px_26px_9.5px] justify-center items-center aspect-square rounded-lg border border-border bg-card">
            <img src="/assets/airus.svg" />
          </div>
          <p className="text-lg font-medium">Airius</p>
        </div>

        <p className="font-normal leading-7 text-normal">
          Airius, LLC provides risk management, compliance, and regulatory
          services with 20+ years of experience aged caramelization lu...
        </p>

        <div className="flex flex-wrap gap-2">
          {["Auditor Partner", "Security Training Providers"].map((tag) => (
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
      <div className="flex items-start justify-between mb-10">
        <div>
          <p className="text-base font-medium leading-[100%]">Partners</p>
          <p className="text-4xl font-medium leading-[100%] tracking-[-0.9px]">
            We’re partnering with the industries experts
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-6 py-2 border-2 rounded-full border-brand-400 flex items-center gap-2 font-medium">
            <span>Browse Partners</span>
            <ChevronRight className="w-4 h-4" />
          </button>
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
        loop={true}
        slidesPerView="auto"
        className="px-4"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <SwiperSlide key={index} style={{ width: "407px" }}>
            {partners[index % 2].component}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
