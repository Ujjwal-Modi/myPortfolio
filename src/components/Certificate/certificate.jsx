import React from "react";
import { ExternalLink, Calendar, Award } from "lucide-react";
import { Certificate } from "../../constants"; // Import your data

const certificate = () => {
  return (
    <section
      id="certificate"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Certificate</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Professional certifications that demonstrate my commitment to
          continuous learning and expertise.
        </p>
      </div>

      {/* Certificates Entries */}
      {Certificate.map((certificate) => (
        <div className="rounded-2xl border backdrop-blur-md shadow-2xl bg-gray-900 overflow-hidden hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300">
          <div className="flex flex-col md:flex-row gap-6 p-6">
            {/* Certificate Logo/Image */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-4">
                <img
                  src={certificate.img}
                  alt="Certificate badge"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
            </div>
            {/* Certificate Details */}
            <div className="flex-1 space-y-4">
              {/* Title and Icon */}
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-2xl font-bold text-white">
                  {certificate.title}
                </h3>
                <Award className="w-6 h-6 text-white flex-shrink-0" />
              </div>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {certificate.description}
              </p>
              {/*Issuer and Date */}
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white">Issued by:</span>
                  <span className="text-gray-400">{certificate.issuer}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-violet-600" />
                  <span className="text-gray-400">
                    {certificate.issuingDate}
                  </span>
                </div>
              </div>

              {/* Skills */}
              <h4 className="text-sm font-semibold text-white mb-2">
                Key Skills:
              </h4>
              <div className="flex flex-wrap gap-2">
                {certificate.skill.map((skill, index) => (
                  <div
                    key={index}
                    className="rounded-full px-2 py-1 bg-[#251f38] text-xs font-semibold text-purple-500"
                  >
                    {skill}
                  </div>
                ))}
              </div>
              {/*Button to view certificate */}
              <div className="inline-block group bg-gradient-to-r from-[hsl(221,83%,53%)] to-[hsl(262,83%,68%)] text-white rounded-xl shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all duration-300">
                <a
                  href={certificate.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2 text-sm font-semibold"
                >
                  View Certificate
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default certificate;
