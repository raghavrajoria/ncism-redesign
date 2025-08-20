import React, { useState } from "react";

import MemberofAdvisory from "../Files/MembersofCouncilforIndianSystemofMedicine.pdf";
const MembersofAdvisory = () => {
  const [pdfUrl, setPdfUrl] = useState(MemberofAdvisory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            Members of Advisory Council for Indian System of Medicine
          </h1>
          <p className="text-lg text-gray-600 mb-8 text-center">
            National Commission for Indian System of Medicine, New Delhi
          </p>

          {/* PDF Viewer Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Advisory Council Members
              </h2>
            </div>

            {/* PDF Viewer */}
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <iframe
                src={pdfUrl}
                title="Advisory Council Members PDF"
                className="w-full h-[600px]"
                frameBorder="0"
              >
                <p className="p-4 text-center">
                  Your browser does not support PDFs.
                  <a
                    href={pdfUrl}
                    className="text-blue-600 hover:underline ml-1"
                  >
                    Download the PDF
                  </a>
                  .
                </p>
              </iframe>
            </div>

            <div className="mt-4 text-sm text-gray-500">
              <p>
                If the PDF doesn't display properly,{" "}
                <a href={pdfUrl} className="text-blue-600 hover:underline">
                  click here to download it
                </a>
                .
              </p>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              About the Advisory Council
            </h2>
            <p className="text-gray-700">
              The Advisory Council for Indian System of Medicine provides
              guidance and recommendations to the National Commission on matters
              related to education, practice, and research in Indian System of
              Medicine. The council consists of eminent practitioners,
              educators, and researchers in the field.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MembersofAdvisory;
