import React from "react";
import { Facebook, Twitter, Instagram, Send, Phone, Mail } from "lucide-react";
import LogoImg from "../assets/ncism-logo.jpg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-100 dark:text-gray-300 py-10 transition-colors duration-300">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Address */}
        <div>
          <Link to="/">
            <img src={LogoImg} alt="NCISM" className="mb-4 w-32" />
          </Link>
          <p className="text-sm leading-relaxed">
            Plot No. T-19, 1st & 2nd Floor, Block IV Dhanwantari Bhawan, Road No
            66, Punjabi Bagh (West), New Delhi-110026, India
          </p>

          {/* Social Icons */}
          <div className="flex space-x-3 mt-4">
            {[
              { icon: Facebook, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Send, href: "#" },
            ].map(({ icon: Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                className="p-2 border border-gray-400 rounded hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold mb-4 text-lg">Contact</h3>
          <p className="flex items-center gap-2 text-sm mb-2">
            <Phone size={16} /> 011-25221002
          </p>
          <p className="flex items-center gap-2 text-sm mb-2">
            <Phone size={16} /> 011-25221003
          </p>
          <p className="flex items-center gap-2 text-sm">
            <Mail size={16} />
            <a
              href="mailto:secretary@ncismindia.org"
              className="no-underline hover:text-primary-400 transition-colors"
            >
              secretary@ncismindia.org
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Introduction", "Ayurveda", "Unani", "Siddha", "Sowa-Rigpa"].map(
              (item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="no-underline hover:text-primary-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-bold mb-4 text-lg">Resources</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Acts & Amendments",
              "Rules & Regulations",
              "Annual Report",
              "Advertisements",
              "Tenders",
              "Privacy Policy",
            ].map((item, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="no-underline hover:text-primary-400 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 dark:border-gray-800 pt-4 text-center text-sm">
        Copyright © 2021 NCISM. All Rights Reserved by{" "}
        <a
          href="#"
          className="no-underline hover:text-primary-400 transition-colors"
        >
          NCISM
        </a>
      </div>
    </footer>
  );
}
