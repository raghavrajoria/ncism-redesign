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
    <div className="w-full bg-blue-800 text-white text-sm px-4 py-2 flex flex-wrap items-center justify-between">
      {/* Date/Time */}
      <div className="m-1">
        <DateTimePill />
      </div>

      {/* Controls */}
      <div className="flex items-center space-x-3">
        {/* Font size */}
        <div className="flex items-center space-x-1">
          <button
            onClick={() => changeFontSize(1)}
            className="px-2 py-1 bg-white text-blue-800 rounded text-xs font-bold"
          >
            A+
          </button>
          <button
            onClick={() => setFontSize(16)}
            className="px-2 py-1 bg-white text-blue-800 rounded text-xs font-bold"
          >
            A
          </button>
          <button
            onClick={() => changeFontSize(-1)}
            className="px-2 py-1 bg-white text-blue-800 rounded text-xs font-bold"
          >
            A-
          </button>
        </div>

        {/* Theme */}
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="px-2 py-1 bg-white text-blue-800 rounded text-xs font-bold"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {/* Language */}
        <select className="bg-white text-blue-800 px-2 py-1 rounded text-xs font-bold">
          <option>English</option>
          <option>हिन्दी</option>
        </select>

        {/* Social */}
        <div className="flex space-x-2">
          <a href="#">
            <Twitter
              size={18}
              className="bg-white p-1 rounded-full text-blue-800"
            />
          </a>
          <a href="#">
            <Facebook
              size={18}
              className="bg-white p-1 rounded-full text-blue-800"
            />
          </a>
        </div>

        {/* Search */}
        {/* <div className="flex items-center bg-white rounded px-2">
          <input
            type="text"
            placeholder="Search..."
            className="text-blue-800 px-2 py-1 outline-none text-xs"
          />
          <Search size={16} className="text-blue-800" />
        </div> */}
      </div>
    </div>
  );
}
const DateTimePill = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = dateTime.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = dateTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="bg-white text-gray-800 px-4 py-2 rounded-full shadow-md flex items-center gap-3">
      <span className="font-medium">{formattedDate}</span>
      <span className="font-semibold">{formattedTime}</span>
    </div>
  );
};
