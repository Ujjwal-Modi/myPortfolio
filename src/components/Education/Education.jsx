import React from "react";
import { education } from "../../constants"; // Import the education data
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="flex flex-row relative justify-center items-start">

        {/* Education Entries */}
        <div className="flex flex-col ml-10 ">
          {education.map((edu, index) => (
            <EducationCard edu={edu} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
