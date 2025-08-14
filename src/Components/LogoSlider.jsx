import React from "react";

import LogoImg1 from "../assets/relsites1.png";
import LogoImg2 from "../assets/relsites2.png";
import LogoImg3 from "../assets/relsites3.png";
import LogoImg4 from "../assets/relsites4.png";
import LogoImg5 from "../assets/relsites5.png";

import "./logoslider.css";

export const LogoSlider = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap relative">
      <div className="inline-flex scroll-content">
        {[LogoImg1, LogoImg2, LogoImg3, LogoImg4, LogoImg5].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`Company ${i + 1}`}
            className="h-12 mr-10 object-contain"
          />
        ))}
        {[LogoImg1, LogoImg2, LogoImg3, LogoImg4, LogoImg5].map((logo, i) => (
          <img
            key={"repeat-" + i}
            src={logo}
            alt={`Company repeat ${i + 1}`}
            className="h-12 mr-10 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
