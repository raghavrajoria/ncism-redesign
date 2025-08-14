import "./brandingStrip.css";
import NcismB from "../assets/ncismBranding.jpg";
import AzadiBranding from "../assets/AzadiBranding.jpg";
import G20Branding from "../assets/G20_logo.jpg";

export default function BrandingStrip() {
  return (
    <div className="w-full bg-white py-3 border-b border-gray-200">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* NCISM Logo */}
        <div className="flex justify-center mb-3 md:mb-0 md:justify-start">
          <img src={NcismB} alt="NCISM Logo" className="h-16 object-contain" />
        </div>

        {/* Azadi + G20 Logos */}
        <div className="flex justify-center md:justify-end space-x-4">
          <img
            src={AzadiBranding}
            alt="Azadi Ka Amrit Mahotsav"
            className="h-14 object-contain"
          />
          <img
            src={G20Branding}
            alt="G20 India 2023"
            className="h-14 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
