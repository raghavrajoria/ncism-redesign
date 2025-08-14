import React from "react";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  UserGroupIcon,
  GlobeAltIcon,
  BeakerIcon,
  ChartBarIcon,
  ClipboardDocumentListIcon,
  ScaleIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

const missionPoints = [
  {
    icon: (
      <AcademicCapIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    ),
    title: "Quality & Affordable Education",
    desc: "Improve access to quality and affordable Ayurveda, Unani, Siddha & Sowa-Rigpa (AUS&SR) medical education.",
  },
  {
    icon: (
      <UserGroupIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    ),
    title: "Skilled Professionals Nationwide",
    desc: "Ensure availability of high-quality AUS&SR professionals in all parts of the country.",
  },
  {
    icon: <GlobeAltIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    title: "Universal Healthcare Access",
    desc: "Promote equitable and universal healthcare with a community health perspective.",
  },
  {
    icon: <BeakerIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    title: "Research & Innovation",
    desc: "Encourage adoption of the latest medical research and contributions to innovation.",
  },
  {
    icon: <ChartBarIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    title: "Transparent Institution Rating",
    desc: "Objectively assess and rate medical institutions periodically in a transparent manner.",
  },
  {
    icon: (
      <ClipboardDocumentListIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    ),
    title: "National Medical Register",
    desc: "Maintain a National AUS&SR Medical Register for India.",
  },
  {
    icon: <ScaleIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    title: "High Ethical Standards",
    desc: "Enforce high ethical standards in all aspects of AUS&SR medical services.",
  },
  {
    icon: (
      <ChatBubbleOvalLeftEllipsisIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    ),
    title: "Grievance Redressal",
    desc: "Have an effective grievance redressal mechanism.",
  },
];

export default function VisionMission() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-16 px-6 md:px-16">
      {/* Vision Section */}
      <motion.div
        className="max-w-5xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4">
          Our Vision
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          "To regulate and promote the Indian Systems of Medicine through
          quality education, research, and ethical practice — making it
          accessible and beneficial to all citizens."
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {missionPoints.map((point, idx) => (
          <motion.div
            key={idx}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-blue-100 dark:border-gray-700"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex items-center mb-4">{point.icon}</div>
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
              {point.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {point.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
