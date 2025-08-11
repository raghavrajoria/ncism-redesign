import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ServiceImg from "../assets/ServiceImg.jpg";

import { ChevronLeft, ChevronRight } from "lucide-react";

import HomeSlider from "../Components/HomeSlider";
import NewsTicker from "../Components/NewsTicker";
import MinisterImg from "../assets/MinisterImg.png";
import Vision from "../assets/VisionImg.jpg";
import LatestUpdatesSection from "../Components/LatestUpdatesSection";

const Home = () => {
  return (
    <div>
      <div className="mt-1">
        <HomeSlider />
      </div>

      <div className="mt-2">
        <NewsTicker />
      </div>

      <section className="p-5 bg-white dark:bg-gray-900">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          INTRODUCTION
        </h2>
        <section className="bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
              {/* Left Side */}
              <div className="md:col-span-8">
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                  In pursuance of the provisions of National Commission for
                  Indian System of Medicine (NCISM) Act 2020 (14 of 2020), the
                  Indian Medicine Central Council (IMCC) Act 1970 (48 of 1970)
                  has been repealed and all the provisions of the National
                  Commission for Indian System of Medicine (NCISM) has been come
                  into force with effect from the 11th day of June 2021. Under
                  the provisions of section 59 (2) of NCISM Act 2020 the Central
                  Government has constituted the Commission and four Autonomous
                  boards on the same day. Medical standards, requirements and
                  other provisions of the IMCC Act 1970 and the rules and
                  regulations made thereunder shall continue to be in force and
                  operate till new standards or requirements as specified under
                  new act or rules and regulations made thereunder come into
                  force. However, the provisions of concerned regulations which
                  are inconsistent with the provisions of NCISM Act 2020 shall
                  not be applicable.
                </p>
              </div>
              {/* Right Side */}
              <div className="md:col-span-4">
                <img
                  src={MinisterImg}
                  alt="Introduction"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </section>

      <VisionAndMission />
      <IndianSystemsOfMedicine />
      <NationalCommission />
      <LatestUpdatesSection />
    </div>
  );
};

const systems = [
  {
    title: "Ayurveda",
    description:
      'Ayurveda means "the science of life" (ayur means "life" and veda means "science" in Sanskrit). Ayurveda is a discipline of the upaveda or "auxiliary knowledge" in Vedic tradition.',
    link: "#ayurveda",
    icon: "🥗",
    iconBg: "bg-pink-100",
  },
  {
    title: "Unani",
    description:
      "Unani-tibb or Unani Medicine also spelled Yunani Medicine (Arabic, Hindustani, Pashto and Persian) is a form of traditional medicine practiced in middle-east & south-Asian countries.",
    link: "#unani",
    icon: "🩺",
    iconBg: "bg-green-100",
  },
  {
    title: "Siddha",
    description:
      '"Siddhargal" or Siddhars were the premier scientists of ancient days. Siddhars, mainly from Southern India, in the state of Tamil Nadu laid the foundation for Siddha system of medicine.',
    link: "#siddha",
    icon: "🧑‍⚕️",
    iconBg: "bg-orange-100",
  },
  {
    title: "Sowa Rigpa",
    description:
      "Sowa Rigpa is a centuries-old traditional medical system that employs a complex approach to diagnosis, incorporating techniques such as pulse analysis and urinalysis.",
    link: "#sowa-rigpa",
    icon: "👐",
    iconBg: "bg-yellow-100",
  },
  {
    title: "Ayurveda",
    description:
      'Ayurveda means "the science of life" (ayur means "life" and veda means "science" in Sanskrit). Ayurveda is a discipline of the upaveda or "auxiliary knowledge" in Vedic tradition.',
    link: "#ayurveda",
    icon: "🥗",
    iconBg: "bg-pink-100",
  },
  {
    title: "Unani",
    description:
      "Unani-tibb or Unani Medicine also spelled Yunani Medicine (Arabic, Hindustani, Pashto and Persian) is a form of traditional medicine practiced in middle-east & south-Asian countries.",
    link: "#unani",
    icon: "🩺",
    iconBg: "bg-green-100",
  },
  {
    title: "Siddha",
    description:
      '"Siddhargal" or Siddhars were the premier scientists of ancient days. Siddhars, mainly from Southern India, in the state of Tamil Nadu laid the foundation for Siddha system of medicine.',
    link: "#siddha",
    icon: "🧑‍⚕️",
    iconBg: "bg-orange-100",
  },
  {
    title: "Sowa Rigpa",
    description:
      "Sowa Rigpa is a centuries-old traditional medical system that employs a complex approach to diagnosis, incorporating techniques such as pulse analysis and urinalysis.",
    link: "#sowa-rigpa",
    icon: "👐",
    iconBg: "bg-yellow-100",
  },
];

const MedicineIcon = ({ icon, iconBg, isHovered }) => (
  <div
    className={`flex items-center justify-center w-14 h-14 rounded-full ${
      isHovered ? "bg-blue-200" : iconBg
    } mb-3 mx-auto transition-all duration-300`}
  >
    <span className="text-2xl">{icon}</span>
  </div>
);

