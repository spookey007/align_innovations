import React, { useState,useEffect } from 'react';

const WhyChoose = () => {
  const [device, setDevice] = useState("");

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setDevice("ios");
    } else if (/android/.test(userAgent)) {
      setDevice("android");
    } else if (/win/.test(userAgent)) {
      setDevice("windows");
    } else if (/mac/.test(userAgent)) {
      setDevice("mac");
    } else {
      setDevice("other");
    }
  }, []);
  const companyName = "Align Innovations";
  const phoneNumber = "+1973XXXXXXX";
  const address = "Sydney, Australia"; // Replace with actual address
  const email = "info@aligninnovations.com.au"; // Replace with actual email
  // Phone Number Link based on device
  const getPhoneLink = () => {
    if (device === "ios") return `facetime:${phoneNumber}`; // FaceTime for iOS
    if (device === "android") return `tel:${phoneNumber}`; // Android Dialer
    if (device === "windows" || device === "mac") return `skype:${phoneNumber}?call`; // Skype
    return `tel:${phoneNumber}`; // Default fallback
  };

  // Address Link for Google/Apple Maps
  const getAddressLink = () => {
    if (device === "ios") {
      return `http://maps.apple.com/?q=${encodeURIComponent(address)}`; // Apple Maps for iOS
    }
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`; // Google Maps for others
  };
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-12 py-12 text-gray-900">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Empowering Safer Workplaces Across Australia
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
          {companyName} provides expert workplace health and safety solutions to help businesses stay compliant, reduce risks, and promote a culture of safety.
        </p>
      </div>

      <hr className="border-t-2 border-gray-300 my-10 w-3/4 mx-auto" />

      {/* Services Section */}
      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        {[
          {
            title: "Workplace Health & Safety (WHS) Compliance",
            description: "Ensure compliance with Australian WHS laws, reducing risks and preventing workplace incidents."
          },
          {
            title: "Risk Assessment & Management",
            description: "Identify workplace hazards, conduct risk assessments, and implement effective safety controls."
          },
          {
            title: "Safety Audits & Inspections",
            description: "Comprehensive audits to improve safety culture and ensure legal compliance."
          },
          {
            title: "ISO Certification & Compliance",
            description: "Guidance on ISO 9001, ISO 14001, and ISO 45001 certification for quality and environmental standards."
          }
        ].map((service, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
            <p className="text-lg text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>

      <hr className="border-t-2 border-gray-300 my-10 w-3/4 mx-auto" />

      {/* Call to Action Section */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Get Expert Safety Consultation Today
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
          Protect your workforce and ensure compliance with our professional health and safety consultancy services.
        </p>

        <div className="mt-6 text-lg">
          {/* Contact Details */}
          <p className="font-semibold text-gray-800">
            📞 <a href={`tel:${phoneNumber}`} className="hover:text-black-600">{phoneNumber}</a>
          </p>
          <p className="font-semibold text-gray-800">📍 {address}</p>
          <p className="text-gray-700">
            📧 <a href={`mailto:${email}`} className="hover:text-black-600">{email}</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
