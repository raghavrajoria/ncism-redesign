import React, { useState, useEffect } from "react";
import { Search, Facebook, Twitter } from "lucide-react";

export default function AccessibleTopbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [fontSize, setFontSize] = useState(
    parseInt(localStorage.getItem("fontSize")) || 16
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
    localStorage.setItem("fontSize", fontSize);
  }, [fontSize]);

  const changeFontSize = (delta) => {
    setFontSize((prev) => Math.max(12, Math.min(prev + delta, 24)));
  };

  return (
    <div className="w-full bg-blue-900 text-white text-sm px-4 py-2 flex flex-wrap items-center justify-between shadow">
      {/* Left Section: Announcement Ticker */}
      <div className="flex items-center space-x-4 overflow-hidden">
        <AnnouncementsTicker />
        <div className="hidden md:flex items-center text-xs space-x-2">
          <a href="#" className="hover:underline">
            Skip to main content
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Sitemap
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
      </div>

      {/* Right Section: Accessibility & Tools */}
      <div className="flex items-center space-x-3">
        {/* Font Size */}
        <div className="flex items-center space-x-1">
          {["A+", "A", "A-"].map((label, idx) => (
            <button
              key={label}
              onClick={() =>
                idx === 0
                  ? changeFontSize(1)
                  : idx === 1
                  ? setFontSize(16)
                  : changeFontSize(-1)
              }
              className="px-2 py-1 bg-white text-blue-900 rounded font-bold text-xs hover:bg-gray-200"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="px-2 py-1 bg-white text-blue-900 rounded text-xs font-bold hover:bg-gray-200"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {/* Language */}
        <select className="bg-white text-blue-900 px-2 py-1 rounded text-xs font-bold hover:bg-gray-200">
          <option>English</option>
          <option>हिन्दी</option>
        </select>

        {/* Social */}
        <div className="flex space-x-2">
          <a href="#">
            <Twitter
              size={18}
              className="bg-white p-1 rounded-full text-blue-900 hover:bg-gray-200"
            />
          </a>
          <a href="#">
            <Facebook
              size={18}
              className="bg-white p-1 rounded-full text-blue-900 hover:bg-gray-200"
            />
          </a>
        </div>

        {/* Search */}
        <div className="hidden sm:flex items-center bg-white rounded px-2">
          <input
            type="text"
            placeholder="Search..."
            className="text-blue-900 px-2 py-1 outline-none text-xs"
          />
          <Search size={16} className="text-blue-900" />
        </div>

        {/* What's New */}
        <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-xs font-bold flex items-center">
          🔔 What's New
        </button>
      </div>
    </div>
  );
}

/* Announcements Ticker Component */
const AnnouncementsTicker = () => {
  const announcements = [
    "Admission Notice for Academic Year 2025-26",
    "Circular on Revised Guidelines for Ayurveda Colleges",
    "National Conference on Indian Systems of Medicine – Registration Open",
    "Tender Notice: Supply of Herbal Raw Materials",
  ];

  return (
    <div className="w-56 sm:w-80 overflow-hidden whitespace-nowrap">
      <div className="animate-marquee inline-block">
        {announcements.map((item, index) => (
          <span key={index} className="mx-4 hover:underline cursor-pointer">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
