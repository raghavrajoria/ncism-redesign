import React, { useRef, useState, useEffect } from "react";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import ServiceImg from "../assets/ServiceImg.jpg";
import ChairpersonImg from "../assets/chairperson.png";
import MinisterImg from "../assets/MinisterImg.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  GraduationCap,
  Hospital,
  Globe2,
  Flag,
  Dna,
  ClipboardCheck,
  BookOpenCheck,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

import HomeSlider from "../Components/HomeSlider";
import NewsTicker from "../Components/NewsTicker";
import LatestUpdatesSection from "../Components/LatestUpdatesSection";
import LogoSlider from "../Components/LogoSlider";
import VisionMission from "../Components/VisionMission";

const Home = () => {
  return (
    <div>
      <div className="mt-1">
        <HomeSlider />
      </div>

      <div className="mt-2">
        <NewsTicker />
      </div>
      <IntroductionSection />
      <VisionMission />
      <IndianSystemsOfMedicine />
      <NationalCommission />
      <LatestUpdatesSection />
      <LogoSlider />
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

const NationalCommission = () => {
  const points = [
    {
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
      title: "Quality Medical Education",
      desc: "To provide a medical education system that improves access to quality and affordable learning.",
    },
    {
      icon: <Hospital className="w-6 h-6 text-blue-600" />,
      title: "Healthcare Accessibility",
      desc: "Ensure high-quality Indian System of Medicine professionals are available across the country.",
    },
    {
      icon: <Globe2 className="w-6 h-6 text-blue-600" />,
      title: "Equitable Healthcare",
      desc: "Promote universal healthcare that is affordable and accessible to all citizens.",
    },
    {
      icon: <Flag className="w-6 h-6 text-blue-600" />,
      title: "National Health Goals",
      desc: "Contribute actively to achieving the nation's healthcare and wellness objectives.",
    },
    {
      icon: <Dna className="w-6 h-6 text-blue-600" />,
      title: "Research & Innovation",
      desc: "Encourage adoption of latest research and promote contribution to medical studies.",
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-blue-600" />,
      title: "Institution Assessment",
      desc: "Carry out periodic and transparent evaluation of medical institutions.",
    },
    {
      icon: <BookOpenCheck className="w-6 h-6 text-blue-600" />,
      title: "Ethical Standards",
      desc: "Maintain a medical register and enforce high ethics in medical services.",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-blue-600" />,
      title: "Adaptable Education System",
      desc: "Ensure flexibility to meet evolving needs with strong grievance redressal.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title and Description */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            National Commission for Indian System of Medicine
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Working towards excellence in medical education, research, and
            healthcare accessibility for the Indian System of Medicine.
          </p>
        </div>

        {/* Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 transition-all border border-blue-100"
            >
              <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                {point.icon}
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                {point.title}
              </h3>
              <p className="text-gray-600 text-sm">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

function IntroductionSection() {
  return (
    <section className="bg-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Introduction Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            In pursuance of the provisions of National Commission for Indian
            System of Medicine (NCISM) Act 2020 (14 of 2020), the Indian
            Medicine Central Council (IMCC) Act 1970 (48 of 1970) has been
            repealed and all the provisions of the National Commission for
            Indian System of Medicine (NCISM) have come into force with effect
            from the 11th day of June 2021. Under the provisions of section 59
            (2) of NCISM Act 2020, the Central Government has constituted the
            Commission and four Autonomous Boards on the same day. Medical
            standards, requirements, and other provisions of the IMCC Act 1970
            and the rules and regulations made thereunder shall continue to be
            in force till new standards or requirements as specified under the
            new act or rules and regulations come into force. However, the
            provisions of concerned regulations which are inconsistent with the
            provisions of NCISM Act 2020 shall not be applicable.
          </p>
        </motion.div>

        {/* Profiles */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Minister Card */}
          <div className="flex items-start gap-4 bg-blue-50 p-4 rounded-xl shadow-md hover:shadow-lg transition">
            <img
              src={MinisterImg}
              alt="Shri Prataprao Jadhav"
              className="w-20 h-24 object-cover rounded-lg border"
            />
            <div>
              <h3 className="font-semibold text-blue-900">
                Shri Prataprao Jadhav
              </h3>
              <p className="text-sm text-gray-700 leading-snug">
                Hon’ble Minister of State (Independent Charge) of Ministry of
                AYUSH and Minister of State of Ministry of Health & Family
                Welfare, Government of India
              </p>
            </div>
          </div>

          {/* Chairperson Card */}
          <div className="flex items-start gap-4 bg-blue-50 p-4 rounded-xl shadow-md hover:shadow-lg transition">
            <img
              src={ChairpersonImg}
              alt="Chairperson"
              className="w-20 h-24 object-cover rounded-lg border"
            />
            <div>
              <h3 className="font-semibold text-blue-900">Chairperson</h3>
              <p className="text-sm text-gray-700 leading-snug">
                [Chairperson's designation and role description goes here...]
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
