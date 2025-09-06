import React from 'react';
import Tilt from 'react-parallax-tilt';
import profileImage from "../../assets/profile2.jpg";
import { TypeAnimation } from 'react-type-animation';
const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-8 md:mt-12 lg:mt-16"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 flex-shrink-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Ujjwal
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
       <TypeAnimation
  sequence={[
    'ML Enthusiast', 1000,  // Types "Hello.", then waits 1s
    'Frontend Dev.', 1000, 
    'CodeChef 2⭐', 1000,
    'Coder', 1000,   // Deletes and types "World!"
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
/>

          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            Motivated Computer Science student with a strong foundation in DSA and hands-on experience in machine
learning. Active participant in coding hackathons and contributor on CodeChef. Passionate about exploring AI, ML,
and NLP, while currently expanding skills in web development with React.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1ygrJe_XRd_A6GCT3vlFlcSMXw0MGjjQp/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            View CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end flex-shrink-0">
          <Tilt
            className="w-48 sm:w-64 md:w-96 max-w-full aspect-square border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Ujjwal Modi"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;