import React, { useEffect, useState } from "react";
import servicesData from "../content/services.json"; // Import JSON file
import { FaBriefcaseMedical, FaBalanceScale, FaShieldAlt, FaGavel } from "react-icons/fa";

// Icon mapping
const iconMap = {
  FaBriefcaseMedical: <FaBriefcaseMedical className="text-blue-900 text-5xl" />,
  FaBalanceScale: <FaBalanceScale className="text-blue-900 text-5xl" />,
  FaShieldAlt: <FaShieldAlt className="text-blue-900 text-5xl" />,
  FaGavel: <FaGavel className="text-blue-900 text-5xl" />
};

const PracticeAreas = () => {
  return (
    <section className="flex bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="rounded-full shadow-lg text-3xl font-bold text-center mb-8 text-blue-900 bg-gray-300 w-64 mx-auto">
          Practice Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-4 gap-y-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden text-center relative transform transition h-100 duration-300 ease-in-out hover:scale-105 hover:shadow-2xl p-4"
            >
              <div className="flex justify-center mb-4">{iconMap[service.icon]}</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">{service.name}</h3>
              <h4 className="text-blue-900 font-bold mb-2">{service.headingone}</h4>
              <ul className="list-disc text-left pl-4 mt-2 space-y-1 text-blue-900">
                {service.headingonedetails.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <h4 className="text-blue-900 font-bold mt-4 mb-2">{service.headingtwo}</h4>
              <ul className="list-disc text-left pl-4 mt-2 space-y-1 text-blue-900">
                {service.headingtwodetails.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
