import React from "react";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard"; // Import your GlowCard

const certifications = [
  {
    id: 1,
    title: "UITS Victory Day Programming Contest",
    company: "UITS IT Club",
    date: "December 2021",
    certificateImg: "/images/certificate1.jpg",
    companyLogo: "/images/images.png",
    description:
      "Participated in a competitive programming contest organized by the UITS IT Club, focusing on problem solving, algorithmic thinking and real time coding challenges. Collaborated under pressure to develop efficient solutions and strengthen logical reasoning skills.",
    tags: [
      "#ProgrammingContest",
      "#CompetitiveProgramming",
      "#ProblemSolving",
      "UITS",
    ],
  },
  {
    id: 2,
    title: "Complete Web Development Course",
    company: "Programming Hero",
    date: "December 2022",
    certificateImg: "/images/certificate3.png",
    companyLogo: "/images/id0L1WtXTD.jpg",
    description:
      "Master web development from scratch with Jhankar Mahbub and Programming Hero! Learn HTML, CSS, JavaScript, React, Node.js and build real-world projects to kickstart your developer journey. Perfect for beginners aiming to become full-stack developers.",
    tags: ["#Webdevelopment", "#Frontend", "#WebDesign"],
  },
  {
    id: 3,
    title: "Complete NodeJs Online Course",
    company: "SkillUp",
    date: "January 2024",
    certificateImg: "/images/certificate2.png",
    companyLogo: "/images/be4de5ff827e4e34a80c4a57b8a4fa43.jpg",
    description:
      "Learn Node.js from scratch with SkillUp! Build scalable backend applications, work with databases, REST APIs and real world projects. Perfect for aspiring backend and full-stack developers.",
    tags: ["#NodeJS", "#SkillUp", "#BackendDevelopment", "#LearnToCode"],
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
        {certifications.map((cert, index) => (
          <GlowCard key={cert.id} card={cert} index={index}>
            <div
              className="rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
              style={{ backgroundColor: "#0E0E10", color: "#E2EDF7" }}
            >
              {/* Certificate Image Wrapper */}
              <div className="w-full h-56 sm:h-60 md:h-64 lg:h-64 flex items-center justify-center">
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
                  {cert.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full border border-[#E2EDF7]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
