import React from "react";
import TitleHeader from "../components/TitleHeader";

const certifications = [
  {
    id: 1,
    title: "UITS Victory Day Programming Contest",
    company: "UITS IT Club",
    date: "December 2021",
    certificateImg: "/images/certificate1.jpg",
    companyLogo: "/images/images.png",
    description:
      "Advanced frontend concepts including React architecture, responsive UI and performance optimization.",
    tags: ["#React", "#Frontend", "#UI"],
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    company: "Coursera",
    date: "Jan 2025",
    certificateImg: "/images/certificate3.png",
    companyLogo: "/images/images.png",
    description:
      "Hands-on full stack development using Node.js, REST APIs, and modern web stacks.",
    tags: ["#FullStack", "#NodeJS", "#API"],
  },
  {
    id: 3,
    title: "JavaScript Advanced Concepts",
    company: "Udemy",
    date: "Aug 2024",
    certificateImg: "/images/certificate2.png",
    companyLogo: "/images/images.png",
    description:
      "Deep dive into JavaScript fundamentals, async patterns, closures and real-world problem solving.",
    tags: ["#JavaScript", "#ES6", "#Async"],
  },
];

const Certifications = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-10">
      <TitleHeader
        title="Certifications & Achievements"
        sub="🏆 Professional certifications and key accomplishments"
      />

      {/* Responsive Grid */}
      <div className="grid gap-6 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02]"
            style={{ backgroundColor: "#0E0E10", color: "#E2EDF7" }}
          >
            {/* Certificate Image Wrapper */}
            <div className="w-full h-56 sm:h-60 md:h-64 lg:h-64  flex items-center justify-center">
              <img
                src={cert.certificateImg}
                alt={cert.title}
                className="max-h-full max-w-full object-contain p-4"
              />
            </div>

            {/* Content */}
            <div className="p-5 space-y-4">
              {/* Company + Logo */}
              <div className="flex items-center gap-3">
                <img
                  src={cert.companyLogo}
                  alt={cert.company}
                  className="w-10 h-10 object-contain bg-white rounded-full p-1"
                />
                <div>
                  <h3 className="text-lg font-semibold">{cert.title}</h3>
                  <p className="text-sm opacity-70">
                    {cert.company} • {cert.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed opacity-90">
                {cert.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {cert.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 rounded-full border border-[#E2EDF7]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
