import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

const menuStructure = {
  Home: [{ label: "Face Page", path: "/coming-soon" }],

  "About NCISM": [
    { label: "Introduction", path: "/about/introduction" },
    { label: "Main Objectives", path: "/about/main-objectives" },
    { label: "Chairperson", path: "/about/chairperson" },
    {
      label: "Autonomous Boards",
      children: [
        {
          label: "Board of Ayurveda (BoA)",
          path: "/about/board-of-ayurveda",
        },
        {
          label: "Board of Unani, Siddha and Sowa-Rigpa (BUSS)",
          path: "/about/board-of-unani-siddha-and-sowa-rigpa",
        },
        {
          label:
            "Board of Ethics and Registration for Indian Systeks of Medicine (BERISM)",
          path: "/about/board-of-ethics-and-registration-for-indian-systems-of-medicine",
        },
        {
          label:
            "Medical Assessment and Rating Board for Indian Systems of Medicine (MARBISM)",
          path: "/about/medical-assessment-and-rating-board-for-indian-systems-of-medicine",
        },
      ],
    },
    {
      label: "Composition of Commission ",
      path: "/about/composition-of-commission",
    },
    { label: "Advisory Board", path: "/about/advisory-board" },
    { label: "Officers of Ncism", path: "/about/officers-ncism" },
    { label: "Organisational Chart", path: "/about/coming-soon" },
  ],
  "Indian Medicine": [
    {
      label: "Ayurveda",
      children: [
        {
          label: "Introduction",
          path: "/ayurveda/introduction",
        },
        {
          label: "List of Ayurveda Colleges",
          path: "/ayurveda/list-of-colleges",
        },
        {
          label: "Curriculum & Syllabus",
          path: "/sowa-rigpa/curriculum-and-syllabus",
          // children: [
          //   {
          //     label: "UG",
          //     path: "uyurveda/curriculum/ug",
          //   },
          //   {
          //     label: "PG",
          //     path: "uyurveda/curriculum/pg",
          //   },
          // ],
        },
        {
          label: "Academic Calender",
          path: "/sowa-rigpa/curriculum-and-syllabus",
          // children: [
          //   {
          //     label: "UG",
          //     path: "uyurveda/calender/ug",
          //   },
          //   {
          //     label: "PG",
          //     path: "uyurveda/calender/pg",
          //   },
          // ],
        },
        {
          label: "library",
          path: "/ayurveda/library",
        },
      ],
    },
    {
      label: "Unani",
      children: [
        {
          label: "Introduction",
          path: "/unani/introduction",
        },
        {
          label: "Research",
          path: "/unani/research",
        },
        {
          label: "List of Unani Colleges",
          path: "/unani/list-of-colleges",
        },
        {
          label: "Curriculum & Syllabus",
          path: "/sowa-rigpa/curriculum-and-syllabus",
          // children: [
          //   {
          //     label: "Old Syllabus",
          //     path: "uyurveda/curriculum/ug",
          //   },
          //   {
          //     label: "New Syllabus",
          //     path: "uyurveda/curriculum/pg",
          //   },
          // ],
        },
        {
          label: "Academic Calender",
          path: "/sowa-rigpa/curriculum-and-syllabus",
          // children: [
          //   {
          //     label: "UG",
          //     path: "uyurveda/calender/ug",
          //   },
          //   {
          //     label: "PG",
          //     path: "uyurveda/calender/pg",
          //   },
          // ],
        },
      ],
    },
    {
      label: "Siddha",
      children: [
        {
          label: "Introduction",
          path: "/siddha/introduction",
        },

        {
          label: "List of Siddha Colleges",
          path: "/siddha/list-of-colleges",
        },
        {
          label: "Curriculum & Syllabus",
          path: "/sowa-rigpa/curriculum-and-syllabus",
          // children: [
          //   {
          //     label: "Old Syllabus",
          //     path: "siddha/curriculum/ug",
          //   },
          //   {
          //     label: "New Syllabus",
          //     path: "siddha/curriculum/pg",
          //   },
          // ],
        },
        {
          label: "Academic Calender",

          path: "/sowa-rigpa/curriculum-and-syllabus",
          // children: [
          //   {
          //     label: "UG",
          //     path: "siddha/calender/ug",
          //   },
          //   {
          //     label: "PG",
          //     path: "siddha/calender/pg",
          //   },
          // ],
        },
      ],
    },
    {
      label: "Sowa-Rigpa",
      children: [
        {
          label: "Introduction",
          path: "/sowa-rigpa/introduction",
        },

        {
          label: "List of Sowa-Rigpa Colleges",
          path: "/sowa-rigpa/list-of-colleges",
        },
        {
          label: "Curriculum & Syllabus",
          path: "/sowa-rigpa/curriculum-and-syllabus",
        },
        {
          label: "Academic Calender",
          path: "/sowa-rigpa/curriculum-and-syllabus",
          // children: [
          //   {
          //     label: "UG",
          //     path: "sowa-rigpa/calender/ug",
          //   },
          // ],
        },
      ],
    },
    {
      label: "General",
      children: [
        {
          label: "NCISM Schemes for Financial Assistence ",
          path: "/general/schemes-financial-assistence ",
        },

        {
          label: "Textbook Quality Assessment Scale",
          path: "/general/textbook-quality",
        },
        {
          label: "Ayush Module for MBBS Internship",
          path: "/general/ayush-module",
        },
        {
          label: "Transcript Certificate",
          path: "/general/transcript-certificate",
        },
        {
          label: "Publication Grant Beneficiaries ",
          path: "/general/publication-grant-beneficiaries",
        },
      ],
    },
  ],
  Registration: [
    {
      label: "State Board Acts",
      path: "/registration-main/state-board-acts",
    },
    {
      label: "List of State Boards",
      path: "/registration-main/list-of-state-boards",
    },
    {
      label: "List of Degrees recognised under 2nd Schedule of IMCC Act 1970",
      path: "/registration-main/list-of-degrees-under-1970-act ",
    },
    {
      label: "National Register Notifications",
      path: "/registration-main/development/national-register-notifications",
    },
  ],

  "Information Desk": [
    {
      label: "Acts & Amendment",

      children: [
        {
          label: "IMCC Act 1970",
          path: "/info-desk/acts-amendment/imcc",
        },
        {
          label: "NCISM Act 2020",
          path: "/info-desk/acts-amendment/ncism",
        },
      ],
    },
    {
      label: "Rules & Regulations",

      children: [
        {
          label: "Under IMCC Act 1970",
          path: "/info-desk/acts-amendment/imcc",
        },
        {
          label: "Under NCISM Act 2020",
          path: "/info-desk/acts-amendment/ncism",
        },
      ],
    },
    { label: "Guidelines", path: "/info-desk/Guidelines" },
    {
      label: "Approval Process Handbook",
      path: "/info-desk/approval-process-handbook",
    },

    {
      label: "Permission Status ASUSR",

      children: [
        {
          label: "Ayurdeva Colleges",
          path: "/info-desk/ayurveda-colleges-list",
        },
        {
          label: "Unani Colleges",
          path: "/info-desk/unani-colleges-list",
        },
        {
          label: "Siddha Colleges",
          path: "/info-desk/siddha-colleges-list",
        },
        {
          label: "Sowa-Rigpa Colleges",
          path: "/info-desk/sowa-rigpa-colleges-list",
        },
      ],
    },

    {
      label: "Recognized Medical Qualifications",

      children: [
        {
          label: "Under NCISM ACT ",
          path: "/info-desk/acts-amendment/ncism",
        },
        {
          label: "Under ICCM ACT",
          path: "/info-desk/acts-amendment/imcc",
        },
      ],
    },

    {
      label: "Curriculum and Notification",
      path: "/info-desk/curriculum-and-notification",
    },

    {
      label: "Meetings",

      children: [
        {
          label: "Under NCISM ACT ",
          path: "/info-desk/acts-amendment/ncism",
        },
        {
          label: "Under ICCM ACT",
          path: "/info-desk/acts-amendment/imcc",
        },
      ],
    },
    {
      label: "Annual Report",

      children: [
        {
          label: "Under NCISM ACT ",
          path: "/info-desk/acts-amendment/ncism",
        },
        {
          label: "Under ICCM ACT",
          path: "/info-desk/acts-amendment/imcc",
        },
      ],
    },

    { label: "Information Under RTI Act", path: "/info-desk/info-under-rti" },
    {
      label: "Important Court Desicions",
      path: "/info-desk/important-court-desicions",
    },
    { label: "College Locations", path: "/info-desk/colege-locations" },
  ],

  "E-Learning": [
    { label: "Electives", path: "/e-learning-electives" },
    { label: "Ebook", path: "/elearning-ebooks" },
  ],
  Rating: [
    {
      label: "Ayurveda Colleges",
      children: [
        {
          label: "A.Y 2024-2025",
          path: "/rating/ayurveda-colleges-ay-2024-25",
        },
        {
          label: "A.Y 2025-2026",
          path: "/rating/ayurveda-colleges-ay-2025-26",
        },
      ],
    },
    {
      label: "Unani Colleges",
      children: [
        { label: "A.Y 2024-2025", path: "/rating/Unani-colleges-ay-2024-25" },
        { label: "A.Y 2025-2026", path: "/rating/Unani-colleges-ay-2025-26" },
      ],
    },
    {
      label: "Siddha Colleges",
      children: [
        { label: "A.Y 2024-2025", path: "/rating/Siddha-colleges-ay-2024-25" },
        { label: "A.Y 2025-2026", path: "/rating/Siddha-colleges-ay-2025-26" },
      ],
    },
    {
      label: "Framework for Assesment and rating ASU colleges ",
      children: [
        { label: "A.Y 2024-2025", path: "/rating/ASU-colleges-ay-2024-25" },
        { label: "A.Y 2025-2026", path: "/rating/ASU-colleges-ay-2025-26" },
      ],
    },
  ],
  Others: [
    { label: "Download Forms", path: "/others/download-forms" },
    { label: "Advertisements", path: "/others/advertisements" },
    { label: "Citizen Charter", path: "/others/citizen-charter" },
    { label: "Grievance", path: "/others/grievance" },
    {
      label: "Award And Achievements ",
      path: "/others/award-and-achievements",
    },
    { label: "Fees", path: "/others/fees" },
    { label: "Vacancies", path: "/others/vacancies" },
    { label: "Gallery", path: "/others/gallery" },
    { label: "Archives", path: "/others/archives" },
    { label: "Contact Us", path: "/others/contact-us" },
  ],
  "Vigilance Corner": [
    {
      label: "CVO",
      path: "/vigilance-corner/cvo",
    },
    {
      label: "Logged Complaints",
      path: "/vigilance-corner/logged-complaints",
    },
    {
      label: "Goi (PIVPI) Resolution",
      path: "/vigilance-corner/goi-resolution",
    },
  ],
  RTI: [
    {
      label: "Sou Moto Disclosure",
      path: "/rti/sou-moto-disclosure",
    },
  ],
  Results: [
    {
      label: "NTET 2024",
      children: [
        {
          label: "Link to Digilocker",
          path: "https://www.digilocker.gov.in/",
        },
      ],
    },
    {
      label: "How to access Digilocker with URL",
      children: [
        {
          label: "SoP for Access NCISM certificates from DigiLocker",
          path: "https://ncismindia.org/SoP%20for%20access%20NCISM%20certificate%20from%20DigiLocker.pdf",
        },
      ],
    },
  ],

  Login: [
    {
      label: "Institution Login",
      path: "/coming-soon",
    },
    {
      label: "Apply for restoring of withheld teacher's code",
      path: "/coming-soon",
    },
    {
      label: "Application Under Section 29 URL Login",
      path: "/coming-soon",
    },
    {
      label: "Visitor's Login",
      path: "/coming-soon",
    },
    {
      label: "Practitioner Login",
      path: "/coming-soon",
    },
    {
      label: "State Board Login",
      path: "/coming-soon",
    },
    {
      label: "Institute Login for Ayurveda Day",
      path: "/coming-soon",
    },
    {
      label: "Apply for Registration",
      path: "/coming-soon",
    },
    {
      label: "State Board Login",
      path: "/coming-soon",
    },
  ],
};

