import React, { useState } from "react";
import heroContent from "../content/home.json";
import "../assets/css/hero.css";
import Testimonials from "./Testimonials";
import WhyChoose from "./WhyChoose";
import ContactModal from "./ContactModal";
import heroImage from "../assets/images/hero_03.png";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat p-4 md:p-10 lg:p-16"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Left Section - Video & Info */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start bg-blue-900 bg-opacity-70 p-6 md:p-8 lg:p-12 rounded-lg text-white shadow-lg">
          <h3 className="text-lg md:text-2xl font-semibold mb-4">
            {heroContent.legalGuidance.heading}
          </h3>
          <ul className="list-disc pl-5 text-sm md:text-base space-y-1">
            {heroContent.legalGuidance.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          {/* Contact Info */}
          <div className="mt-4 text-left">
            <p className="text-lg mb-2">
              <span className="font-bold">Call Now:</span>
              <a
                href={`tel:${heroContent.contact.phone}`}
                className="text-base md:text-lg font-bold text-white hover:text-yellow-400"
              >
                {heroContent.contact.phone}
              </a>
            </p>
            <p className="text-sm">Call us, and we'll get back to you ASAP.</p>
            <p className="text-sm">
              <span className="font-bold">Email:</span>
              <a
                href={`mailto:${heroContent.contact.email}`}
                className="text-base md:text-lg font-bold text-white hover:text-yellow-400"
              >
                {heroContent.contact.email}
              </a>
            </p>
          </div>
        </div>

        {/* Right Section - Title & CTA */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-6 md:p-8 lg:p-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg">
            {heroContent.title}
          </h1>
          <p className="text-lg md:text-xl mt-4 text-white font-light">
            {heroContent.slogan.main}
          </p>
          <p className="text-sm md:text-base mt-2 text-gray-200">
            {heroContent.slogan.subtext}
          </p>
          <button
            className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-lg transition duration-300 shadow-lg"
            onClick={openModal}
          >
            {heroContent.buttonText}
          </button>
        </div>
      </div>

      {/* Modal */}
      <ContactModal isOpen={isModalOpen} closeModal={closeModal} />

      {/* Additional Sections */}
      <div className="container mx-auto px-4">
        <WhyChoose />
      </div>
    </>
  );
};

export default Hero;
