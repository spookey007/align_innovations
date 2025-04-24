import React from "react";
import aboutContent from "../content/about.json";

const About = () => {
  return (
    <section
      className="flex bg-gray-800 py-10"
      style={{
        backgroundImage: `url(${aboutContent.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-10">
          {aboutContent.title}
        </h2>
        {aboutContent.description.map((paragraph, index) => (
          <p
            key={index}
            className="text-white text-lg leading-relaxed max-w-3xl mx-auto mt-6"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
