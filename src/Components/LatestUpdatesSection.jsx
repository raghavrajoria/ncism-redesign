import React from "react";
import "./Latestupdate.css";

const LatestUpdates = () => {
  const leftUpdate = [
    {
      heading: "Unani Colleges",
      items: [
        {
          text: "List of Total Colleges Across Country as on 25.05.2022",
          link: "#",
        },
        {
          text: "List of Permitted Unani Colleges 13C for the A.Y 2021-22 as on 25.05.2022",
          link: "#",
        },
        {
          text: "List of Denied Unani College for the A.Y. 2021-22 as on 25.05.2022",
          link: "#",
        },
        {
          text: "List of Permanent Disapproved Unani College as on 25.05.2022",
          link: "#",
        },
      ],
    },
    {
      heading: "Ayurveda Colleges",
      items: [
        {
          text: "List of Permitted Ayurveda Colleges for the A.Y. 2025-26",
          link: "#",
        },
        {
          text: "List of Denial of Ayurveda Colleges for the A.Y. 2025-26",
          link: "#",
        },
      ],
    },
  ];

  const rightUpdate = [
    {
      heading: "Siddha Colleges",
      items: [
        {
          text: "List of Permitted Siddha Colleges for the A.Y. 2025-26",
          link: "#",
        },
      ],
    },
    {
      heading: "Exams",
      items: [
        {
          text: "Release of Admit Card for National Teachers Eligibility Test (NTET)-2025",
          link: "#",
        },
      ],
    },
  ];

  const VerticalSlider = ({ data }) => (
    <div className="overflow-hidden h-80 border border-gray-300 rounded relative">
      <div className="slide-content">
        {[...Array(2)].map((_, repeatIndex) => (
          <div key={repeatIndex} className="space-y-6 p-4">
            {data.map((section, idx) => (
              <div key={idx}>
                <h3 className="font-bold text-gray-800 mb-2">
                  {section.heading}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item, i) => (
                    <li key={i}>
                      <a
                        href={item.link}
                        className="text-blue-600 hover:underline flex items-start"
                      >
                        <span className="mr-1">➤</span>
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-4">
      <h2 className="font-bold text-xl mb-4 text-center">LATEST UPDATE</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <VerticalSlider data={leftUpdate} />
        <VerticalSlider data={rightUpdate} />
      </div>
    </div>
  );
};

export default LatestUpdates;
