import React from "react";
import TitleHeader from "../components/TitleHeader";

const certificationsData = [
  {
    id: 1,
    title: "GP Accelerator Idea Design Bootcamp",
    org: "Grameenphone Ltd. • June 2025",
    description:
      "Selected among 450+ teams across Bangladesh for the Grameenphone Accelerator Idea Design Bootcamp. Collaborated with mentors and industry leaders to refine startup strategies and accelerate prototype development.",
    coverImage: "/images/certificate1.jpg", // BIG image
    logo: "/images/gp-logo.png", // small logo
    tags: ["#GPAccelerator", "#IdeaDesignBootcamp", "#Entrepreneurship"],
  },
  {
    id: 2,
    title: "Nominated At APICTA 2025 in Taiwan",
    org: "Asia Pacific ICT Alliance • November 2025",
    description:
      "Nominated to represent Bangladesh at APICTA 2025 — recognizing innovation and digital impact for empowering SMEs.",
    coverImage: "/images/certificate3.png",
    logo: "/images/apicta.png",
    tags: ["#APICTA2025", "#GlobalStage", "#Innovation"],
  },
  {
    id: 3,
    title: "Firebase & Cloud Deployment Certification",
    org: "Google Firebase",
    description:
      "Certified in deploying scalable applications using Firebase Authentication, Hosting, Firestore, and Cloud Functions.",
    coverImage: "/images/firebase-cover.jpg",
    logo: "/images/firebase.png",
    tags: ["#Firebase", "#Cloud", "#Deployment"],
  },
];

const Certifications = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-10">
      <TitleHeader
        title="Certifications & Achievements"
        sub="🏆 Professional certifications and key accomplishments"
      />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificationsData.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl overflow-hidden bg-[#0b0f14] border border-cyan-500/30
                       hover:shadow-cyan-500/30 hover:shadow-xl transition-all duration-300"
          >
            {/* BIG IMAGE */}
            <div className="relative h-48 sm:h-56 md:h-60">
              <img
                src={item.coverImage}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <div className="flex items-center gap-3">
                <img
                  src={item.logo}
                  alt="logo"
                  className="w-10 h-10 rounded-full bg-white p-1"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-cyan-400 text-sm">{item.org}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mt-5">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs sm:text-sm px-3 py-1 rounded-full
                               bg-cyan-500/20 text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* GLOW LINE */}
            <div className="h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
