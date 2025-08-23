export default function EducationCard({ edu }) {
  return (
    <div className="flex w-full relative">
      {/* Timeline: Circle + Line */}
      <div className="flex flex-col items-center">
        {/* Circle */}
        <div className="w-16 h-16 rounded-full flex items-center justify-center ">
          <img
            src={edu.img}
            alt={edu.school}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Line: stretches automatically */}
        <div className="flex-1 w-1 bg-white mt-0"></div>
      </div>

      {/* Content */}
      <div
        className="w-full sm:max-w-md m-4 p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ml-8 transform transition-transform duration-300 hover:scale-105"
      >
        {/* Flex container for image and text */}
        <div className="flex items-center space-x-6">
          {/* School Logo/Image */}
          <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
            <img
              src={edu.img}
              alt={edu.school}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Degree, School Name, and Date */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-xl font-semibold text-white">
                {edu.degree}
              </h3>
              <h4 className="text-md sm:text-sm text-gray-300">
                {edu.school}
              </h4>
            </div>
            {/* Date at the bottom */}
            <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
          </div>
        </div>

        <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
        <p className="mt-4 text-gray-400">{edu.desc}</p>
      </div>
    </div>
  );
}
