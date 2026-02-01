import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/mockuper.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>PotheGo – AI Driven Smart Parcel Management System</h2>
              <p className="text-white-50 md:text-xl">
                PotheGo is an intelligent parcel booking, tracking and delivery
                platform that connects individuals and businesses across all 64
                districts of Bangladesh. With AI-driven route optimization,
                real-time tracking, and predictive delivery time estimation,
                PotheGo ensures safe, fast and reliable parcel delivery.
              </p>

              {/* GitHub Button with Icon */}
              <a
                href="https://github.com/abrarasif11/PotheGo---Client-Site"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition"
              >
                <FaGithub size={20} />
                View on GitHub
              </a>

              {/* Live Demo Button */}
              <a
                href="https://pothego-fe657.web.app/" // replace with your live site URL
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 ml-2 bg-[#DAECFE] text-black px-5 py-2 rounded-lg hover:bg-[#2D2D37] hover:text-[#DAECFE] transition"
              >
                <FaExternalLinkAlt size={18} />
                Live Demo
              </a>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/Screenshot 2026-01-30 170212.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>
                Budget Buddy - AI Driven Personal Finance Management System with
                Real Time Analysis and Suggestions
              </h2>
              <p className="text-white-50 md:text-xl">
                Budget Buddy is an AI-driven personal finance management system
                that tracks income and expenses, analyzes spending in real time
                and provides smart, personalized budgeting and savings
                suggestions to help users make better financial decisions.
              </p>
              {/* GitHub Button with Icon */}
              <a
                href="https://github.com/abrarasif11/finance-management-system-frontend-capstone"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition"
              >
                <FaGithub size={20} />
                View on GitHub
              </a>

              {/* Live Demo Button */}
              <a
                href="https://budgetbudddy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 ml-2 bg-[#DAECFE] text-black px-5 py-2 rounded-lg hover:bg-[#2D2D37] hover:text-[#DAECFE] transition"
              >
                <FaExternalLinkAlt size={18} />
                Live Demo
              </a>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img
                  src="/images/Screenshot 2026-01-30 170446.png"
                  alt="YC Directory App"
                />
              </div>
              <h2>Cine Fix - A Online Movie and TV Shows Website</h2>
              <p className="text-white-50 md:text-xl">
                An online movie and TV shows website that allows users to
                browse, search and discover movies and series with detailed
                information, ratings and an intuitive, user-friendly interface.
              </p>
              {/* GitHub Button with Icon */}
              <a
                href="https://github.com/abrarasif11/cinefix"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition"
              >
                <FaGithub size={20} />
                View on GitHub
              </a>

              {/* Live Demo Button */}
              <a
                href="https://cinefixx.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 ml-2 bg-[#DAECFE] text-black px-5 py-2 rounded-lg hover:bg-[#2D2D37] hover:text-[#DAECFE] transition"
              >
                <FaExternalLinkAlt size={18} />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
