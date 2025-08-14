import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

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

  const Card = ({ data }) => (
    <motion.div
      className="bg-white rounded-xl shadow-md p-5 overflow-hidden relative border border-gray-200"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="space-y-6"
        animate={{ y: ["0%", "-50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {[...Array(2)].map((_, repeatIndex) => (
          <div key={repeatIndex} className="space-y-6">
            {data.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold text-blue-700 border-b pb-1 mb-2">
                  {section.heading}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <a
                        href={item.link}
                        className="flex items-start gap-2 text-gray-700 hover:text-blue-600 transition"
                      >
                        <ArrowRightIcon className="w-4 h-4 mt-1 text-blue-500" />
                        <span>{item.text}</span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );

  return (
    <section className="p-6 bg-gray-50">
      <h2 className="font-bold text-2xl mb-6 text-center text-blue-800 tracking-wide">
        LATEST UPDATES
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card data={leftUpdate} />
        <Card data={rightUpdate} />
      </div>
    </section>
  );
};

export default LatestUpdates;
