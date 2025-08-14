import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import NextBtn from "../../components/buttons/NextBtn.tsx";
import PreviousBtn from "../../components/buttons/PreviousBtn.tsx";
import { Autoplay } from "swiper/modules";

const features = [
  {
    title: "Control Reporting",
    img: "/assets/home-mobile-control-report.png",
    alt: "Control Reporting",
    description:
      "Track your compliance posture with real-time, audit-ready control reports.",
  },
  {
    title: "Task and Evidence Management",
    img: "/assets/home-mobile-dashboard.png",
    alt: "Task and Evidence Management",
    description:
      "Assign tasks, collect evidence, and stay on top of deadlines—all in one place.",
  },
  {
    title: "Control Mapping",
    img: "/assets/home-mobile-map-controls.png",
    alt: "Control Mapping",
    description:
      "Map controls across frameworks to reduce duplicate work and uncover gaps.",
  },
  {
    title: "Evidence Collection",
    img: "/assets/home-mobile-evidence.png",
    alt: "Evidence Collection",
    description:
      "Centralize, track, and securely share compliance evidence with your auditors.",
  },
  {
    title: "Policy and Procedure Management",
    img: "/assets/home-mobile-policy.png",
    alt: "Policy and Procedure Management",
    description:
      "Create and manage versioned policies with built-in approvals and audit trails.",
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
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between text-center sm:text-left mb-10 sm:mt-10">
        <div>
          <p className="text-base font-medium leading-[100%]">Features</p>
          <p className="text-4xl font-normal leading-[100%] tracking-[-0.9px]">
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
            height: "450px",
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
            delay: 1800,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={1000}
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            512: { slidesPerView: 2, spaceBetween: 15 },
            800: { slidesPerView: 3, spaceBetween: 20 },
            1080: { slidesPerView: 4, spaceBetween: 20 },
          }}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index} className="px-5 sm:px-5">
              <p className="min-w-[300px] text-sm lg:text-lg font-normal mb-2 leading-7">
                {feature.title}
              </p>
              <div className="w-full min-w-[300px]">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-full h-full object-cover zoom-img z-[1]"
                />
              </div>
              <p className="text-sm text-gray-700 mt-4 min-w-[300px]">
                {feature.description}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
