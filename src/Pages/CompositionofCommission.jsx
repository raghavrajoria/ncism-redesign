import React, { useState } from "react";

import compositionPDF from "../Files/ListofCommissionMembers.pdf";

export const CompositionofCommission = () => {
  const [activeTab, setActiveTab] = useState("pdf");

  const commissionMembers = [
    {
      id: 1,
      name: "Prof. (Dr.) B.L. Mehra",
      designation: "Chairman",
      role: "Chairman of NCISM",
      contact: "Telephone/Email: chairman@ncismindia.org",
      mobile: "011-25221002/1001, Mobile: 9418017615",
    },
    {
      id: 2,
      name: "Dr. Siddalingesh M. Kudari",
      designation: "President",
      role: "Board of Ayurveda",
      contact: "E-mail: president.boa@ncismindia.org",
      mobile: "011-25221002/1003, 9143116566",
    },
    {
      id: 3,
      name: "Dr. Mohammad Mazahir Alam",
      designation: "President",
      role: "Board of Unani, Siddha and Sowa-Rigpa",
      contact: "E-mail: president.buss@ncismindia.org",
      mobile: "011-25221002/1003, 6398087486",
    },
    {
      id: 4,
      name: "Dr. Narayan S. Jadhav",
      designation: "President",
      role: "Medical Assessment and Rating Board",
      contact: "E-mail: president.marbism@ncismindia.org",
      mobile: "011-25221005, 8329881473",
    },
    {
      id: 5,
      name: "Dr. Rajani A. Nayar",
      designation: "President",
      role: "Board of Ethics and Registration",
      contact: "E-mail: president.berism@ncismindia.org",
      mobile: "011-25221004, 9447587082",
    },
    {
      id: 6,
      name: "Dr. Kousthubha Upadhyaya",
      designation: "Advisor (Ayurveda)",
      role: "Ministry of AYUSH (Equivalent to Joint Secretary, Government of India)",
      contact: "Email: adviser-ayush[at]gov[dot]in",
      mobile: "011-20815348",
    },
    {
      id: 7,
      name: "Dr. M. A. Qasmi",
      designation: "Advisor (Unani)",
      role: "Ministry of AYUSH (Equivalent to Joint Secretary, Government of India)",
      contact: "Email: mukhtar.qasmi@gov.in, unanimedicine@gmail.com",
      mobile: "9810337148",
    },
    {
      id: 8,
      name: "Dr. N. Zaheer Ahmad",
      designation: "Director General",
      role: "Central Council for Research in Unani Medicine, New Delhi",
      contact: "Email: unanimedicine@gmail.com",
      mobile: "011-28521981",
    },
    {
      id: 9,
      name: "Prof. Dr. Manjusha Rajagopala",
      designation: "Director",
      role: "All India Institute of Ayurveda, New Delhi",
      contact: "Email: contact-us@aiia.gov.in",
      mobile: "011-26950401/402",
    },
    {
      id: 10,
      name: "Prof. Rabinarayan Acharya",
      designation: "Director General",
      role: "Central Council for Research in Ayurveda Sciences, New Delhi",
      contact: "Email: dgccras@nic.in",
      mobile: "011-28520748, 9924585855",
    },
    {
      id: 11,
      name: "Dr. N.J. Muthu Kumar",
      designation: "Director General",
      role: "Central Council for Research in Siddha, Chennai",
      contact: "Email: dgccrs.chn-ayush@gov.in",
      mobile: "044-22411611, 9444206843",
    },
    {
      id: 12,
      name: "Prof. Saiyad Shah Alam",
      designation: "Director",
      role: "National Institute of Unani, Bengaluru",
      mobile: "8023584180",
    },
    {
      id: 13,
      name: "Dr. Vijay Kumar Dwivedi",
      designation: "Director",
      role: "North Eastern Institute of Ayurveda and Homoeopathy, Shillong",
      contact: "Email: dir-neiah@nic.in, neiahshillong@gmail.com",
    },
    {
      id: 14,
      name: "Prof. (Dr.) Tanuja Manoj Nesari",
      designation: "Director",
      role: "Institute of Teaching and Research in Ayurveda, Jamnagar (Gujarat)",
      contact: "Email: director@itra.edu.in",
      mobile: "0288-2552014",
    },
    {
      id: 15,
      name: "Prof. Sanjeev Sharma",
      designation: "Vice-Chancellor",
      role: "National Institute of Ayurveda, Jaipur",
      contact: "Email: director.nia@nic.in, profsanjeevhp@gmail.com",
      mobile: "9418079691",
    },
    {
      id: 16,
      name: "Prof. Dr. G. Senthilvel",
      designation: "Director",
      role: "National Institute of Siddha, Chennai",
      contact: "Email: chennai-nis@gov.in, nischennaisiddha@yahoo.co.in",
      mobile: "044-22411611",
    },
    {
      id: 17,
      name: "Dr. Bishnu Prasad Sarma",
      designation: "Principal (Retd.)",
      role: "Govt. Ayurveda College, Guwahati, Assam (Part Time Member)",
      contact: "Email: dr.bpsarma@gmail.com",
      mobile: "9864036018",
    },
    {
      id: 18,
      name: "Dr. Suryakiran P. Wagh",
      designation: "Professor",
      role: "Yashwant Ayurveda College, Kodoli, Maharashtra (Part Time Member)",
      contact: "Email: suryakiran_wagh@rediffmail.com",
      mobile: "9822846910",
    },
    {
      id: 19,
      name: "Vaidya P. Rammanohar",
      designation: "Research Director",
      role: "Amrita School of Ayurveda, Kerala (Part Time Member)",
      contact: "Email: rammanoharp@gmail.com",
      mobile: "6238032945",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            Composition of Commission
          </h1>
          <p className="text-lg text-gray-600 mb-8 text-center">
            National Commission for Indian System of Medicine, New Delhi
          </p>

          {/* Tabs for switching between PDF and Table view */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              className={`py-3 px-6 font-medium ${
                activeTab === "pdf"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("pdf")}
            >
              PDF View
            </button>
            <button
              className={`py-3 px-6 font-medium ${
                activeTab === "table"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("table")}
            >
              Table View
            </button>
          </div>

          {activeTab === "pdf" ? (
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Commission Members PDF
              </h2>
              <iframe
                src={compositionPDF}
                title="Composition PDF"
                className="w-full h-[600px] rounded-lg border"
              />
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-blue-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                      >
                        SL No.
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                      >
                        Name & Designation
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                      >
                        Role / Commission
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider"
                      >
                        Contact Information
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {commissionMembers.map((member) => (
                      <tr
                        key={member.id}
                        className={member.note ? "bg-blue-50" : ""}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {member.id}
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-gray-900">
                            {member.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            {member.designation}
                          </div>
                          {member.note && (
                            <div className="text-xs text-blue-600 mt-1 italic">
                              {member.note}
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {member.role}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {member.contact && (
                            <div className="mb-1">
                              <span className="font-medium">Contact:</span>{" "}
                              {member.contact}
                            </div>
                          )}
                          {member.mobile && (
                            <div>
                              <span className="font-medium">Phone:</span>{" "}
                              {member.mobile}
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Additional Information */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              About the Commission
            </h2>
            <p className="text-gray-700 mb-4">
              The National Commission for Indian System of Medicine (NCISM) has
              been established by an Act of Parliament known as the National
              Commission for Indian System of Medicine Act, 2020. The Commission
              consists of representatives from various boards and ministries.
            </p>
            <p className="text-gray-700">
              The composition includes the Chairperson, Presidents of different
              boards, and ex-officio members representing the Ministry of AYUSH,
              Government of India.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Contact the Commission
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">
                  General Inquiries
                </h3>
                <p className="text-gray-600">Email: info@ncism.gov.in</p>
                <p className="text-gray-600">Phone: +91-11-1234-5678</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">
                  Office Address
                </h3>
                <p className="text-gray-600">
                  NCISM Office, AYUSH Bhawan, B-Block, GPO Complex,
                  <br />
                  INA, New Delhi - 110023
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
