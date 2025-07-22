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
      "Generate detailed reports on the status of your controls and compliance efforts. Our platform provides a comprehensive view of your compliance program, helping you stay on top of your regulatory requirements.",
  },
  {
    title: "Task and Evidence Management",
    img: "/assets/home-mobile-dashboard.png",
    alt: "Task and Evidence Management",
    description:
      "Easily assign tasks to individuals or teams and track their progress. Our platform ensures that all tasks are completed in a timely and consistent manner. Our platform provides real-time tracking of task status, automated reminders for updates, and a centralized repository for all compliance documentation. Ensure audit readiness with comprehensive task management.",
  },
  {
    title: "Control Mapping",
    img: "/assets/home-mobile-map-controls.png",
    alt: "Control Mapping",
    description:
      "Map controls across multiple frameworks simultaneously. Identify overlaps and gaps in your compliance program with our intelligent mapping system. Save time and reduce manual effort by mapping controls once and using them across multiple frameworks.",
  },
  {
    title: "Evidence Collection",
    img: "/assets/home-mobile-evidence.png",
    alt: "Evidence Collection",
    description:
      "Easily view, manage, and download all your compliance evidence in one place. Grant auditors secure access to the evidence they need, streamlining the review process and making audits more efficient for everyone involved.",
  },
  {
    title: "Policy and Procedure Management",
    img: "/assets/home-mobile-policy.png",
    alt: "Policy and Procedure Management",
    description:
      "Create, edit, and manage policies and procedures with ease. Our platform ensures that all policies are up-to-date and aligned with your compliance requirements. Our platform provides a centralized repository for all policies and procedures, making it easy to find the information you need when you need it.",
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
            delay: 3000,
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