function Navbar() {
  // const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const location = useLocation();
  const menuRefs = useRef({});

  const handleDropdownToggle = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
    setOpenSubDropdown(null);
  };

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileMain, setOpenMobileMain] = useState(null); // which first-level is open
  const [openMobileSub, setOpenMobileSub] = useState(null); // which second-level is open

  const toggleMobileMain = (label) => {
    setOpenMobileMain((prev) => (prev === label ? null : label));
    setOpenMobileSub(null); // reset second-level when switching main section
  };

  const toggleMobileSub = (e, index) => {
    e.stopPropagation(); // prevent closing parent
    setOpenMobileSub((prev) => (prev === index ? null : index));
  };

  const isExternal = (url) => url.startsWith("http");

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown-container")) {
        setOpenDropdown(null);
        setOpenSubDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getDropdownPosition = (element) => {
    if (!element) return "left-0";
    const rect = element.getBoundingClientRect();
    return window.innerWidth - rect.right < 300 ? "right-0" : "left-0";
  };

  const getSubmenuPosition = (element) => {
    if (!element) return "left-full ml-2";
    const rect = element.getBoundingClientRect();
    return window.innerWidth - rect.right < 300
      ? "right-full mr-2"
      : "left-full ml-2";
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center py-2">
          {/* Desktop Menu */}
          <nav className="hidden md:flex flex-wrap justify-center relative dropdown-container w-full">
            {Object.entries(menuStructure).map(([mainLabel, items]) => (
              <div
                key={mainLabel}
                className="relative group px-1 py-1"
                ref={(el) => (menuRefs.current[mainLabel] = el)}
                onMouseEnter={() => setOpenDropdown(mainLabel)}
                onMouseLeave={() => {
                  if (!openSubDropdown) setOpenDropdown(null);
                }}
              >
                <button
                  onClick={() => handleDropdownToggle(mainLabel)}
                  className={`flex items-center gap-1 px-4 py-2 rounded-md transition-colors ${
                    openDropdown === mainLabel
                      ? "text-blue-600 font-medium"
                      : "hover:text-blue-600"
                  }`}
                >
                  {mainLabel}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      openDropdown === mainLabel ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* First Level Dropdown */}
                {openDropdown === mainLabel && (
                  <div
                    className={`absolute top-full ${getDropdownPosition(
                      menuRefs.current[mainLabel]
                    )} bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 w-56 z-50 border border-gray-100`}
                    onMouseEnter={() => setOpenDropdown(mainLabel)}
                    onMouseLeave={() => {
                      if (!openSubDropdown) setOpenDropdown(null);
                    }}
                  >
                    <div
                      className={`absolute -top-3 ${
                        getDropdownPosition(menuRefs.current[mainLabel]) ===
                        "right-0"
                          ? "right-6"
                          : "left-6"
                      } w-4 h-4 bg-white dark:bg-gray-800 transform rotate-45 border-t border-l border-gray-200`}
                    ></div>

                    {items.map((item, i) => (
                      <div key={i}>
                        {item.children ? (
                          <div
                            className="relative"
                            onMouseEnter={() => setOpenSubDropdown(i)}
                          >
                            <button className="w-full text-left px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 flex justify-between items-center rounded-md group">
                              <span className="flex items-center">
                                <span className="w-1 h-4 mr-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 bg-blue-500"></span>
                                {item.label}
                              </span>
                              <ChevronRight size={14} />
                            </button>

                            {/* Second Level Dropdown */}
                            {openSubDropdown === i && (
                              <div
                                className={`absolute top-0 ${getSubmenuPosition(
                                  menuRefs.current[mainLabel]
                                )} bg-white dark:bg-gray-700 shadow-lg rounded-md py-2 w-56 z-50 border border-gray-100`}
                                onMouseEnter={() => setOpenSubDropdown(i)}
                                onMouseLeave={() => setOpenSubDropdown(null)}
                              >
                                <div
                                  className={`absolute top-3 ${
                                    getSubmenuPosition(
                                      menuRefs.current[mainLabel]
                                    ) === "right-full mr-2"
                                      ? "-right-1 border-r border-b"
                                      : "-left-1 border-l border-b"
                                  } w-4 h-4 bg-white dark:bg-gray-700 transform rotate-45 border-gray-200`}
                                ></div>

                                {item.children.map((child, j) =>
                                  isExternal(child.path) ? (
                                    <a
                                      key={j}
                                      href={child.path}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-600 rounded-md group"
                                    >
                                      <span className="w-1 h-4 mr-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 bg-blue-500"></span>
                                      {child.label}
                                    </a>
                                  ) : (
                                    <Link
                                      key={j}
                                      to={child.path}
                                      className={`flex items-center px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-600 rounded-md group ${
                                        location.pathname === child.path
                                          ? "font-medium text-blue-600"
                                          : ""
                                      }`}
                                      onClick={() => {
                                        setOpenDropdown(null);
                                        setOpenSubDropdown(null);
                                      }}
                                    >
                                      <span
                                        className={`w-1 h-4 mr-2 rounded-full transition-all duration-200 ${
                                          location.pathname === child.path
                                            ? "opacity-100 bg-blue-500"
                                            : "opacity-0 group-hover:opacity-100 bg-blue-500"
                                        }`}
                                      ></span>
                                      {child.label}
                                    </Link>
                                  )
                                )}
                              </div>
                            )}
                          </div>
                        ) : isExternal(item.path) ? (
                          <a
                            key={i}
                            href={item.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md group"
                          >
                            <span className="w-1 h-4 mr-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 bg-blue-500"></span>
                            {item.label}
                          </a>
                        ) : (
                          <Link
                            key={i}
                            to={item.path}
                            className={`flex items-center px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md group ${
                              location.pathname === item.path
                                ? "font-medium text-blue-600"
                                : ""
                            }`}
                            onClick={() => setOpenDropdown(null)}
                          >
                            <span
                              className={`w-1 h-4 mr-2 rounded-full transition-all duration-200 ${
                                location.pathname === item.path
                                  ? "opacity-100 bg-blue-500"
                                  : "opacity-0 group-hover:opacity-100 bg-blue-500"
                              }`}
                            ></span>
                            {item.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden self-end">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {Object.entries(menuStructure).map(([mainLabel, items]) => (
              <div key={mainLabel} className="space-y-1">
                {/* First-level toggle */}
                <button
                  onClick={() => toggleMobileMain(mainLabel)}
                  className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium ${
                    openMobileMain === mainLabel
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {mainLabel}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      openMobileMain === mainLabel ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* First-level content */}
                {openMobileMain === mainLabel && (
                  <div className="pl-6 space-y-1">
                    {items.map((item, i) =>
                      item.children ? (
                        <div key={i} className="space-y-1">
                          {/* Second-level toggle */}
                          <button
                            onClick={(e) => toggleMobileSub(e, i)}
                            className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-medium ${
                              openMobileSub === i
                                ? "text-blue-600 dark:text-blue-400"
                                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                            }`}
                          >
                            <span className="flex items-center">
                              <span
                                className={`w-1 h-4 mr-2 rounded-full ${
                                  openMobileSub === i
                                    ? "bg-blue-500"
                                    : "bg-transparent"
                                }`}
                              ></span>
                              {item.label}
                            </span>
                            <ChevronDown
                              size={14}
                              className={`transition-transform duration-200 ${
                                openMobileSub === i ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {/* Second-level content */}
                          {openMobileSub === i && (
                            <div className="pl-4 space-y-1">
                              {item.children.map((child, j) =>
                                isExternal(child.path) ? (
                                  <a
                                    key={j}
                                    href={child.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center px-3 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    <span className="w-1 h-4 mr-2 rounded-full"></span>
                                    {child.label}
                                  </a>
                                ) : (
                                  <Link
                                    key={j}
                                    to={child.path}
                                    className={`flex items-center px-3 py-2 rounded-md text-sm ${
                                      location.pathname === child.path
                                        ? "font-medium text-blue-600 dark:text-blue-400"
                                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                    }`}
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    <span
                                      className={`w-1 h-4 mr-2 rounded-full ${
                                        location.pathname === child.path
                                          ? "bg-blue-500"
                                          : ""
                                      }`}
                                    ></span>
                                    {child.label}
                                  </Link>
                                )
                              )}
                            </div>
                          )}
                        </div>
                      ) : isExternal(item.path) ? (
                        <a
                          key={i}
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-3 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                          onClick={() => setMobileOpen(false)}
                        >
                          <span className="w-1 h-4 mr-2 rounded-full"></span>
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          key={i}
                          to={item.path}
                          className={`flex items-center px-3 py-2 rounded-md text-sm ${
                            location.pathname === item.path
                              ? "font-medium text-blue-600 dark:text-blue-400"
                              : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                          }`}
                          onClick={() => setMobileOpen(false)}
                        >
                          <span
                            className={`w-1 h-4 mr-2 rounded-full ${
                              location.pathname === item.path
                                ? "bg-blue-500"
                                : ""
                            }`}
                          ></span>
                          {item.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
