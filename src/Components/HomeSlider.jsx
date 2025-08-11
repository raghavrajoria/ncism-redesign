import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import SliderImg1 from "../assets/WHO.jpg";
import SliderImg2 from "../assets/banner4.jpg";
import SliderImg3 from "../assets/banner3.jpg";
import SliderImg4 from "../assets/IndianMed.jpg";

const slides = [
  {
    id: 1,
    image: SliderImg1,
    caption:
      "World Health Organization (WHO) #Tradition | To maintain a Central Register of Indian Medicine and revise the Register from time to time",
  },
  { id: 2, image: SliderImg2, caption: "स्वास्थ्य का आधार" },
  { id: 3, image: SliderImg3, caption: "स्वास्थ्य का आधार" },
  { id: 4, image: SliderImg4, caption: "स्वास्थ्य का आधार" },
];

export default function HomeSlider() {
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [direction, setDirection] = useState("forward");
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Typing animation effect
  useEffect(() => {
    const caption = slides[currentSlideIndex].caption;
    let timer;

    if (direction === "forward") {
      if (charIndex < caption.length) {
        timer = setTimeout(() => setCharIndex(charIndex + 1), 50);
      } else {
        timer = setTimeout(() => setDirection("backward"), 1500);
      }
    } else {
      if (charIndex > 0) {
        timer = setTimeout(() => setCharIndex(charIndex - 1), 30);
      } else {
        timer = setTimeout(() => setDirection("forward"), 500);
      }
    }

    setDisplayText(caption.substring(0, charIndex));

    return () => clearTimeout(timer);
  }, [charIndex, direction, currentSlideIndex]);

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop
      onSlideChange={(swiper) => {
        setCurrentSlideIndex(swiper.realIndex);
        setCharIndex(0);
        setDirection("forward");
      }}
      className="w-full h-[500px]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={slide.id}>
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
            {index !== 0 && (
              <div className=" w-full text-center z-10 ">
                <h1 className="font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl mb-1">
                  National Commission for Indian System of Medicine
                </h1>
                <h2 className="font-bold text-base sm:text-lg md:text-2xl lg:text-3xl text-green-700">
                  ।। आयुषे सर्वलोकानाम् ।।
                </h2>
              </div>
            )}

            <div className="absolute inset-0 flex items-center justify-center z-10 hidden md:flex">
              <p className="bg-black/50 text-white px-4 py-2 rounded-lg text-lg md:text-2xl">
                {displayText}
              </p>
            </div>

            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
