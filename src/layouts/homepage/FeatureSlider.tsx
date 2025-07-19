import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import NextBtn from "../../components/buttons/NextBtn.tsx";
import PreviousBtn from "../../components/buttons/PreviousBtn.tsx";
import { Autoplay } from "swiper/modules";

const features = [
  {
    title: "Policy & Procedure Templates",
    img: "/assets/home-mobile-1.png",
    description:
      "Pre-built templates aligned with major compliance frameworks. Streamline your documentation process with customizable, industry-standard policies.",
  },
  {
    title: "Questionnaires",
    img: "/assets/home-mobile-2.png",
    description:
      "Standardized assessment forms to evaluate compliance readiness. Easily collect and track responses from across your organization as well as with external parties.",
  },
  {
    title: "Workflow Automation",
    img: "/assets/home-mobile-1.png",
    description:
      "Automate repetitive compliance tasks, from evidence collection to approvals. Save time and reduce human error with intelligent workflows.",
  },
  {
    title: "Control Mapping",
    img: "/assets/home-mobile-map-controls.png",
    description:
      "Map controls across multiple frameworks simultaneously. Identify overlaps and gaps in your compliance program with our intelligent mapping system.",
  },
  {
    title: "Continuous Monitoring",
    img: "/assets/home-mobile-1.png",
    description:
      "Real-time tracking of compliance status and controls effectiveness. Stay audit-ready with automated alerts and compliance dashboards.",
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
