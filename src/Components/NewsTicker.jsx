import React from "react";
import "./NewsTicker.css";

const updates = [
  {
    text: "List of Colleges Granted Letter of Permission (LOP) to Increase Seats (UG & PG)",
    url: "https://example.com/1",
  },
  {
    text: "Start New PG in Existing Unani Colleges from the A.Y. 2025",
    url: "https://example.com/2",
  },
  {
    text: "Important Notice Regarding Counseling Schedule",
    url: "https://example.com/3",
  },
];

const NewsTicker = () => {
  return (
    <div className="news-ticker">
      <div className="ticker-label">Latest Update</div>

      <div className="ticker-content">
        <div className="ticker-marquee">
          {updates.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