const MedicineCard = ({ title, description, link, icon, iconBg }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex flex-col items-center p-6 rounded-lg shadow-md transition-all duration-300 h-full 
        border border-gray-200 dark:border-gray-700 hover:shadow-xl
        ${
          isHovered
            ? "bg-blue-500 text-white border-blue-500 transform scale-105"
            : "bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700"
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <MedicineIcon icon={icon} iconBg={iconBg} isHovered={isHovered} />

      <h3
        className={`text-lg font-bold mb-2 text-center transition-colors duration-300
          ${isHovered ? "text-white" : "text-blue-700 dark:text-blue-300"}`}
      >
        {title}
      </h3>

      <p
        className={`mb-4 text-sm text-center flex-grow transition-colors duration-300
          ${isHovered ? "text-blue-50" : "text-gray-800 dark:text-gray-200"}`}
      >
        {description}
      </p>

      <a
        href={link}
        className={`font-semibold transition-all duration-300 flex items-center gap-1 text-sm hover:scale-110
          ${
            isHovered
              ? "text-white hover:text-blue-100"
              : "text-black dark:text-gray-100 hover:text-blue-800 dark:hover:text-blue-300"
          }`}
      >
        Learn more
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
};

const IndianSystemsOfMedicine = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Responsive slides per view
  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width >= 1280) setSlidesPerView(4);
      else if (width >= 1024) setSlidesPerView(3);
      else if (width >= 768) setSlidesPerView(2);
      else setSlidesPerView(1);
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const maxSlide = systems.length - slidesPerView;

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div
      className="relative min-h-[60vh] bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100"
      style={{
        backgroundImage: `url(${ServiceImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-10">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
            Indian Systems of Medicine
          </h1>
          <p className="text-base md:text-lg text-gray-700 font-medium max-w-4xl mx-auto">
            The Traditional medical systems like Ayurveda, Unani, Siddha & Sowa
            Rigpa come under the heading of Indian Systems of Medicine
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-blue-50 shadow-lg rounded-full p-3 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-blue-50 shadow-lg rounded-full p-3 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </button>

          {/* Slider */}
          <div className="overflow-hidden mx-12">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{
                transform: `translateX(-${
                  currentSlide * (100 / slidesPerView)
                }%)`,
              }}
            >
              {systems.map((system, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{
                    width: `calc(${100 / slidesPerView}% - ${
                      (slidesPerView - 1) * 1.5
                    }rem / ${slidesPerView})`,
                  }}
                >
                  <MedicineCard
                    title={system.title}
                    description={system.description}
                    link={system.link}
                    icon={system.icon}
                    iconBg={system.iconBg}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const VisionAndMission = () => {
  const points = [
    "Improve access to quality and affordable Ayurveda, Unani, Siddha and Sowa-Rigna (AUS&SR) medical education",
    "Ensure availability of adequate and high quality AUS&SR medical professionals in all parts of the country",
    "Promote equitable and universal healthcare that encourages community health perspective and makes services of AUS&SR medical professionals accessible to all the citizens",
    "Encourage medical professionals to adopt latest medical research in their work and to contribute to research",
    "Objectively assess and rate medical institutions periodically in a transparent manner",
    "Maintain a National AUS&SR medical register for India",
    "Enforce high ethical standards in all aspects of AUS&SR medical services",
    "Have an effective grievance redressal mechanism.",
  ];
  return (
    <>
      {/* vision div */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column */}
          <div>
            <h2 className="text-2xl font-bold mb-4">VISION AND MISSION</h2>
            <p className="mb-6 text-base leading-relaxed">
              The Aims and objectives of the National Commission for Indian
              System of Medicine are to -
            </p>
            <ul className="space-y-5">
              {points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start group transition-colors"
                >
                  <div
                    className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full text-white font-bold text-lg mr-4 transition-colors duration-300
                bg-blue-800 group-hover:bg-orange-500`}
                  >
                    {index + 1}
                  </div>
                  <p className="text-base leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="h-full">
            <img
              src={Vision}
              alt="Vision and Mission"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const NationalCommission = () => {
  const points = [
    "To provide medical education system that improves access to quality and affordable medical education,",
    "To ensure availability of adequate and high-quality medical professionals of Indian System of Medicine in all parts of the country",
    "To promote equitable and universal healthcare that encourages community health perspective and makes services of such medical professionals accessible and affordable to all the citizens;",
    "To promote national health goals;",
    "To encourage such medical professionals to adopt latest medical research in their work and to contribute to research;",
    "To carry out Periodic and transparent assessment of medical institutions",
    "To facilitate maintenance of a medical register of Indian System of Medicine for India and enforce high ethical standards in all aspects of medical services;",
    "To provide Medical Education System that is flexible to adapt to the changing needs and has an effective grievance redressal mechanism and for matters connected therewith or incidental thereto",
  ];
  return (
    <>
      {/* vision div */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              NATIONAL COMMISSION FOR INDIAN SYSTEM OF MEDICINE
            </h2>

            <ul className="space-y-5">
              {points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start group transition-colors"
                >
                  <div
                    className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full text-white font-bold text-lg mr-4 transition-colors duration-300
                bg-blue-800 group-hover:bg-orange-500`}
                  >
                    {index + 1}
                  </div>
                  <p className="text-base leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="h-full">
            <img
              src={Vision}
              alt="Vision and Mission"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
